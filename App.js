import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { MovieContext } from './Context';
import { StripeProvider } from '@stripe/stripe-react-native';
export default function App() {
  return (
    <>
    <MovieContext>
    <StripeProvider publishableKey='pk_test_51MW2MFSFNR1F0FXwfvcofvw6oa7EbbrQxByEPUAbjzCdjeIZlb5ZzxDmNDQ7noaEGLe2fHzQaFr88D5EDfEazmGT00fRnOUeUK'>
     <StackNavigator />
      <StatusBar style="auto" />
      </StripeProvider>
      </MovieContext>
    </>
  );
}
