import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from '../screens/MainScreen'
import PostScreen from '../screens/PostScreen'
import AppHeaderIcon from '../components/AppHeaderIcon'
import HeaderButton from '../components/HeaderButton'
import { THEME } from '../theme'

export type RootStackParamsList = {
  Main: undefined
  Post: { postId: number; date: string }
}

const Stack = createStackNavigator<RootStackParamsList>()

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.HEADER_BG_COLOR,
        },
        headerTintColor: THEME.HEADER_TINT_COLOR,
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'My app',
          headerRight: () => (
            <HeaderButton
              title="Toogle photo"
              iconName="ios-camera"
              onPress={() => null}
            />
          ),
          headerLeft: () => (
            <HeaderButton
              title="Toogle drawer"
              iconName="ios-menu"
              onPress={() => null}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{
          title: 'My Post 666',
          headerStyle: {
            backgroundColor: 'darkgrey',
          },
        }}
      />
    </Stack.Navigator>
  )
}
