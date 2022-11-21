import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Card} from 'react-native-paper';
import saveIcon from '../assets/save.png';

const CardComponent = props => {
  const {data} = props;
  const {title, description, publishedAt, urlToImage, author, source: {name}} = data;
  return (
    <Card style={styles.cardStyle}>
      <View style={styles.mainContianer}>
        <View style={{flex: 1}}>
          <Text style={styles.dateText}>1 day ago</Text>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.authorText}>{author}</Text>
            <Text style={styles.dotStyle}>.</Text>
            <Text style={styles.categoryText}>{name}</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Image source={saveIcon} style={styles.saveStyle} />
          <Image
            style={styles.imageStyle}
            source={{
              uri: urlToImage,
            }}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 15,
    margin: 5,
  },
  mainContianer: {
    flexDirection: 'row',
    padding: 15,
  },
  HeadingText: {
    color: '#2C332E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#8E8E8E',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 22,
  },
  titleText: {
    maxHeight: 50,
    color: '#2C332E',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  descriptionText: {
    maxHeight: 60,
    color: '#A6B3BE',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
  },
  authorText: {
    color: '#E56584',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 22,
  },
  categoryText: {
    color: '#072D4B',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 22,
    opacity: 0.4,
  },
  dotStyle: {
    paddingLeft: 3,
    paddingRight: 3,
    color: '#000000',
    fontSize: 35,
    fontWeight: '400',
    lineHeight: 22,
    opacity: 0.4,
  },
  imageStyle: {height: 118, width: 144, alignSelf: 'flex-end', borderRadius: 5},
  saveStyle: {alignSelf: 'flex-end', marginBottom: 10},
});

export default CardComponent;
