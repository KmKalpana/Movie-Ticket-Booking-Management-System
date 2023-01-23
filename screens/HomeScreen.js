import { StyleSheet, View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Header from '../components/Header'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
       <Header />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"pink",
  },
});
