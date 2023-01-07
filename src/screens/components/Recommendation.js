import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('window')

const Recommendation = ({item, containerStyle}) => {
  return (
    <TouchableOpacity
      style={{
        ...containerStyle,
        marginRight: 10,
        marginLeft: 5,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {height: 1, width: 0},
        shadowOpacity: 0.2,
        elevation: 5,
        borderRadius: 10,
        padding: 5
      }}
    >
      <Image
        source={item.image}
        style={{ height: 100, width: width * 0.42}}
        resizeMode="contain"
      />
      <Text style={{fontWeight: "bold", fontSize: 13, marginTop: 5}} >{item.name}</Text>
      <Text style={{fontWeight: "400", fontSize: 13}} >{item.company}</Text>
      <Text style={{fontWeight: "700", fontSize: 13, marginTop: 10}}>Rs.{item.price}</Text>
    </TouchableOpacity>
  )
}

export default Recommendation