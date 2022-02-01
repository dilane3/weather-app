import React from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native'
import { Icon } from 'react-native-elements'
import TemperatureItem from '../../components/TemperatureItem'
import WeatherItem from '../../components/WeatherItem'
import { styles } from './style'



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
            <Text style={styles.weatherType}>Forte Pluie</Text>
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

        <View style={styles.weatherList}>
          <View style={styles.weatherListHeader}>
            <Text style={{ fontWeight: "bold" }}>Aujourd'hui</Text>
            <View style={styles.weatherNext}>
              <Text style={{ color: "#6f6f6f", marginRight: 5 }}>7 Jours Suivant</Text>
              <Icon
                name="chevron-forward"
                type="ionicon"
                color="#6f6f6f"
                size={20}
              />
            </View>
          </View>

          <ScrollView style={styles.weatherListItems} horizontal={true}>
            <TemperatureItem active />
            <TemperatureItem />
            <TemperatureItem />
            <TemperatureItem />
            <TemperatureItem />
            <TemperatureItem />
            <TemperatureItem />
            <TemperatureItem />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen