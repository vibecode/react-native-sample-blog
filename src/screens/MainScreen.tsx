import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamsList } from '../navigation/AppNavigation'
import { DATA } from '../data'
import { Post } from '../types/types'
import PostCard from '../components/PostCard'

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

  const renderItem = ({ item }: { item: Post }) => {
    return <PostCard post={item} />
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
