import { StyleSheet, View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Header from '../components/Header'
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
       <Header />
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#E0E0E0",
  },
});
