import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BottomHeader() {
  return (
    <View style={styles.container}>
      <Text>BottomHeader</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    zIndex:-1,
    marginTop:0,
    paddingTop:50,
    backgroundColor:Colors.biru2,
    borderTopRightRadius:30,
  }
})
