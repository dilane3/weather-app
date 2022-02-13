import {useState} from 'react'
import * as Font from 'expo-font'

const useFonts = () => {
  const [loaded, setLoaded] = useState(false)

  Font.loadAsync({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf")
  })
  .then(() => {
    setLoaded(true)
  })

  return [loaded]
}

export default useFonts