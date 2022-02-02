import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import HomeScreen from '../screens/home/HomeScreen'
import ListScreen from '../screens/list/ListScreen'
import { styles } from '../screens/home/style'
import { useContext } from 'react'
import weatherContext from '../data-manager/context/weatherContext'
import SearchScreen from '../screens/search/searchScreen'
import { formatCountry } from '../utils/format'

const Stack = createNativeStackNavigator()

const AppStackNavigation = () => {
  const { weather } = useContext(weatherContext)
  const { city: { name, country } } = weather

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
                  style={{...styles.location, color: "#fff"}}
                >
                  { name }, <Text style={styles.country}>{ formatCountry(country) }</Text>
                </Text>
              )
            },
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#6541ff"
            },
            headerBackTitleStyle: {
              color: "#fff"
            },
            headerShadowVisible: false
          }}
        />
        <Stack.Screen 
          name="Search"
          component={SearchScreen}
          options={{
            title: "Recherche",
            headerTintColor: "#fff",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#6541ff"
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStackNavigation
