import React from "react"
import { View, Text } from "react-native"
import { Icon } from "react-native-elements"
import { styles } from "../screens/home/style"

const WeatherType = ({ style, type, value, iconName }) => {
  const otherStyle = style ? (
    { borderRightWidth:1 }
  ):null

  return (
    <View style={{ ...styles.weatherItem, ...otherStyle }}>
      <Icon 
        name={iconName}
        type="ionicon"
        color="#cfe5ff"
        size={25}
      />
                
      <View style={styles.weatherItemInfo}>
        <Text style={styles.weatherItemType}>{ type }</Text>
        <Text style={styles.weatherItemValue}>{ value }</Text>
      </View>
    </View>
  )
}

export default WeatherType