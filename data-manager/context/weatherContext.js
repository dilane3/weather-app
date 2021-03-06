import React from "react";

const weatherContext = React.createContext({
  weather: {
    city: {
      name: "",
      country: ""
    },
    list: [
      {
        date: 0,
        humidity: 0,
        temperature: {},
        pressure: 0,
        windSpeed: 0
      }
    ]
  },
  currentWeatherDay: null,
  addWeather: (weather) => {},
  changeWeatherDay: (day) => {} 
})

export default weatherContext