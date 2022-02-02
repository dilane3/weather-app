import React from "react";
import {
  View,
  FlatList,
  Text,
  ScrollView
} from 'react-native'
import WeatherItem from "../../components/WeatherItem";
import { styles } from "./style";

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>7 Jours Suivant</Text>

      <ScrollView style={styles.weatherList}>
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
      </ScrollView>
    </View>
  )
}

export default ListScreen