import React, { useContext, useEffect } from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { useLoadData } from '../../api/loadData'
import TemperatureItem from '../../components/TemperatureItem'
import WeatherType from '../../components/WeatherType'
import weatherContext from '../../data-manager/context/weatherContext'
import { formatDate, formatTemperature } from '../../utils/format'
import { styles } from './style'

const HomeScreen = ({ navigation }) => {
  // Get data from global state
  const { 
    weather: currentWeather,
    currentWeatherDay,
    addWeather, 
    changeWeatherDay 
  } = useContext(weatherContext)

  console.log(currentWeatherDay)

  // Load weather from the server
  useLoadData("Yaounde", addWeather, changeWeatherDay)

  const {
    city: {
      name,
      country
    },
    list
  } = currentWeather

  return (
    <>
      {
        currentWeatherDay > -1 ? (
          <View style={styles.container}>
            <View style={styles.header}>
              <Pressable onPress={() => navigation.navigate("List")}>
                <Icon name="menu-outline" type="ionicon" color="#303030" />
              </Pressable>
            </View>

            <ScrollView style={styles.bodyContainer}>
              <Text style={{...styles.location, fontFamily: "Poppins-Black"}}>{ name }, <Text style={styles.country}>{ country }</Text></Text>

              <View style={styles.weatherCard}>
                <View style={styles.weatherCardTop}>
                  <Image 
                    source={require('../../assets/icons/cloudy-day.png')}
                    style={styles.weatherImage}
                  />
                  <Text style={styles.weatherType}>Forte Pluie</Text>
                  <Text style={styles.weatherDate}>{ formatDate(list[currentWeatherDay].date, "full") }</Text>

                  <Text style={styles.weatherTemperature}>{`${formatTemperature(list[currentWeatherDay].temperature.average)}\u2103`}</Text>
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
                      value={`${formatTemperature(list[currentWeatherDay].temperature.average)}\u2103`}
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
                  <Text style={{ fontWeight: "bold" }}>{ formatDate(list[currentWeatherDay].date) }</Text>
                  <View style={styles.weatherNext}>
                    <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate("List")}>
                      <Text style={{ color: "#6f6f6f", marginRight: 5 }}>{ list.slice(11).length } Jours Suivant</Text>
                    </TouchableOpacity>
                    <Icon
                      name="chevron-forward"
                      type="ionicon"
                      color="#6f6f6f"
                      size={20}
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
          </View>
        ):(
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#6541ff" />
          </View>
        )
      }
    </>
  )
}

export default HomeScreen