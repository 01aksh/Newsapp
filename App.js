import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, TouchableOpacity} from 'react-native';
import {FAB} from 'react-native-paper';
import {View, Text, Image, StyleSheet} from 'react-native';
import hambuggerIcon from './src/assets/Vector.png';
import searchIcon from './src/assets/search.png';
import CardComponent from './src/components/CardComponent';
import TabView from './src/components/TabView';
import TopCardView from './src/components/TopCardView';
import FullCardView from './src/components/FullCardView';

const App = () => {
  const API_KEY = 'dc74078108f449b7a7464ff5c990ef89';
  const topUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  const mainUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;
  const [list, setList] = useState([]);
  const [mainList, setMainList] = useState([]);
  const [isExplore, setExplore] = useState(false);
  useEffect(() => {
    console.log('coming to ');
    callAPI();
    mainApiCall();
  }, []);

  const mainApiCall = () => {
    fetch(mainUrl)
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status,
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          console.log('data', data);
          if (data.articles && data.articles.length) {
            setMainList(data.articles);
          } else {
            setMainList([]);
          }
        });
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  };

  const callAPI = () => {
    fetch(topUrl)
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status,
          );
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          console.log('data', data);
          if (data.articles && data.articles.length) {
            setList(data.articles);
          } else {
            setList([]);
          }
        });
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  };
  const tabData = [
    {
      title: 'All',
    },
    {
      title: 'Android',
    },
    {
      title: 'Cricket',
    },
    {
      title: 'Iphone',
    },
    {
      title: 'Google',
    },
  ];

  const handleExplore = () => {
    console.log('going');
    setExplore(!isExplore);
  };

  const SilderComponent = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={mainList}
        renderItem={({item}) => (
          <FullCardView item={item} handleExplore={handleExplore} />
        )}
        keyExtractor={(item, index) => index}
      />
    );
  };

  return (
    <View>
      {isExplore ? (
        <SilderComponent />
      ) : (
        <>
          <ScrollView>
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
            <View>
              <FlatList
                style={{padding: 10}}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={mainList}
                renderItem={TopCardView}
                keyExtractor={(item, index) => index}
              />
            </View>
            <View style={{padding: 10}}>
              <Text style={styles.titleText}>Top Stories for you</Text>
              <FlatList
                style={{padding: 10}}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={tabData}
                renderItem={TabView}
                keyExtractor={(item, index) => index}
              />
              {list && list.length
                ? list.map(item => {
                    return <CardComponent data={item} />;
                  })
                : null}
            </View>
          </ScrollView>
          <FAB
            label="Explore"
            icon="plus"
            style={styles.fab}
            onPress={() => handleExplore()}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContianer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
  },
  HeadingText: {
    color: '#2C332E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleText: {
    marginBottom: 10,
    color: '#072D4B',
    fontSize: 20,
    fontWeight: '500',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: '30%',
    bottom: 0,
    color: 'white',
    zIndex: 10,
  },
});

export default App;
