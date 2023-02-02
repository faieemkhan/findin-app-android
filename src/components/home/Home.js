import {Box, Text, Button} from 'native-base';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';
import {useRoute} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import Feed from '../feed/Feed';
import Profile from '../profile/Profile';
import Network from '../friends/Network';
import Notification from '../notifications/Notification';
import Post from '../post/Post';

const Tab = createMaterialBottomTabNavigator();


function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Home = () => {
  const routes = useRoute();
  const Logout = async () => {
    AsyncStorage.clear();
  };
  console.log(routes);

  return (
    <>
      <Tab.Navigator
        initialRouteName="Login"
        sceneAnimationType='shifting'
        shifting='true'
        activeColor='white'
        tabBar={props => <MyTabBar {...props} />}
        barStyle={{backgroundColor:"#002851"}}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color={'#a5b4fc'} size={26} />
            ),
          }}
          
        />

        <Tab.Screen
          name="Friends"
          component={Network}
          options={{
            tabBarLabel: 'Network',
            tabBarIcon: ({color}) => (
              <Icons name="people" color={'#a5b4fc'} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="AddPost"
          component={Post}
          options={{
            tabBarLabel: 'Post',
            tabBarIcon: ({color}) => (
              <Icons name="add-circle-sharp" color={'#a5b4fc'} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={Notification}
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({color}) => (
              <Icons name="notifications" color={'#a5b4fc'} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <Icons name="person-circle" color={'#a5b4fc'} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Home;
