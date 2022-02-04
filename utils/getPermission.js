import React, { useEffect, useState } from "react";
import * as Location from 'expo-location'

const useGetLocation = () => {
  const [errorMsg, setErrorMsg] = useState(null)
  const [region, setRegion] = useState(null)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      const { coords: {latitude, longitude} } = location

      Location.setGoogleApiKey()

      let regionName = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });

      setRegion(regionName);

      return;
    })();
  }, [])

  return [region, errorMsg]
}

const getLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    return {error: "Permission to access location was denied"};
  }

  let location = await Location.getCurrentPositionAsync({});

  const { coords: {latitude, longitude} } = location

  Location.setGoogleApiKey()

  let regionName = await Location.reverseGeocodeAsync({
    latitude,
    longitude
  });

  return {data: regionName};
}

export { getLocation }