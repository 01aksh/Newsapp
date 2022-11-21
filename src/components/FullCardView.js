/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Category from './Category';
import saveIcon from '../assets/save.png';
import backIcon from '../assets/back.png';

export default function FullCardView(props) {
  const {item, handleExplore} = props;
  const {
    author,
    title,
    description,
    source: {name},
    urlToImage,
  } = item;
  const {width, height} = Dimensions.get('window');

  return (
    <View>
      <ImageBackground
        style={{width: width, height: height}}
        resizeMode="cover"
        source={{
          uri: urlToImage,
        }}>
        <View style={styles.viewStyle}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{marginRight: 20}}
              onPress={() => handleExplore()}>
              <Image source={backIcon} />
            </TouchableOpacity>
            <Category title="Business" />
          </View>
          <Image source={saveIcon} />
        </View>
        <View style={{position: 'absolute', bottom: 50}}>
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
    margin: 35,
    marginBottom: 139,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 22,
    color: '#FFC6D3',
  },
  titleText: {
    // maxHeight: 20,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 23.4,
    color: '#FFFFFF',
  },
  descriptionText: {
    // maxHeight: 30,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 14.06,
    color: '#FFFFFF',
  },
  authorText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 25,
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
