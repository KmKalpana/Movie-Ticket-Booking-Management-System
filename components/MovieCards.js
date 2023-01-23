import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import Header from './Header'
import Movie from '../data/Movie'
import { useNavigation } from '@react-navigation/native'
const MovieCards = () => {
  const Data = Movie;
  const navigation=useNavigation();
  return (
    <View>
    <FlatList
      numColumns={2}
      ListHeaderComponent={Header}
      showsVerticalScrollIndicator={false}
      data={Data}
      renderItem={({ item }) => (
        <Pressable style={{ margin: 10, marginHorizontal:15 }} onPress={()=> navigation.navigate("Movies",{
                 name:item.name
              })}>
          <Image
            style={{
              aspectRatio: 2 / 3,
              height: 240,
              borderRadius: 6,
            }}
            source={{ uri: item.image }}
          />
          <Text style={{fontSize:16, fontWeight:"bold", width:170}}>{item.name.substr(0,15)+"..."}</Text>
          <Text style={{marginTop:4, fontSize:15, color:"gray"}}>U/A. {item.language}</Text>
          <Text style={{marginTop:4, fontSize:15, fontWeight:"500"}}>{item.genre}</Text>
          <Pressable
              style={{
                backgroundColor: '#ffc40c',
                padding: 10,
                borderRadius: 6,
                marginRight: 10,
              }} onPress={()=> navigation.navigate("Movies",{
                 name:item.name
              })}
            >
              <Text
                style={{ fontSize: 14, fontWeight: '400', textAlign: 'center' }}
              >
                BOOK
              </Text>
            </Pressable>
        </Pressable>
      )}
    />
    </View>
  );
};

export default MovieCards
