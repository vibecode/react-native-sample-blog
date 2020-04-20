import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppLoading } from 'expo'
import { bootstrap } from './src/bootstrap'
import { AppNavigation  } from './src/navigation/AppNavigation'

interface AppProps {}

const App: React.FC = function() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady}
        onError={err => console.log(err)}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
