import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "../screens/home/style";
import { formatTemperature } from "../utils/formatTemperature";

const TemperatureItem = ({ active, data }) => {
  const temperature = data.temperature.average

  return (
    <View style={active ? {...styles.weatherTemperatureItem, backgroundColor: "#6541ff", borderWidth: 0} : styles.weatherTemperatureItem}>
      <Icon 
        name="partly-sunny"
        type="ionicon"
        color={active ? "#cfe5ff" : "#6541ff"}
        size={20}
      />

      <Text style={active ? {...styles.weatherTemperatureItemText, color: "#cfffff"} : styles.weatherTemperatureItemText}>{ `${formatTemperature(temperature)}\u2103` }</Text>
    </View>
  )
}

export default TemperatureItem