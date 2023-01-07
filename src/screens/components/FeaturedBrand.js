import { View, Text, Image } from 'react-native'
import React from 'react'

const FeaturedBrand = ({item, containerStyle}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        ...containerStyle,
      }}
    >
      <Image
        source={item.image}
        resizeMode="contain"
        style={{ height: 150, width: "90%", borderRadius: 10 }}
      />
    </View>
  )
}

export default FeaturedBrand