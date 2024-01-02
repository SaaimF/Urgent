import React, {useRef} from 'react';
import {
  View,
  Text,
  DrawerLayoutAndroid,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  FlatList,TextInput
} from 'react-native';
import {Image} from 'react-native-elements';
import {List} from '../../Dumm';

const Drawer = ({navigation}) => {
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
          <Image
            source={require('../../assets/set.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={closeDrawer}>
          <Image
            source={require('../../assets/R.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#FFF',
          borderWidth: 1,
          height: height / 18,
          width: width / 2.5,
          alignSelf: 'center',
          marginTop: '5%',
          borderRadius: 30,
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: '2%',
        }}>
        <View
          style={{
            backgroundColor: '#000',
            width: width / 5,
            height: height / 22,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FFF'}}>GPT-3.5</Text>
        </View>
        <View
          style={{
            width: width / 5,
            height: height / 22,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#000'}}>GPT-4.0</Text>
        </View>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={{
            paddingLeft: '10%',
            marginTop: '10%',
            marginBottom: '5%',
            backgroundColor: '#FFF',
            height: height / 13,
            borderRadius: 10,
            borderWidth: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 20,
              color: '#000',
            }}>
            Lingua
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingLeft: '10%',
            marginTop: '5%',
            backgroundColor: '#FFF',
            height: height / 13,
            borderRadius: 10,
            borderWidth: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 20,
              color: '#000',
            }}>
            Tono di scrittura
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingLeft: '10%',
            marginTop: '10%',
            backgroundColor: '#FFF',
            height: height / 13,
            borderRadius: 10,
            borderWidth: 1,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 20,
              color: '#000',
            }}>
            Stile di sctittura
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingLeft: '10%',
            marginTop: '10%',
            backgroundColor: '#FFF',
            height: height / 13,
            borderRadius: 10,
            borderWidth: 3,
            alignItems: 'flex-start',
            justifyContent: 'center',
            borderColor: 'green',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 20,
              color: 'green',
              fontWeight: 'bold',
            }}>
            Ripristina default
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginLeft: '-30%',
            marginTop: '90%',
            backgroundColor: '#000',
            height: height / 13,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            borderWidth: 3,
            alignItems: 'flex-start',
            justifyContent: 'center',
            borderColor: '#000',
          }}></View>
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition="left"
      renderNavigationView={() => navigationView}>
      <View style={styles.container}>
        <SafeAreaView style={{flex: 1}}>
          <View
          //    style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}
          >
            <View
              style={{
                width: width / 1,
                height: height / 5,
                backgroundColor: '#071832',
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
                    openDrawer();
                  }}>
                  <Image
                    source={require('../../assets/set.png')}
                    style={{height: 30, width: 30, tintColor: '#FFF'}}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/Out.png')}
                    style={{height: 30, width: 30, tintColor: '#FFF'}}
                  />
                </TouchableOpacity>
              </View>

              <Text style={{color: '#fff', fontSize: 25}}>
                Specifica del tuo interesse
              </Text>
            </View>
            {/* <TextInput
          style={{
            marginTop: "1%",
            width: width/1.5,
            height:height/18,
            backgroundColor: 'lightgray',
            borderRadius: 10,
            marginLeft: 10,
            padding: 20,
          }}
          placeholder="cerca qul"
          placeholderTextColor={'#3F3F3F'}></TextInput> */}
          </View>
          <TextInput
            placeholder="cerca qui"
            placeholderTextColor={'#3f3f3f'}
            style={{
              borderWidth: 1,
              backgroundColor: 'lightgrey',
              marginTop: '5%',borderRadius:10,width:width/1.119,alignSelf:'center'
            }}
          />
          <FlatList
            data={List}
            renderItem={({item}) => {
              return (
                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Double');
                    }}
                    style={{
                      backgroundColor: '#071832',
                      width: '90%',
                      height: height / 15,
                      marginVertical: '3%',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderRadius: 5,
                      flexDirection: 'row',
                      padding: '3%',
                    }}>
                    <Text
                      style={{
                        color: '#FFF',
                        fontSize: 20,
                        fontFamily: 'Poppins-Regular',
                      }}>
                      {item.title}
                    </Text>
                    <Image
                      source={require('../../assets/Righ.png')}
                      style={{tintColor: '#FFF', height: 30, width: 30}}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </SafeAreaView>
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

export default Drawer;
