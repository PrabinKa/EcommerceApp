import { View, Text } from 'react-native'
import React from 'react'

import { colors } from '../../constants/Constants'

const MainHeader = ({title}) => {
  return (
    <View
      style={{
        backgroundColor: colors.blue,
        height: 60,
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "800",
          alignSelf: "center",
          color: colors.white,
        }}
      >
        {title}
      </Text>
    </View>
  )
}

export default MainHeader