// import React in our code
import React, {useRef, useEffect} from 'react';

// import all the components we are going to use
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const App = () => {
  let animationRef = useRef();
  useEffect(() => {
    animationRef.play();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.header}>
          React Native Lottie
        </Text>
        <LottieView
          ref={(animation) => {
            animationRef = animation;
          }}
          source={require('./animation.json')}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.smallText}>www.aboutreact.com</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 18,
    textAlign: 'center',
  },
});