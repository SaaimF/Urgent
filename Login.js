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
} from 'react-native';
import { Switch } from 'react-native-elements';
const {height, width} = Dimensions.get('window');
const Login = () => {
  const [placeholderAnim] = useState(new Animated.Value(0));
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderAnim1] = useState(new Animated.Value(0));
  const [isFocused1, setIsFocused1] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
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
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
    
    <ImageBackground source={require('./assets/New.png')} style={{height:height/2}} >
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',margin:'2%'}} >
        <Text style={{color:'#000',fontFamily:'Poppins-Regaular'}} >Italiano</Text>
      <Switch
        value={isToggled}
        onValueChange={handleToggle}
        color="#007AFF" 
      />
    </View>
    <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: height / 2,
          }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: '600',
              color: '#000',
              alignSelf: 'center',
            }}>
            PROFESSIONISTA AI
          </Text>
        </View>
    </ImageBackground>
       
        <View style={{marginLeft: '5%'}}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 25,
              fontWeight: 'bold',
              color: '#000',
            }}>
            Login
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: 'grey',
              textDecorationLine: 'underline',
              fontSize: 25,
              marginTop: '2%',
            }}>
            Accedi al tuo account
          </Text>
        </View>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.placeholderContainer,
              {transform: [{translateY: placeholderTranslateY}]},
            ]}>
            <Animated.Text
              style={[styles.placeholderText, {opacity: placeholderAnim}]}>
              {isFocused ? 'None utente' : ''}
            </Animated.Text>
          </Animated.View>
          <TextInput
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={text => console.log(text)}
            placeholder={isFocused ? 'Inserire il nome utente' : 'None utente'}
          />
        </View>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.placeholderContainer,
              {transform: [{translateY: placeholderTranslateY1}]},
            ]}>
            <Animated.Text
              style={[styles.placeholderText, {opacity: placeholderAnim1}]}>
              {isFocused1 ? 'parola d`ordine' : ''}
            </Animated.Text>
          </Animated.View>
          <TextInput
            style={styles.input}
            onFocus={handleFocus1}
            onBlur={handleBlur1}
            onChangeText={text => console.log(text)}
            placeholder={
              isFocused1 ? 'Inserire la parola d`ordine ' : 'parola d`ordine'
            }
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#0C0B1D',
            height: height / 16,
            width: '80%',
            borderRadius: 50,
            marginTop: '10%',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: '#FFF',
              fontFamily: 'Poppins-Regular',
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </TouchableOpacity>

       
      </ScrollView>
      <View
          style={{
            backgroundColor: '#0C0B1D',
            height: height / 15,
            width: width,
            marginTop: '20%',
          }}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 8.5,
              textAlign: 'justify',
              width: width,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              letterSpacing:1,fontFamily:'Poppins-Regular',paddingTop:"2%",fontWeight:'500'
            }}
            numberOfLines={1}>
            Professionasia Ai sri | Via Norma Cossetto 8/e 61032 C.F32 Fano(PU)
          </Text>
          <Text
            style={{
              color: '#FFF',
              fontSize: 8,
              textAlign: 'justify',
              width: width,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              letterSpacing:1,fontFamily:'Poppins-Regular',
            }}
            numberOfLines={1}>
            c.s €500.000i.v.C.F.P.IVA 02802180410 PEC info@pec.professionista-ai.com
          </Text>
          <Text
            style={{
              color: '#FFF',
              fontSize: 8,
              textAlign: 'center',
              width: width,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              letterSpacing:1,fontFamily:'Poppins-Regular',
            }}
            numberOfLines={1}>
            Email:info@professionista-ai.com|Tel:0721 624470
          </Text>
        </View>
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
