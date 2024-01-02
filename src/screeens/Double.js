import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  DrawerLayoutAndroid,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import {Image} from 'react-native-elements';
import {List} from '../../Dumm';

const Double = ({navigation}) => {
  const scrollViewRef = useRef(null);

  const screenWidth = Dimensions.get('window').width;

  const scrollToScreen = screenNumber => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: screenNumber * screenWidth,
        y: 0,
        animated: true,
      });
    }
  };

  const [get, set] = useState(false);
  const {height, width} = Dimensions.get('window');
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  const navigationView = (
    <View style={styles.drawerContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Text style={{color: '#000', fontWeight: 'bold'}}>Storia</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={closeDrawer}>
          <Image
            source={require('../../assets/R.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{marginTop: '10%'}}
        data={List}
        renderItem={({item}) => {
          return (
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FFF',
                  width: '90%',
                  height: height / 15,
                  marginVertical: '3%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderRadius: 5,
                  flexDirection: 'row',
                  padding: '3%',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 20,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition="left"
      renderNavigationView={() => navigationView}>
      <View style={styles.container}>
        <View
        //    style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}
        >
          <View
            style={{
              width: width / 1,
              height: height / 5,

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width / 1.1,
                marginBottom: '5%',
              }}>
              <TouchableOpacity
                onPress={() => {
                  get === false ? openDrawer() : navigation.pop();
                }}>
                <Image
                  source={
                    get === false
                      ? require('../../assets/menu.png')
                      : require('../../assets/back.png')
                  }
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/Mess.png')}
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            height: height / 15,
            backgroundColor: '#FFF',
            width: width / 1.5,
            borderRadius: 20,
            alignSelf: 'center',
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => {
              set(!get);
              scrollToScreen(0);
            }}
            style={{
              backgroundColor: get === true ? '#000' : '#FFF',
              height: height / 18,
              borderRadius: 20,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2%',
            }}>
            <Text style={{color: get === true ? '#FFF' : '#000'}}>
              Attivita spedifica
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              set(!get);
              scrollToScreen(1);
            }}
            style={{
              backgroundColor: get === true ? '#FFF' : '#000',
              height: height / 18,
              borderRadius: 20,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2%',
            }}>
            <Text style={{color: get === true ? '#000' : '#FFF'}}>
              Dossier interattibo
            </Text>
          </TouchableOpacity>
        </View>
        {get === false ? null : (
          <TextInput
            placeholder="cerca qui"
            placeholderTextColor={'#3f3f3f'}
            style={{
              borderWidth: 1,
              backgroundColor: 'lightgrey',
              marginTop: '5%',
              borderRadius: 10,
              width: width / 1.119,
              alignSelf: 'center',
            }}
          />
        )}

        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={event => {
            const currentPage = Math.round(
              event.nativeEvent.contentOffset.x / screenWidth,
            );
            console.log('Current page:', currentPage);
          }}>
          <View style={[styles.slide, {width: screenWidth}]}>
            <SafeAreaView style={{flex: 1}}>
              <FlatList
                data={List}
                renderItem={({item}) => {
                  return (
                    <View style={{alignItems: 'center'}}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#FFF',
                          width: '90%',
                          height: height / 15,
                          marginVertical: '3%',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderRadius: 5,
                          flexDirection: 'row',
                          padding: '3%',
                          borderWidth: 1,
                        }}>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: 20,
                            fontFamily: 'Poppins-Regular',
                          }}>
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </SafeAreaView>
          </View>
          <View style={[styles.slide, {width: screenWidth}]}>
            <SafeAreaView style={{flex: 1, flexDirection: 'row',alignItems:'center',justifyContent:'space-evenly'}}>
              <TextInput
                style={{
                  borderWidth: 1,
                  marginTop: '132%',
                  backgroundColor: 'grey',
                  width: '70%',
                  borderRadius: 10,
                  marginLeft: '1%',
                  height: height / 15,
                }}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: 'grey',
                  marginTop: '132%',
                  width: width / 10,
                  height: height / 18,
                  alignItems: 'center',
                  justifyContent: 'center',borderRadius:10
                }}>
                <Image
                  source={require('../../assets/mic.png')}
                  style={{height: height / 20, width: width / 16}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#000',
                  marginTop: '132%',
                  width: width / 10,
                  height: height / 18,
                  alignItems: 'center',
                  justifyContent: 'center',borderRadius:10
                }}>
                <Image
                  source={require('../../assets/Sen.png')}
                  style={{height: height / 30, width: width / 15,tintColor:'#FFF'}}
                />
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </ScrollView>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  drawerItem: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default Double;
