import React,{useEffect, useState,useContext} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Share,
  Touchable
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TouchableHighlight } from 'react-native-gesture-handler';
import { NavigationContext } from '@react-navigation/native';

const CustomDrawer = props => {

  const [userProfile, setUserProfile] = useState('https://c-programing-content.s3.ap-south-1.amazonaws.com/Images/image.jpeg');
  const [email, setEmail] = useState('user@mail.com');
  const [name, setName] = useState('Faieem5252')

  

  const getData = async () => {
    try {
      const UserEmail = await AsyncStorage.getItem('UserEmail');
      setEmail(UserEmail);
    } catch (e) {
      console.log(e);
    }
  };

// console.log(userProfile)
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      await AsyncStorage.clear();
      // Remember to remove the user from your app's state as well
      // console.log('LOG OUT');
    } catch (error) {
      console.error(error);
    }
  };

  //console.log(statusCodes)

  useEffect(()=>{
    const intervalId = setInterval(() => {
      getData();
      // console.log(UserData)
    }, 1000);
    GoogleSignin.configure({
    // webClientId: '505659387484-134rgbgs6phbvqhoi9e4t3a9qq3c7iq0.apps.googleusercontent.com', //for  release app
    webClientId: '505659387484-134rgbgs6phbvqhoi9e4t3a9qq3c7iq0.apps.googleusercontent.com',
  }); 
  return () => {
    clearInterval(intervalId);
  };
    },[]);

    const shareData = async () => {
      try {
          await Share.share({
              message:
                  'Share App Link',
          });
      } catch (error) {
          alert(error.message);
      }
  };
//console.log(props)
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={require('../assets/Images/quiz-card-bg-img.jpg')}
          style={{paddingTop: 20, paddingBottom: 20}}>
            <TouchableHighlight onPress={() => props.navigation.navigate("Profile")}>
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'center', //Centered horizontally
              alignItems: 'center', //Centered vertically
              flex: 1,
            }}>
            <Image
              source={{uri: userProfile===null || userProfile === "null" ? "https://c-programing-content.s3.ap-south-1.amazonaws.com/Images/image.jpeg" : `${userProfile}`}}
              style={[styles.logoStyle, {flex: 1}]}
            />
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 22,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                {name}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                faieem@gmail.com
              </Text>
            </View>
          </View>
            </TouchableHighlight>
        </ImageBackground>

        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => shareData()} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
});
export default CustomDrawer;
