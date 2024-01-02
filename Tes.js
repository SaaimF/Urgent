import React, { useRef } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';

const TwoSliderScreens = () => {
  const scrollViewRef = useRef(null);

  const screenWidth = Dimensions.get('window').width;

  const scrollToScreen = (screenNumber) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: screenNumber * screenWidth,
        y: 0,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const currentPage = Math.round(
            event.nativeEvent.contentOffset.x / screenWidth
          );
          console.log('Current page:', currentPage);
        }}
      >
        <View style={[styles.slide, { width: screenWidth }]}>
          <Text style={styles.text}>Screen 1</Text>
          {/* Content for Screen 1 */}
        </View>
        <View style={[styles.slide, { width: screenWidth }]}>
          <Text style={styles.text}>Screen 2</Text>
          {/* Content for Screen 2 */}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Text onPress={() => scrollToScreen(0)} style={styles.button}>
          Screen 1
        </Text>
        <Text onPress={() => scrollToScreen(1)} style={styles.button}>
          Screen 2
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
  },
  button: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default TwoSliderScreens;
