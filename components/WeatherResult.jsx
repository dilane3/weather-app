import React, { useContext } from "react";
import {
  Text,
  TouchableOpacity
} from "react-native"
import styles from "../screens/search/style";
import { formatCountry, formatDate, formatTemperature } from "../utils/format";
import weatherContext from '../data-manager/context/weatherContext'

const WeatherResult = ({ navigation, data }) => {
  const { addWeather, changeWeatherDay } = useContext(weatherContext)

  const {
    city: {
      name,
      country
    },
    list
  } = data

  const handlePressWeatherCard = () => {
    // Add weather inside the global state
    addWeather(data)

    // Change the current temperature to the first
    changeWeatherDay(0)

    navigation.navigate("Home")
  }

  return (
    <TouchableOpacity 
      onPress={handlePressWeatherCard}
      activeOpacity={.7} 
      style={styles.weatherResultCard}
    >
      <Text style={styles.location}>{ name }, <Text style={styles.country}>{ formatCountry(country) }</Text></Text>
      <Text style={styles.weatherDate}>{ formatDate(list[0].date, "full") }</Text>
      <Text style={styles.weatherTemperature}>{ formatTemperature(list[0].temperature.average) }{'\u00b0'}</Text>
    </TouchableOpacity>
  )
}

export default WeatherResult