import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TabView({item}) {
  const {title} = item;
  return (
    <View style={styles.mainCard}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCard: {
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#ffffff',
    width: 79,
    height: 30,
    margin: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
  },
});
