import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamsList } from '../navigation/AppNavigation'

type MainScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Main'>
type MainScreenRouteProp = RouteProp<RootStackParamsList, 'Main'>

type Props = {
  route: MainScreenRouteProp
  navigation: MainScreenNavigationProp
}

const MainScreen: React.FC<Props> = ({ navigation }) => {
  const goToPost = () => {
    navigation.navigate('Post')
  }

  return (
    <View style={styles.center}>
      <Text>Main screeen</Text>
      <Button title="Go to post" onPress={goToPost}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MainScreen
