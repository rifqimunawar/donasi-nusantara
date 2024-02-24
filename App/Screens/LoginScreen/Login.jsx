import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser'
import { useOAuth } from '@clerk/clerk-expo'
import * as WebBrowser from 'expo-web-browser'

WebBrowser.maybeCompleteAuthSession()

export default function Login() {
  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow()

      if (createdSessionId) {
        setActive({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error ????', err)
    }
  }, [])

  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('./../../../assets/img/logo.png')}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 27, fontWeight: 'bold', color: Colors.white }}>
          Pergerakan Mahasiswa
        </Text>
        <Text style={{ fontSize: 27, fontWeight: 'bold', color: Colors.white }}>
          Islam Indonesia
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            color: Colors.white,
          }}
        >
          Komisariat Universitas
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
            color: Colors.white,
          }}
        >
          Islam Nusantara
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
          // onPress={() => console.log('button clik success')}
        >
          <Text
            style={{ fontSize: 20, fontWeight: 'bold', color: Colors.biru2 }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginImage: {
    width: 300,
    height: 300,
    marginTop: 200,
    // borderWidth: 4,
    borderColor: Colors.biru2,
    borderRadius: 15,
  },
  subContainer: {
    width: '100%',
    backgroundColor: Colors.biru2,
    height: '70%',
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 15,
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 50,
  },
})
