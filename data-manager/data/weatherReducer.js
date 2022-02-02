import { ADD_WEATHER } from "./type"

const weatherReducer = (state, action) => {
  switch (action.type) {
    case ADD_WEATHER: {
      if (action.payload) {
        return action.payload
      }

      return state
    }

    default: return state
  }
}

export default weatherReducer