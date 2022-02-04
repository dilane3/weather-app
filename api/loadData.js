import axios from "axios"
import { useEffect, useState } from "react"
import { API_URI, API_KEY } from '../utils/config'

const instance = axios.create({
  baseURL: "https://community-open-weather-map.p.rapidapi.com"
})
instance.defaults.headers.common["x-rapidapi-host"] = API_URI
instance.defaults.headers.common["x-rapidapi-key"] = API_KEY
const useLoadData = (city, addWeather, changeWeatherDay) => {
  useEffect(async () => {
    if (city) {
      const { data, error } = await loadData(city)
  
      if (data) {
        addWeather(data)
        changeWeatherDay(0)
      } else {
        changeWeatherDay(-1)
      }
    }
  }, [city])
}

const loadData = async (city) => {
  try {
    // Send request
    const res = await instance.get("/climate/month", {
      params: {q: city}
    })

    // Get response
    const data = res.data

    // Extract data
    const weather = {
      city: {
        name: data.city.name,
        country: data.city.country
      },
      list: data.list.map(item => {
        return {
          date: item.dt,
          humidity: item.humidity,
          temperature: item.temp,
          pressure: item.pressure,
          windSpeed: item.wind_speed
        }
      })
    }

    console.log(weather)

    return { data: weather }
  } catch (err) {
    console.log(err)

    return { error: err }
  }
}

export { useLoadData, loadData }