/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ImageBackground, Image, Text} from 'react-native';
import Category from './Category';
import saveIcon from '../assets/save.png';

export default function TopCardView({item}) {
  console.log('coming', item);
  const {
    author,
    title,
    description,
    source: {name},
    urlToImage,
  } = item;
  return (
    <View style={{margin: 10}}>
      <ImageBackground
        style={{width: 232, height: 311}}
        resizeMode="cover"
        imageStyle={{borderRadius: 10}}
        source={{
          uri: urlToImage,
        }}>
        <View style={styles.viewStyle}>
          <Category title="Business" />
          <Image source={saveIcon} />
        </View>
        <View>
          <Text style={styles.timeText}>10 hours ago</Text>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.authorText}>{author}</Text>
            <Text style={styles.dotStyle}>.</Text>
            <Text style={styles.categoryText}>{name}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    marginBottom: 139,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 22,
    color: '#FFC6D3',
  },
  titleText: {
    maxHeight: 20,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16.4,
    color: '#FFFFFF',
  },
  descriptionText: {
    maxHeight: 30,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.06,
    color: '#FFFFFF',
  },
  authorText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 22,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 22,
    opacity: 0.4,
  },
  dotStyle: {
    paddingLeft: 3,
    paddingRight: 3,
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: '400',
    lineHeight: 22,
    opacity: 0.4,
  },
});
