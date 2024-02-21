import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Colors from '../../Utils/Colors'

export default function Category() {
  const [categoryData, setCategoryData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GlobalApi.GetCategory()
        setCategoryData(result.categories)
        setLoading(false)
      } catch (error) {
        console.log('Error Fetching Data :', error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <View style={{ marginTop: 25 }}>
      <Text style={styles.heading}>Category</Text>

      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 20 }}
          size={'large'}
          color={Colors.biru2}
        />
      ) : (
        <FlatList
          data={categoryData}
          horizontal={true}
          renderItem={({ item }) => (
            <View
              style={{
                margin: 15,
                marginTop: 20,
                alignItems:'center',
              }}
            >
              <Image
                source={{ uri: item.image?.url }}
                style={styles.categoryImage}
              />
              <Text>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius:50,
    objectFit:'cover',
  },
})
