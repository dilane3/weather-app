import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import weatherContext from "../data-manager/context/weatherContext";
import { styles } from "../screens/home/style";
import { formatTemperature } from "../utils/format";

const TemperatureItem = ({ active, data, index }) => {
  const temperature = data.temperature.average
  
  // Get data from the global state
  const { changeWeatherDay } = useContext(weatherContext)

  return (
    <TouchableOpacity 
      onPress={() => changeWeatherDay(index)}
      style={
        active ? {
          ...styles.weatherTemperatureItem, 
          backgroundColor: "#6541ff", 
          borderWidth: 0
        } : styles.weatherTemperatureItem
      }
    >
      <Icon 
        name="partly-sunny"
        type="ionicon"
        color={active ? "#cfe5ff" : "#6541ff"}
        size={20}
      />

      <Text style={active ? {...styles.weatherTemperatureItemText, color: "#cfffff"} : styles.weatherTemperatureItemText}>{ `${formatTemperature(temperature)}\u2103` }</Text>
    </TouchableOpacity>
  )
}

export default TemperatureItem