import { useReducer, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import useFonts from './utils/loadFonts';
import AppStackNavigation from './navigation/stackNavigation';
import weatherContext from './data-manager/context/weatherContext'
import weatherReducer from './data-manager/data/weatherReducer';
import { addWeather } from './data-manager/data/weatherAction';

const initialState = {
  city: {
    name: "Douala",
    country: ""
  },
  list: []
} 

export default function App() {
  // load fonts
  const [fontLoaded] = useFonts()

  // definition of the state
  const [weather, dispatch] = useReducer(weatherReducer, initialState)

  // context value
  const weatherContextValue = {
    weather,
    addWeather: (weather) => dispatch(addWeather(weather))
  }

  return (
    <weatherContext.Provider value={weatherContextValue}>
      {
        fontLoaded ? (
          <AppStackNavigation />
        ):null
      }
      <StatusBar />
    </weatherContext.Provider>
  );
}
