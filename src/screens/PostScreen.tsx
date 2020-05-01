import React, { useLayoutEffect } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  Alert,
} from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from '../navigation/AppNavigation'
import { DATA } from '../data'
import { THEME } from '../theme'
import HeaderButton from '../components/HeaderButton'

type MainScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Post'>
type MainScreenRouteProp = RouteProp<RootStackParamsList, 'Post'>

type Props = {
  route: MainScreenRouteProp
  navigation: MainScreenNavigationProp
}

const PostScreen: React.FC<Props> = ({ route, navigation }) => {
  const { date, postId } = route.params

  const post = DATA.find((p) => p.id === postId)
  const iconName = post?.booked ? 'ios-star' : 'ios-star-outline'

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Пост oт ' + new Date(date).toLocaleDateString(),
      headerRight: () => (
        <HeaderButton title="Booked" iconName={iconName} onPress={() => null} />
      ),
    })
  })

  const handlePostRemove = () => {
    Alert.alert(
      'Delete Post',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      { cancelable: false }
    )
  }

  return (
    <ScrollView>
      <Image source={{ uri: post?.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post?.text}</Text>
      </View>
      <Button
        title="Delete"
        color={THEME.DANGER_COLOR}
        onPress={handlePostRemove}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular',
  },
})

export default PostScreen
