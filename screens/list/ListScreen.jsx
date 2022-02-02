import React, { useContext } from "react";
import {
  View,
  FlatList,
  Text
} from 'react-native'
import WeatherItem from "../../components/WeatherItem";
import weatherContext from "../../data-manager/context/weatherContext";
import { styles } from "./style";

const ListScreen = ({ navigation }) => {
  const { weather } = useContext(weatherContext)
  const {list} = weather

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meteo sur {list.length} Jours</Text>

      <FlatList style={styles.weatherList}
        data={list}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <WeatherItem 
            index={index} 
            data={item} 
            navigation={navigation}
          />
        )}
      />
    </View>
  )
}

export default ListScreen