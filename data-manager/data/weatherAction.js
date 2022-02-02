import { ADD_WEATHER } from "./type"

export const addWeather = (weather) => {
  return {
    type: ADD_WEATHER,
    payload: weather
  }
}