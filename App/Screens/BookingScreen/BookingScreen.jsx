import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import BlogsComponent from '../HomeScreen/BlogsComponent'
import Colors from '../../Utils/Colors'

export default function BookingScreen() {
  return (
    <View style={{ margin: 10 }}>
      <Text style={styles.heading}>Blogs & Artikel</Text>
      <View style={styles.seacrhControll}>
        <TextInput placeholder="Search..." style={styles.textInput} />
        <TouchableOpacity style={styles.searchBtn}>
          <FontAwesome
            name="search"
            size={24}
            color={Colors.biru2}
            onPress={() => console.log('Search')}
          />
        </TouchableOpacity>
      </View>
      <BlogsComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:20,
    marginLeft:20,
  },
  seacrhControll: {
    display: 'flex',
    flexDirection: 'row',
  },
  textInput: {
    width: 300,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    backgroundColor: Colors.biru4,
    borderRadius: 10,
    fontSize: 18,
  },
  searchBtn: {
    margin: 20,
    marginTop: 21,
    backgroundColor: Colors.biru4,
    width: 45,
    height: 45,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
