import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from '../navigation/AppNavigation'

type MainScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Post'>
type MainScreenRouteProp = RouteProp<RootStackParamsList, 'Post'>

type Props = {
  route: MainScreenRouteProp
  navigation: MainScreenNavigationProp
}

const PostScreen: React.FC<Props> = ({ route, navigation }) => {
  const { date, postId } = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Пост oт ' + new Date(date).toLocaleDateString()
    })
  })

  return (
    <View style={styles.center}>
      <Text>{postId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default PostScreen
