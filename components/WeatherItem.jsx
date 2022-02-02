import React from "react";
import {
  View,
  Text
} from 'react-native'
import { Icon } from "react-native-elements";
import { styles } from "../screens/list/style";

const WeatherItem = () => {
  return (
    <View style={styles.weatherItem}>
      <View style={styles.weatherItemLeft}>
        <Icon 
          name="cloudy"
          type="ionicon"
          color="#cfe5ff"
          size={25}
        />

        <View style={styles.weatherItemTime}>
          <Text style={styles.weatherItemFirst}>Lundi,</Text>
          <Text style={styles.weatherItemSecond}>3 Oct.</Text>
        </View>
      </View>

      <View style={styles.weatherItemRight}>
        <Text style={styles.weatherItemFirst}>32</Text>
        <Text style={styles.weatherItemSecond}>{` / 33\u2103`}</Text>
      </View>
    </View>
  )
}

export default WeatherItem