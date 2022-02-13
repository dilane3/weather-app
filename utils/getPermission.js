import * as Location from 'expo-location'

const getLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    return {error: "Permission to access location was denied"};
  }

  try {
    let location = await Location.getCurrentPositionAsync();

    const { coords: {latitude, longitude} } = location

    Location.setGoogleApiKey()

    try {
      let regionName = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });
      console.log(regionName)
  
      return {data: regionName};
    } catch (err) {
      console.log(err)

      return {data: null};
    }
  } catch (err) {
    console.log(err)

    return {data: null};
  }
}

export { getLocation }