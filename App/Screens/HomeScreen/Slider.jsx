import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {

  const [slider,setSlider]=useState();

  const getSliders=()=>{

    useEffect(()=>{
      getSliders();
    },[])

    GlobalApi.getSliders().then(resp=>{
      console.log("resp".resp)
      setSlider(resp?.sliders)
    })
  }

  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}

