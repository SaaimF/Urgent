import React, {useRef} from 'react';
import {
  View,
  Text,
  DrawerLayoutAndroid,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Image} from 'react-native-elements';

const Drawer = () => {
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
            source={require('./assets/set.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={closeDrawer}>
          <Image
            source={require('./assets/R.png')}
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
          alignItems: 'center',flexDirection:'row',paddingHorizontal:'2%'
        }}>
        <View
          style={{
            backgroundColor: '#000',
            width: width / 5,
            height: height / 22,
            borderRadius: 20,alignItems:'center',justifyContent:'center'
          }}>
            <Text style={{color:'#FFF'}} >GPT-3.5</Text>
          
          </View>
        <View
          style={{
         
            width: width / 5,
            height: height / 22,
            borderRadius: 20,alignItems:'center',justifyContent:'center'
          }}>
              <Text style={{color:'#000'}} >GPT-4.0</Text>
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
            borderColor: 'lightgreen',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 20,
              color: 'lightgreen',
              fontWeight: 'bold',
            }}>
            Ripristina default
          </Text>
        </TouchableOpacity>
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
        <TouchableOpacity onPress={openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
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
