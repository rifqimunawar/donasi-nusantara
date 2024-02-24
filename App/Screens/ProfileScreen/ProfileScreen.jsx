import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
export default function ProfileScreen() {
  return (
    <View style={styles.header}>
      <FontAwesome name="arrow-left" size={22} color="black" />
      <Text
        style={{
          fontSize:20,
          fontWeight:'bold',
          
        }}
      >
        Profile
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    margin:10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})
