import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigaton-stack'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'

const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Post: {
    screen: PostScreen
  }
})

export const AppNavigation = createAppContainer(PostNavigator)
