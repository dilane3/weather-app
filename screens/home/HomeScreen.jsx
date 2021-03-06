import React, { useContext, useEffect, useState } from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { useLoadData } from '../../api/loadData'
import TemperatureItem from '../../components/TemperatureItem'
import WeatherType from '../../components/WeatherType'
import weatherContext from '../../data-manager/context/weatherContext'
import { formatCountry, formatDate, formatTemperature } from '../../utils/format'
import { styles } from './style'
import { getLocation } from '../../utils/getPermission'
import networkContext from '../../data-manager/context/networkContext'

const HomeScreen = ({ navigation }) => {
  // Get data from global state
  const { 
    weather: currentWeather,
    currentWeatherDay,
    addWeather, 
    changeWeatherDay 
  } = useContext(weatherContext)
  const { isConnected, isInternetReachable } = useContext(networkContext)

  // Definition of the local state
  const [city, setCity] = useState(null)

  // Get current city
  useEffect(async () => {
    if (testConnectivity()) {
      navigation.navigate("Error")
    } else {
      const { data } = await getLocation()
    
      if (data) {
        const { city } = data[0]
  
        if (city) {
          setCity(city)
        } else {
          setCity("yaounde")
        }
      } else {
        setCity("yaounde")
      }
    }
  }, [isConnected, isInternetReachable])

  useEffect(() => {
    if (currentWeatherDay === -1) {
      changeWeatherDay(null)

      navigation.navigate("Error")
    }
  }, [currentWeatherDay])

  // Load weather from the server
  useLoadData(city, addWeather, changeWeatherDay, isConnected && isInternetReachable)

  const {
    city: {
      name,
      country
    },
    list
  } = currentWeather

  const testConnectivity = () => {
    return !isConnected || !isInternetReachable
  }

  return (
    <>
      {
        currentWeatherDay !== null && city ? (
          currentWeatherDay > -1 ? (
            <View style={styles.container}>
              <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate("List")}>
                  <Icon name="menu-outline" type="ionicon" color="#303030" />
                </Pressable>

                <Pressable onPress={() => navigation.navigate("Search")}>
                  <Icon name="search-outline" type="ionicon" color="#303030" />
                </Pressable>
              </View>

              <ScrollView style={styles.bodyContainer}>
                <Text style={{...styles.location}}>{ name }, <Text style={styles.country}>{ formatCountry(country) }</Text></Text>

                <View style={styles.weatherCard}>
                  <View style={styles.weatherCardTop}>
                    <Image 
                      source={require('../../assets/icons/cloudy-day.png')}
                      style={styles.weatherImage}
                    />
                    <Text style={styles.weatherType}>Forte Pluie</Text>
                    <Text style={styles.weatherDate}>{ formatDate(list[currentWeatherDay].date, "full") }</Text>

                    <Text style={styles.weatherTemperature}>{`${formatTemperature(list[currentWeatherDay].temperature.average)}\u00b0`}</Text>
                  </View>
                  <View style={styles.weatherCardBottom}>
                    <View style={styles.weatherItems}>
                      <WeatherType
                        iconName="wind"
                        typeIcon="feather"
                        type="VENT"
                        value={list[currentWeatherDay].windSpeed + "m/s"}
                        style={true}
                      />

                      <WeatherType
                        iconName="thermometer"
                        type="TEMPERATURE"
                        value={`${formatTemperature(list[currentWeatherDay].temperature.average)}\u00b0`}
                      />
                    </View>

                    <View style={styles.weatherItems}>
                      <WeatherType
                        iconName="water"
                        type="HUMIDITE"
                        value={list[currentWeatherDay].humidity + "%"}
                        style={true}
                      />

                      <WeatherType
                        iconName="pulse"
                        type="PRESSION"
                        value={list[currentWeatherDay].pressure + "mbar"}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.weatherList}>
                  <View style={styles.weatherListHeader}>
                    <Text style={{ fontFamily: "Poppins-Bold" }}>{ formatDate(list[currentWeatherDay].date) }</Text>
                    <View style={styles.weatherNext}>
                      <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate("List")}>
                        <Text style={{ color: "#6f6f6f", marginRight: 5, fontFamily: "Poppins-Regular" }}>{ list.slice(11).length } Jours Suivant</Text>
                      </TouchableOpacity>
                      <Icon
                        name="chevron-forward"
                        type="ionicon"
                        color="#6f6f6f"
                        size={20}
                        style={{ marginBottom: 3 }}
                      />
                    </View>
                  </View>

                  <ScrollView style={styles.weatherListItems} horizontal={true}>
                    {
                      list.slice(0, 10).map((temp, index) => {
                        return (
                          <TemperatureItem 
                            key={index} 
                            data={temp}
                            index={index}
                            active={Number(currentWeatherDay) === Number(index) ? true:false} 
                          />
                        )
                      })
                    }
                  </ScrollView>
                </View>
              </ScrollView>

              <StatusBar barStyle="dark-content" />
            </View>
          ):(
            <View>
              <Text>Hello</Text>
            </View>
          )
        ):(
          <View style={{...styles.loading, backgroundColor: "#6541ff"}}>
            <Image 
              source={require("../../assets/icon.png")}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                marginBottom: 20
              }}
            />
            <ActivityIndicator size="large" color="#fff" />

            <StatusBar barStyle="light-content" />
          </View>
        )
      }
    </>
  )
}

export default HomeScreen