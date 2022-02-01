import React from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './style'

const WeatherItem = ({ style, type, value, iconName }) => {
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

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable>
          <Icon name="menu-outline" type="ionicon" color="#303030" />
        </Pressable>
      </View>

      <ScrollView style={styles.bodyContainer}>
        <Text style={{...styles.location, fontFamily: "Poppins-Black"}}>Yaounde, <Text style={styles.country}>Cameroun</Text></Text>

        <View style={styles.weatherCard}>
          <View style={styles.weatherCardTop}>
            <Image 
              source={require('../../assets/icons/cloudy-day.png')}
              style={styles.weatherImage}
            />
            <Text style={styles.weatherType}>Heavy Rain</Text>
            <Text style={styles.weatherDate}>Dimanche, 02 Oct.</Text>

            <Text style={styles.weatherTemperature}>24{`\u2103`}</Text>
          </View>
          <View style={styles.weatherCardBottom}>
            <View style={styles.weatherItems}>
              <WeatherItem
                iconName="thermometer"
                type="VENT"
                value="19.2km/j"
                style={true}
              />

              <WeatherItem
                iconName="thermometer"
                type="TEMPERATURE"
                value={`25\u2103`}
              />
            </View>

            <View style={styles.weatherItems}>
              <WeatherItem
                iconName="water"
                type="HUMIDITE"
                value="72cm"
                style={true}
              />

              <WeatherItem
                iconName="pulse"
                type="PRESSION"
                value="1014mbar"
              />
            </View>
          </View>
        </View>

        <View style={styles.weatherList}></View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen