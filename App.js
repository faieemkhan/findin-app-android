import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {Button, View, LogBox} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
  Stack,
} from 'native-base';
import Login from './src/components/auth/Login';
import SignUp from './src/components/auth/SignUp';
import Otp from './src/components/auth/Otp';
import Home from './src/components/home/Home';
import CustomDrawer from './src/components/CustomDrawer';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

// Color Switch Component
function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={1} alignItems="center">
      <Text _light={{
        color:"yellow.800"
      }}
      _dark={{
        color:"blue.700"
      }}
      >
        <Ionicons name={colorMode === 'light' ? "md-sunny-sharp" :"md-moon" } size={20}/>
      </Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      
    </HStack>
  );
}

const Drawer = createDrawerNavigator();
const StackNavigation = createNativeStackNavigator();

function StackNavigationBar() {
  return (
    <StackNavigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigation.Screen name="Login" component={Login} />
      <StackNavigation.Screen name="Signup" component={SignUp} />
      <StackNavigation.Screen name="Otp" component={Otp} />
    </StackNavigation.Navigator>
  );
}
function DrawerNavigationBar() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home"  component={Home} options={{
          
          headerRight: () => (
            <ToggleDarkMode />
          ),
        }} />
    </Drawer.Navigator>
  );
}

const App = () => {

  const [isLogin, setIsLogin] = useState(false);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@email')
      if(value !== null) {
        // value previously stored
        setIsLogin(true)
      }
      else{
        setIsLogin(false)
      }
    } catch(e) {
      // error reading value
    }
  }

  

  useEffect(() => {
    let abortController = new AbortController();  
    const intervalId = setInterval(() => {
        getData();
    }, 100);
    return () => {
      clearInterval(intervalId);
      abortController.abort(); 
    };
  }, []);


  return (
    <NativeBaseProvider>
      <NavigationContainer>
        
        {isLogin ? <DrawerNavigationBar /> : <StackNavigationBar />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
