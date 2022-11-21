import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Category(props) {
  const {title} = props;
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
    backgroundColor: '#F4F4F4',
    width: 75,
    height: 22,
    // margin: 15,

  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
  },
});
