import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { Icon } from "react-native-elements";
import weatherContext from "../data-manager/context/weatherContext";
import { styles } from "../screens/list/style";
import { formatDate, formatTemperature } from "../utils/format";

const WeatherItem = ({ navigation, data, index }) => {
  const { changeWeatherDay } = useContext(weatherContext)

  const handleSelectWeather = () => {
    changeWeatherDay(index)

    navigation.goBack()
  }

  return (
    <TouchableOpacity 
      activeOpacity={.7} 
      style={styles.weatherItem}
      onPress={handleSelectWeather}
    >
      <View style={styles.weatherItemLeft}>
        <Icon 
          name="cloudy"
          type="ionicon"
          color="#cfe5ff"
          size={25}
        />

        <View style={styles.weatherItemTime}>
          <Text style={styles.weatherItemFirst}>{ `${formatDate(data.date, "only_day")}, ` }</Text>
          <Text style={styles.weatherItemSecond}>{ formatDate(data.date, "only_date_month") }</Text>
        </View>
      </View>

      <View style={styles.weatherItemRight}>
        <Text style={styles.weatherItemFirst}>{ formatTemperature(data.temperature.average) }</Text>
        <Text style={styles.weatherItemSecond}>{` / ${ formatTemperature(data.temperature.average_max) }\u2103`}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default WeatherItem