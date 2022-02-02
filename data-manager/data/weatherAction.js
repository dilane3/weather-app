import { ADD_WEATHER } from "./type"

export const addWeather = (weather) => {
  console.log("yo")
  return {
    type: ADD_WEATHER,
    payload: weather
  }
}