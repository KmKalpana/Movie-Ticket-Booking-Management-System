// @ts-nocheck
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Pressable,
  ScrollView,
} from 'react-native'
import React from 'react'
import MovieCards from './MovieCards'
export default function Header() {
  const types = [
    {
      id: '0',
      name: 'IMAX',
    },
    {
      id: '1',
      name: '4DX',
    },
    {
      id: '2',
      name: 'PXL',
    },
    {
      id: '3',
      name: 'GOLD',
    },
    {
      id: '4',
      name: 'PLAYHOUSE',
    },
  ]
  return (
    <View>
      <ImageBackground
        style={{ aspectRatio: 5 / 1.9, height: 170 }}
        source={{
          uri:
            'https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00020779.jpg',
        }}
      >
        <Pressable
          style={{
            position: 'absolute',
            height: 150,
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 6,
            top: 140,
            left: 20,
            width: 350,
          }}
        >
          <Text>Release in 1 day </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <View>
              <Text style={{ fontWeight: '700', fontSize: 20 }}>
                Vikrant Rana
              </Text>
              <Text>U/A. Kanada</Text>
            </View>
            <Pressable
              style={{
                backgroundColor: '#ffc40c',
                padding: 10,
                borderRadius: 6,
                marginRight: 10,
              }}
            >
              <Text
                style={{ fontSize: 14, fontWeight: '400', textAlign: 'center' }}
              >
                BOOK
              </Text>
            </Pressable>
          </View>
          <Text>Fantasy, Action, Thriller</Text>
        </Pressable>
      </ImageBackground>
      <View style={{ margin: 120 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {types.map((item, index) => (
            <View
              style={{
                margin: 10,
                borderColor: 'C0C0C0',
                borderWidth: 0.4,
                borderRadius: 4,
                padding: 10,
              }}
              key={index}
            >
              <Text
                style={{ textAlign: 'center', fontSize: 14, fontWeight: '500' }}
              >
                {item.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <MovieCards />
    </View>
  )
}
