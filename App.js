import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider } from '@clerk/clerk-expo'

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_aGFuZHkta2lkLTMwLmNsZXJrLmFjY291bnRzLmRldiQ">
      <View style={styles.container}>
          <Login />

        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>

        <SignedOut>
          <Login />
        </SignedOut>

        <StatusBar style="auto" />
      </View>
    // </ClerkProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20,
  },
});
