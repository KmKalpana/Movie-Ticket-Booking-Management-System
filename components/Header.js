import {StyleSheet, View, Text, ImageBackground,SafeAreaView, Pressable } from 'react-native'
import React from 'react'
export default function Header(){
  return (
    <View>
      <ImageBackground
        style={{ aspectRatio: 5 /1.9, height: 170 }}
        source={{
          uri: "https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00020779.jpg",
        }}
      >
       <Pressable style={{position:"absolute", height:130, backgroundColor:"white", padding:10, borderRadius:6, top:140, left:20, width:350}}> 
       <Text>Release in 1 day </Text>
       <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:10,margin:10,}}>
       <View>
         <Text>Vikrant Rana</Text>
         <Text>U/A. Kanada</Text>
       </View>
        <Pressable style={{backgroundColor:"#ffc40c",padding:"10", borderRadius:6, marginRight:10}}>
       <Text style={{fontSize:14,fontWeight:"400",textAlign:"center"}}>BOOK</Text>
       </Pressable>
       </View>
      
       </Pressable>
    </ImageBackground>
    </View>
  );
};



