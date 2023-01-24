// @ts-nocheck
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import Ionicons from '@expo/vector-icons/Ionicons'
import { AntDesign } from '@expo/vector-icons';
const MovieScreen = () => {
  const route = useRoute()
  const navigation=useNavigation();
  return (
    <SafeAreaView>
      <View style={{marginTop:37, padding:10, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
         <Ionicons name="arrow-back" onPress={()=>navigation.goBack()} size={32} color="black" />
          <Text> {route.params.name}</Text>
        </View>
        <View style={{flexDirection:"row" , alignItems:"center", marginRight:10}}>
          <Ionicons name="search" size={24} color="black" />
          <Ionicons style={{marginHorizontal:10}} name="ios-filter-outline" size={24} color="black" />
          <Ionicons name="share-outline" size={24} color="black" />
        </View>
      </View>
      <View style={{flexDirection:"row", marginHorizontal:10}}>
      <AntDesign name="Safety" size={24} color="black" />
      <Text style={{marginHorizontal:5, alignContent:"center"}}>Your Safety is our Priority</Text>
      </View>
         <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date("2022-08-24")}
        endDate={new Date("2022-08-30")}
        initialSelectedDate={new Date("2020-08-22")}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
        flatListContainerStyle={styles.flatListContainerStyle}
      />
    </SafeAreaView>
  )
}

export default MovieScreen
const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    marginTop: 37,
  },
})
