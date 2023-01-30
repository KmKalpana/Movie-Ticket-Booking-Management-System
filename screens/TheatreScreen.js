// @ts-nocheck
import { View, Text, SafeAreaView, FlatList, Pressable } from 'react-native'
import React, {useContext} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MovieCards } from '../Context'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
const TheatreScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const {seats, setSeats}= useContext(MovieCards);
  const onSeatSelect=(item) =>{
    const seatSelected=seats.find((seat) => seat===item)
    if(seatSelected)
    {
      setSeats(seats.filter((seat) => seat!==item))
    }
    else{
      setSeats([...seats, item]);
    }
     console.log("Seats")
  }
  //Amount Part
  const showSeats=()=>{
    return (
      <View style={{flexDirection:"row", alignItems:"center"}}>
       {seats.map((seat,index) => (
      <Text style={{marginTop:4, fontSize:17, paddingHorizontal:4}}>{seat}</Text>
    )
    )
    }
    </View>
    )
   
  }
  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 45,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            onPress={() => navigation.goBack()}
            style={{ margin: 5 }}
            name="arrow-back"
            size={26}
            color="black"
          />
          <View style={{ marginLeft: 6 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 4 }}>
              {route.params.name}
            </Text>
            <Text
              style={{
                marginTop: 2,
                color: 'gray',
                fontSize: 15,
                fontWeight: '500',
              }}
            >
              {route.params.mall}
            </Text>
          </View>
        </View>
        <Entypo
          name="share"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 17,
          fontWeight: 'bold',
          marginTop: 5,
        }}
      >
        {route.params.timeSelected}
      </Text>
      <View style={{ marginTop: 20 }} />
     <FlatList
        numColumns={7}
        data={route.params.tableSeats}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => onSeatSelect(item)}
            style={{
              margin: 10,

              borderColor: "gray",
              borderWidth: 0.5,

              borderRadius: 5,
            }}
          >
            {
              seats.includes(item) ? (
                <Text style={{ backgroundColor: "#ffc40c", padding: 8 }}>{item}</Text>
              )
              :
              (
                <Text style={{ padding: 8 }}>{item}</Text>
              )
            }
          </Pressable>
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 20,
          backgroundColor: '#D8D8D8',
        }}
      >
        <View>
          <FontAwesome
            name="square"
            size={24}
            color="black"
            style={{ textAlign: 'center' }}
          />
          <Text>Selected</Text>
        </View>
        <View>
          <FontAwesome
            name="square"
            size={24}
            color="white"
            style={{ textAlign: 'center' }}
          />
          <Text>Vacent</Text>
        </View>
        <View>
          <FontAwesome
            name="square"
            size={24}
            color="#989898"
            style={{ textAlign: 'center' }}
          />
          <Text>Occupied</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ padding: 10 }}>
          <Text style={{ marginBottom: 4, fontSize: 15, fontWeight: '500' }}>
            Show End Time Approx 6:50pm
          </Text>
          { seats.length > 0 ? (
            showSeats()
          )
          :(
            <Text style={{ fontSize: 18 }}>No Seats Selected</Text>
          )
          }
        </View>
        <View>
          <Text style={{ width: 100 }}>Now with Ticket Cancellation</Text>
        </View>
      </View>
      <Pressable
       onPress={()=>onSeatSelect(item)}
        style={{
          backgroundColor: '#FFC40C',
          padding: 20,
          flexDirection: 'row',
          alignItems:"center",
          justifyContent:"space-between",
          marginVertical:20,
        }} >
         {
        seats.length > 0 ?(
          <Text style={{fontSize:17, fontWeight:"500"}}>{seats.length} Seat's Selected</Text>
        ):(
          <Text></Text>
        )
      }
      <Pressable>
        <Text style={{fontWeight:"600"}}> Pay 0</Text>
      </Pressable>
      </Pressable>
    </SafeAreaView>
  )
}

export default TheatreScreen
