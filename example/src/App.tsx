import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Header } from 'rn-advanced-header-5d-solutions'

const App = () => {
  return (
    <View style={styles.container}>
      <Header label='Inbox' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})
export default App
