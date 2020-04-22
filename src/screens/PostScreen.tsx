import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PostScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>Post screeen</Text>
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
