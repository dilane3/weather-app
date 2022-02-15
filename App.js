import { useEffect, useReducer, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import useCustomFonts from './utils/loadFonts';
import AppStackNavigation from './navigation/stackNavigation';
import weatherContext from './data-manager/context/weatherContext'
import networkContext from './data-manager/context/networkContext';
import weatherReducer from './data-manager/data/weatherReducer';
import { addWeather } from './data-manager/data/weatherAction';
import * as Network from 'expo-network';

const initialState = {
  city: {
    name: "Douala",
    country: ""
  },
  list: []
} 

export default function App() {
  // load fonts
  const [fontLoaded] = useCustomFonts()

  // definition of the state
  const [weather, dispatch] = useReducer(weatherReducer, initialState)
  const [weatherDay, setWeatherDay] = useState(null)
  const [networkState, setNetworkState] = useState(null)

  useEffect(async () => {
    await getNetworkStatus()
  }, [])

  const getNetworkStatus = async () => {
    try {
      const res = await Network.getNetworkStateAsync();
  
      setNetworkState(res)

      return {data: res}
    } catch (err) {
      console.log(err)

      return {error: err}
    }
  }

  // context value
  const weatherContextValue = {
    weather,
    currentWeatherDay: weatherDay,
    addWeather: (weather) => dispatch(addWeather(weather)),
    changeWeatherDay: (day) => setWeatherDay(day)
  }

  const networkContextValue = {
    isConnected: networkState ? networkState.isConnected : false,
    isInternetReachable: networkState ? networkState.isInternetReachable : false,
    type: networkState ? networkState.type : "",
    updateNetworkStatus: async () => await getNetworkStatus()
  }

  return (
    <networkContext.Provider value={networkContextValue}>
      <weatherContext.Provider value={weatherContextValue}>
        <AppStackNavigation />

        <StatusBar barStyle="light-content" />
      </weatherContext.Provider>
    </networkContext.Provider>
  );
}
