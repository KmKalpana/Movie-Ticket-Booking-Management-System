import {StyleSheet, View, Text, ImageBackground,SafeAreaView, Pressable } from 'react-native'
import React from 'react'

export default function Header(){
  return (
    <SafeAreaView>
      <ImageBackground
        style={{ aspectRatio: 5 /1.9, height: 170 }}
        source={{
          uri: "https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00020779.jpg",
        }}
      >
       <Pressable style={{position:"absolute", height:130, backgroundColor:"white", padding:10, borderRadius:6, top:140, left:20, width:82}}> Release in 1 day
       </Pressable>
    </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

