import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'

// const PostNavigator = createStackNavigator({
//   Main: MainScreen,
//   Post: {
//     screen: PostScreen
//   }
// })

// export const AppNavigation = createAppContainer(PostNavigator)

// Upgrade to v5
// The main concepts are the same. There are navigators and screens, nesting works the same,
// we have configuration for the navigator and options for the screen.
// To summarize the differences:
// - All of the configuration is passed as props to the navigator
// - The route configuration is done using Screen elements and passed as children
//params becomes initialParams prop on Screen
// - navigationOptions becomes options prop on Screen
// - defaultNavigationOptions becomes screenOptions prop on Navigator

const Stack = createStackNavigator()

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ title: 'My app' }}
      />
      <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>
  )
}
