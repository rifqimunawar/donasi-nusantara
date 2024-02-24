import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Category from './Category'
import BlogsComponent from './BlogsComponent'

export default function HomeScreen() {
  return (
    <View>
      {/* header */}
      <Header />
      <View style={{ padding: 20 }}>
        {/* Slider */}
        <Slider />
        {/* Cateogry */}
        {/* <Category/> */}
        {/* Blogs */}
        <Text style={styles.heading}>Blogs & Artikel</Text>
        <BlogsComponent/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
