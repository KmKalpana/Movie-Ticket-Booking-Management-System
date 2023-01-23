import { StyleSheet, View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import MovieCards from '../components/MovieCards';
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
             <MovieCards/>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#E0E0E0",
     paddingTop:4,
    marginTop:37,
  },
});
