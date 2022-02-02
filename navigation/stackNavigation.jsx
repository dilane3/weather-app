import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import HomeScreen from '../screens/home/HomeScreen'
import ListScreen from '../screens/list/ListScreen'
import { styles } from '../screens/home/style'

const Stack = createNativeStackNavigator()

const AppStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{
            headerTitle: () => {
              return (
                <Text 
                  style={{...styles.location, color:"#cfe5ff"}}
                >
                  Yaounde, <Text style={styles.country}>Cameroun</Text>
                </Text>
              )
            },
            headerTintColor: "#cfe5ff",
            headerStyle: {
              backgroundColor: "#6541ff"
            },
            headerBackTitleStyle: {
              color: "#fff"
            },
            headerShadowVisible: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStackNavigation
