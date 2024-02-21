import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors'
import { FontAwesome } from '@expo/vector-icons'
import TimeComponent from './TimeComponent'

export default function Header() {
  const { user, isLoading } = useUser()

  return (
    user && (
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View style={styles.nameUser}>
              <Text style={{ color: Colors.white, marginLeft: 10 }}>
                Welcome.
              </Text>
              <Text
                style={{
                  color: Colors.white,
                  marginLeft: 10,
                  fontSize: 20,
                  fontFamily: 'outfit',
                }}
              >
                {user?.fullName}
              </Text>
            </View>
          </View>
          <View style={styles.profileContainer}>
            <View>
              <FontAwesome name="bookmark-o" size={24} color="white" />
            </View>
          </View>
        </View>

        {/* search bar */}
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
        <View>
          <TimeComponent/>
        </View>
      </View>
    )
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.biru2,
    padding: 20,
    paddingTop: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
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
    backgroundColor: Colors.white,
    borderRadius: 10,
    fontSize: 18,
  },
  searchBtn: {
    margin: 20,
    marginTop: 21,
    backgroundColor: Colors.white,
    width: 45,
    height: 45,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
