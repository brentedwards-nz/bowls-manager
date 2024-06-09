import { StyleSheet, ActivityIndicator, View, Text } from 'react-native'

const StartPage = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="green"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "fff",
    fontSize: 10
  }
});

export default StartPage;