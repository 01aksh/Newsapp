import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import hambuggerIcon from '../assets/Vector.png';
import searchIcon from '../assets/search.png';

export default function Home() {
  return (
    <View>
      <View style={styles.mainContianer}>
        <View>
          <Image source={hambuggerIcon} />
        </View>
        <View>
          <Text style={styles.HeadingText}>Zintlr News</Text>
        </View>
        <View>
          <Image source={searchIcon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContianer: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
  },
  HeadingText: {
    color: 'red',
    fontSize: 30,
  },
});
