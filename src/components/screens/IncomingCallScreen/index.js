import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import bg from '../../../../assets/images/mob-backImag.webp';

const IncomingCallScreen = () => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={bg}
        style={styles.backgroundImage}
        resizeMode="cover">
        <Text style={styles.name}>Saif</Text>
        <Text style={styles.phoneNumber}>ringing +91 8000000040</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
    marginTop: 50,
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 20,
    color: '#fff',
  },
  backgroundImage: {
    flex:1,
    // alignItems:'center',
  },
});

export default IncomingCallScreen;
