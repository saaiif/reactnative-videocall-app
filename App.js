import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CallingScreen from './src/components/screens/CallingScreen';
import ContactsScreen from './src/components/screens/ContactsScreen';
import IncomingCallScreen from './src/components/screens/IncomingCallScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      {/* <ContactsScreen /> */}
      {/* <CallingScreen/> */}
      <IncomingCallScreen />
    </>
  );
};

export default App;
