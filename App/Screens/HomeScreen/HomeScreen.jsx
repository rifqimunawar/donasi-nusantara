import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import BottomHeader from './BottomHeader'
import Slider from './Slider'

export default function HomeScreen() {
  return (
    <View >
    {/* header */}
      <Header/>
      {/* Slider */}
    <Slider/>
    </View>
  )
}