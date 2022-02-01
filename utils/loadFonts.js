import React, {useState, useEffect} from 'react'
import * as Font from 'expo-font'

const useFonts = () => {
  const [loaded, setLoaded] = useState(false)

  Font.loadAsync({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf")
  })
  .then(() => {
    setLoaded(true)
  })

  return [loaded]
}

export default useFonts