import { ADD_WEATHER, CHANGE_DAY } from "./type"

const weatherReducer = (state, action) => {
  switch (action.type) {
    case ADD_WEATHER: {
      if (action.payload) {
        console.log("adding weather")
        return action.payload
      }

      return state
    }

    default: return state
  }
}

export default weatherReducer