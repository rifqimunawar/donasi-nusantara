import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  FlatList,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Colors from '../../Utils/Colors'

export default function BlogsComponent() {
  const [blogsData, setBlogsData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await GlobalApi.GetListBlog()
        setBlogsData(data)
        setLoading(false)
      } catch (error) {
        console.error('error fetching data:', error)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <View>

      {loading ? (
        <ActivityIndicator
          style={{ marginTop: 20 }}
          size={'large'}
          color={Colors.biru2}
        />
      ) : (
        <View>
          <FlatList
            data={blogsData}
            vertical={true}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.listBlogs}>
                <Image source={{ uri: item.img }} style={styles.imgBlogsList} />
                <Text style={{ fontSize:17, width:250, }}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({

  listBlogs: {
    display: 'flex',
    flexDirection:'row',
    gap:15,
    marginTop:10,
    backgroundColor:Colors.biru4,
    padding:10,
    borderRadius:15,
  },
  imgBlogsList: {
    width: 80,
    height: 50,
    borderRadius:10,
  },
})
