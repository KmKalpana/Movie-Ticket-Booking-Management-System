import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Header />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:4,
    backgroundColor: '#fff',
    marginTop:37
  },
});
