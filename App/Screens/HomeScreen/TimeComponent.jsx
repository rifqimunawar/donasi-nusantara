import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import Colors from '../../Utils/Colors';

export default function TimeComponent() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setCurrentTime(new Date());
  }

  // Function to pad single digit numbers with leading zeros
  const padWithZero = number => {
    return number < 10 ? '0' + number : number;
  };

  return (
    <View>
      <Text style={{ fontSize: 18, color: Colors.white }}>
        {padWithZero(currentTime.getHours())}:{padWithZero(currentTime.getMinutes())}:{padWithZero(currentTime.getSeconds())} WIB
      </Text>
      <Text style={{ fontSize: 14, color: Colors.white }}>
        {currentTime.toLocaleDateString('id-ID', {
          timeZone: 'Asia/Jakarta',
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </Text>
    </View>
  );
}
