import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Animated,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {Switch} from 'react-native-elements';
const {height, width} = Dimensions.get('window');
const Login = ({navigation}) => {
  const [placeholderAnim] = useState(new Animated.Value(0));
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderAnim1] = useState(new Animated.Value(0));
  const [isFocused1, setIsFocused1] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(prevState => !prevState);
  };
  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(placeholderAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!isFocused) {
      Animated.timing(placeholderAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const placeholderTranslateY = placeholderAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  });
  const handleFocus1 = () => {
    setIsFocused1(true);
    Animated.timing(placeholderAnim1, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur1 = () => {
    if (!isFocused1) {
      Animated.timing(placeholderAnim1, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const placeholderTranslateY1 = placeholderAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });
  return (
    <SafeAreaView style={{flex: 1, marginLeft: '5%'}}>
      <ImageBackground source={require('../../assets/download.png')} style={{flex:1,tintColor:'grey'}}  >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          margin: '2%',
          marginTop: '10%',
        }}>
        <Text style={{color: '#000', fontFamily: 'Poppins-Regaular'}}>
          Italiano
        </Text>
        <Switch
          value={isToggled}
          onValueChange={handleToggle}
          color="#007AFF"
        />
      </View>
      <View style={{alignItems: 'center', marginTop: '15%'}}>
        <Image source={require('../../assets/Logo.png')} style={{height:height/8,width:width/4,tintColor:'#000'}} />
        <Text
          style={{
            fontSize: 23,
            fontWeight: 'bold',
            color: '#4E4E4E',
          }}>
          PROFESSIONISTA AI
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 8,
            color: '#4E4E4E',
          }}>
          LA POTENZA DELL IA AL SERVIXIO DEL TUO STUDIO
        </Text>
      </View>
      <View style={{marginTop: '10%'}}>
        <Text
          style={{
            fontFamily: 'Poppins-Black',
            color: '#4E4E4E',
            fontWeight: 'bold',

            marginTop: '2%',
            fontSize: 20,
          }}>
          Accedi al tuo account
        </Text>
      </View>

      <View style={{marginTop: '10%'}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'Poppins-Regular',
            letterSpacing: 1,
            color: '#4E4E4E',
          }}>
          None utente
        </Text>
        <TextInput
          placeholder="Inserire il nome utente"
          placeholderTextColor={'#4E4E4E'}
          style={{
            fontFamily: 'Poppins-Regular',
            marginTop: '3%',
            borderBottomWidth: 1,
            width: width / 1.15,
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: 'Poppins-Regular',
            letterSpacing: 1,
            color: '#4E4E4E',
            marginTop: '5%',
          }}>
          parola d`ordine
        </Text>
        <TextInput
          placeholder="Inserire la parola d`ordine"
          placeholderTextColor={'#4E4E4E'}
          style={{
            fontFamily: 'Poppins-Regular',
            marginTop: '3%',
            borderBottomWidth: 1,
            width: width / 1.15,
          }}
        />
      </View>

      <TouchableOpacity onPress={()=>{
        navigation.navigate('Drawer')
      }}
        style={{
          height: height / 20,
          backgroundColor: '#000000',
          width: width / 1.15,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          marginTop: '18%',
        }}>
        <Text
          style={{
            color: '#FFF',
            fontWeight: 'bold',
            fontFamily: 'CherrySwash-Regular',
          }}>
          Login
        </Text>
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: '#000',
          height: height / 10,
          marginTop: '6%',
          marginLeft: '-6%',
          width: width,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color:'#FFF',fontSize:10,textAlign:'center',fontFamily:'Poppins-Regular'}}>
          Proffesionaisa Ai srl \ Via Norma Cossetto 8/e 61032 C.F32
        </Text>
        <Text style={{color:'#FFF',fontSize:10,textAlign:'center',fontFamily:'Poppins-Regular'}}>
         Fano(PU)|Email:info@professionista-ai.com|Tel:0721624470
        </Text>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    marginTop: '5%',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 16,
    paddingVertical: 10,
    fontFamily: 'Poppins-Regular',
  },
  placeholderContainer: {
    position: 'absolute',
    left: 12,
    top: 8,
  },
  placeholderText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },
});

export default Login;
