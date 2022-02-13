import React, { useContext } from "react";
import {
  View,
  Text,
  Image
} from 'react-native'
import { TouchableOpacity, StatusBar } from "react-native";
import networkContext from "../../data-manager/context/networkContext";
import styles from "./style";

const image1 = require("../../assets/icons/404-error2.png")
const image2 = require("../../assets/icons/warning.png")

const ErrorScreen = ({ navigation }) => {
  // Get data from global state
  const { isConnected, isInternetReachable, updateNetworkStatus } = useContext(networkContext)

  const handlePressBtn = async () => {
    const { data } = await updateNetworkStatus()

    if (data && data.isConnected) {
      navigation.goBack()
    }
  }

  const getInfoToDisplay = () => {
    if (isConnected) {
      if (!isInternetReachable) {
        return {
          image: image1,
          message: "Impossible de vous connecter à internet"
        }
      }
    }

    return {
      image: image2,
      message: "Vérifiez votre connexion internet, il semble être inactif."
    }
  }

  return (
    <View style={styles.container}>
      <Image 
        source={getInfoToDisplay().image}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.message}>{ getInfoToDisplay().message }</Text>

        <TouchableOpacity activeOpacity={.8} style={styles.btnContainer} onPress={handlePressBtn}>
          <Text style={styles.btnText}>Reessayer</Text>
        </TouchableOpacity>
      </View>

      <StatusBar barStyle="dark-content" />
    </View>
  )
}

export default ErrorScreen