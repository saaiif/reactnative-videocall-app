import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CallingScreen = () => {
  const [cameraIcon, setCameraIcon] = useState(true);
  const [micIcon, setMicIcon] = useState(true);
  const [phoneIcon, setPhoneIcon] = useState(true);
  const [videoIcon, setVideoIcon] = useState(true);
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Saif</Text>
        <Text style={styles.phoneNumber}>ringing +91 8000000040</Text>
      </View>
      <View style={styles.buttonConatiner}>
        {cameraIcon ? (
          <Pressable
            onPress={() => {
              setCameraIcon(!cameraIcon);
            }}>
            <View style={styles.iconButton}>
              <MaterialCommunityIcons name="camera" color={'#fff'} size={30} />
            </View>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              setCameraIcon(!cameraIcon);
            }}>
            <View style={styles.iconButton}>
              <MaterialCommunityIcons
                name="camera-off"
                color={'#fff'}
                size={30}
              />
            </View>
          </Pressable>
        )}
        {videoIcon ? (
          <Pressable
            onPress={() => {
              setVideoIcon(!videoIcon);
            }}>
            <View style={styles.iconButton}>
              <MaterialCommunityIcons name="video" color={'#fff'} size={30} />
            </View>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              setVideoIcon(!videoIcon);
            }}>
            <View style={styles.iconButton}>
              <MaterialCommunityIcons
                name="video-off"
                color={'#fff'}
                size={30}
              />
            </View>
          </Pressable>
        )}
        {micIcon ? (
          <Pressable
            onPress={() => {
              setMicIcon(!micIcon);
            }}>
            <View style={styles.iconButton}>
              <MaterialCommunityIcons
                name="microphone"
                color={'#fff'}
                size={30}
              />
            </View>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              setMicIcon(!micIcon);
            }}>
            <View style={styles.iconButton}>
              <MaterialCommunityIcons
                name="microphone-off"
                color={'#fff'}
                size={30}
              />
            </View>
          </Pressable>
        )}
        <View style={[styles.iconButton, {backgroundColor: 'red'}]}>
          <MaterialCommunityIcons
            name="phone-hangup"
            color={'#fff'}
            size={30}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#7b4e80',
    height: '100%',
  },
  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
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
  buttonConatiner: {
    backgroundColor: '#333333',
    padding: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    borderRadius: 50,
    padding: 10,
  },
});

export default CallingScreen;
