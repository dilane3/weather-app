import React, { useContext, useEffect } from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { useLoadData } from '../../api/loadData'
import TemperatureItem from '../../components/TemperatureItem'
import WeatherType from '../../components/WeatherType'
import weatherContext from '../../data-manager/context/weatherContext'
import { formatTemperature } from '../../utils/formatTemperature'
import { styles } from './style'

const HomeScreen = ({ navigation }) => {
  const { weather: currentWeather, addWeather } = useContext(weatherContext)
  useLoadData("Douala", addWeather)

  const {
    city: {
      name,
      country
    },
    list
  } = currentWeather

  return (
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
            <Text style={styles.weatherDate}>Dimanche, 02 Oct.</Text>

            <Text style={styles.weatherTemperature}>{`${formatTemperature(list[0].temperature.average)}\u2103`}</Text>
          </View>
          <View style={styles.weatherCardBottom}>
            <View style={styles.weatherItems}>
              <WeatherType
                iconName="thermometer"
                type="VENT"
                value="19.2km/j"
                style={true}
              />

              <WeatherType
                iconName="thermometer"
                type="TEMPERATURE"
                value={`${formatTemperature(list[0].temperature.average)}\u2103`}
              />
            </View>

            <View style={styles.weatherItems}>
              <WeatherType
                iconName="water"
                type="HUMIDITE"
                value="72cm"
                style={true}
              />

              <WeatherType
                iconName="pulse"
                type="PRESSION"
                value="1014mbar"
              />
            </View>
          </View>
        </View>

        <View style={styles.weatherList}>
          <View style={styles.weatherListHeader}>
            <Text style={{ fontWeight: "bold" }}>Aujourd'hui</Text>
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
              list.slice(0, 10).map((temp, index) => <TemperatureItem key={index} data={temp} />)
            }
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen