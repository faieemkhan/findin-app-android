import {
  Box,
  Text,
  Image,
  HStack,
  Heading,
  Stack,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Center,
  ScrollView,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import img from '../../assets/Images/loginTopImg.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@email', value)
      navigation.navigate("Login")
    } catch (e) {
      // saving error
    }
  }
  const [loginState, setLoginState] = useState({
    login: true,
    username: '',
    password: '',
  });
  useEffect(() => {
    console.log(loginState.login);
  }, [loginState.login]);
  return (
    <Box style={{height: 250}}>
      <Image
        key={'lg'}
        size={'full'}
        resizeMode="cover"
        source={require('../../assets/Images/loginTopImg.jpg')}
        alt={'Alternate Text '}
      />

      <Box
        safeArea
        p="2"
        py="8"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        shadow={5}
        mt={-1}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}
      >
        <ScrollView h={'2xl'}>
          {loginState.login && (
            <HStack justifyContent={'space-between'}>
              <Heading
                size="lg"
                fontWeight="600"
                color="coolGray.800"
                _dark={{
                  color: 'warmGray.50',
                }}
              >
                Welcome
              </Heading>
              <HStack>
                <Text
                  fontSize="sm"
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                >
                  I'm a new user.{' '}
                </Text>
                <TouchableHighlight
                  underlayColor="#fff"
                  onPress={() => navigation.navigate('Signup')}
                  _text={{
                    color: 'indigo.500',
                    fontWeight: 'medium',
                    fontSize: 'sm',
                  }}
                >
                  <Text color={'blue.700'} textDecorationLine={'underline'}>
                    Sign Up
                  </Text>
                </TouchableHighlight>
              </HStack>
            </HStack>
          )}

          <Heading
            mt="1"
            _dark={{
              color: 'warmGray.200',
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            {loginState.login ? 'Sign in to continue!' : 'Forget Password'}
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              {loginState.login && (
                <>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input type="password" />
                </>
              )}
              <Link
                onPress={() =>
                  loginState.login
                    ? setLoginState({login: false})
                    : setLoginState({login: true})
                }
                _text={{
                  fontSize: 'md',
                  fontWeight: '500',
                  color: 'indigo.500',
                }}
                alignSelf="flex-end"
                mt="1"
              >
                {loginState.login ? 'Forget Password?' : 'Cancel'}
              </Link>
            </FormControl>
            {loginState.login ? (
              <Button mt="2" colorScheme="indigo" onPress={() => storeData("ok")}>
                Sign in
              </Button>
            ) : (
              <Button mt="2" colorScheme="indigo">
                Forget Password
              </Button>
            )}
          </VStack>

          <Center mt={9}>
            <Text style={{fontFamily: 'Arial', fontSize: 20, color: '#000'}}>
              Or Sign in with
            </Text>
          </Center>

          <HStack py={8} justifyContent={'space-around'}>
            <Icon.Button name="facebook" backgroundColor="#3b5998" size={30}>
              <Text style={{fontFamily: 'Arial', fontSize: 20, color: '#fff'}}>
                Facebook
              </Text>
            </Icon.Button>
            <Icon.Button
              name="google"
              backgroundColor="#C23321"
              size={30}
            >
              <Text style={{fontFamily: 'Arial', fontSize: 20, color: '#fff'}}>
                Google
              </Text>
            </Icon.Button>
          </HStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Login;
