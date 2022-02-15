import React from 'react'
import {useFonts} from 'expo-font'

const useCustomFonts = () => {
  const [fontLoaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf")
  })

  // Font.loadAsync({
  //   "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  //   "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  //   "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf")
  // })
  // .then(() => {
  //   setLoaded(true)
  // })

  return [fontLoaded]
}

export default useCustomFonts