import { View, Text } from 'react-native'
import React from 'react'

const ProfileOtherContainer = ({item}) => {
  return (
    <View style={{justifyContent: "center", alignItems: "center"}}>
      <Text>{item}</Text>
    </View>
  )
}

export default ProfileOtherContainer