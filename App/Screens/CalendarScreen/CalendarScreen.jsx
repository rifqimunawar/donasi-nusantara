import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import Colors from '../../Utils/Colors'

export default function CalendarScreen() {
  const [selected, setSelected] = useState('')

  return (
    <View style={{ margin: 10 }}>
      <Text style={styles.heading}>Calender Kegiatan</Text>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString)
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: Colors.biru2,
          },
        }}
      />
      <Text style={styles.heading}>Keterangan</Text>

      <View style={styles.keterangan}>
        <Text
          style={{ fontStyle: 'italic', textAlign: 'center', paddingTop: 40 }}
        >
          tidak ada kegiatan
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  keterangan: {
    width: 370,
    height: 200,
    backgroundColor: Colors.biru3,
    borderRadius: 20,
  },
})
