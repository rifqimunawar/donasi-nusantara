import { Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import BookingScreen from '../Screens/BookingScreen/BookingScreen'
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '../Utils/Colors'
import CalendarScreen from '../Screens/CalendarScreen/CalendarScreen'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.biru3,
        elevation: 10,
      }}
      tabBarOptions={{
        style: {
          elevation: 10, // Change the value as needed for the shadow depth
          shadowColor: '#000', // Shadow color
          shadowOpacity: 0.3, // Shadow opacity
          shadowOffset: { width: 0, height: 2 }, // Shadow offset
          shadowRadius: 4, // Shadow radius
        },
      }}
    >

    
<Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="booking"
        component={BookingScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              News
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="newspaper-o" size={size} color={color} />
          ),
        }}
      />


      <Tab.Screen
        name="calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Calendar
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
