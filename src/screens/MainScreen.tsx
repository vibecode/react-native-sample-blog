import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamsList } from '../navigation/AppNavigation'
import { DATA } from '../data'

type MainScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Main'>
type MainScreenRouteProp = RouteProp<RootStackParamsList, 'Main'>

type Props = {
  route: MainScreenRouteProp
  navigation: MainScreenNavigationProp
}

type Post = {
  id: number
  img: string
  text?: string
  date: string
  booked: boolean
}

const MainScreen: React.FC<Props> = ({ navigation }) => {
  const goToPost = () => {
    navigation.navigate('Post')
  }

  const renderItem = ({ item }: { item: Post }) => {
    return (
      <View>
        <Text>{item.text}</Text>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={({ id }) => id.toString()}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})

export default MainScreen
