import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Colors from '../../Utils/Colors'

export default function Slider() {
  const [sliderData, setSliderData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GlobalApi.GetSlider()
        setSliderData(result.sliders1)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching slider data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <View>
      <Text style={styles.heading}>Effers For You</Text>
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 20, color:Colors.biru2 }}
          size="large"
          // color="#0000ff"
        />
      ) : (
        <FlatList
          data={sliderData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20 }}>
              <Text>{item.name}</Text>
              <Image
                source={{ uri: item.image?.url }}
                style={{ width: 200, height: 200 }}
              />
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
})
