import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  StatusBar
} from "react-native"
import { Icon } from "react-native-elements";
import styles from "./style";
import WeatherResult from "../../components/WeatherResult";
import { loadData } from "../../api/loadData";

const SearchScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("")
  const [hasAlreadyFetch, setHasAlreadyFetch] = useState(false)

  const handleSearchWeather = async () => {
    if (city.length > 0) {
      // Display the loader
      setLoading(true)

      // Fetch data from the server
      const { data, error } = await loadData(city)

      // Mask the loader after fetching data
      setLoading(false)
      setHasAlreadyFetch(true)

      if (data) {
        setWeather(data)

        setCity("")
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchCard}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Rechercher une ville"
          value={city}
          onChangeText={text => setCity(text)}
        />

        <Pressable style={styles.searchBtn} onPress={handleSearchWeather}>
          <Icon name="search-outline" type="ionicon" color="#303030" />
        </Pressable>
      </View>

      <View style={styles.searchResult}>
        {
          loading ? (
            <ActivityIndicator size="large" color="#6541ff" />
          ):(
            weather ? <WeatherResult navigation={navigation} data={weather} /> : (
              hasAlreadyFetch ? (
                <View style={styles.noResult}>
                  <Text style={styles.noResultText}>Pas de Resultat</Text>
                </View>
              ):null
            )
          )
        }
      </View>

      <StatusBar barStyle="light-content" />
    </View>
  )
}

export default SearchScreen