import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CreaateScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>Create Screen</Text>
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

export default CreateScreen
