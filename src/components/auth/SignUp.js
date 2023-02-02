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
  Pressable,
} from 'native-base';
import React, { useState } from 'react';
import img from '../../assets/Images/loginTopImg.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableHighlight} from 'react-native';

const SignUp = ({navigation}) => {
  const [SignUpState, setSignUpState] = useState({
    SignUp:true,
    name:'',
    email:"",
    username:"",
    password:""
  })
  return (
    <>
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
                  Registered user?{' '}
                </Text>
                <TouchableHighlight
                  underlayColor="#fff"
                  onPress={() => navigation.navigate('Login')}
                  _text={{
                    color: 'indigo.500',
                    fontWeight: 'medium',
                    fontSize: 'sm',
                  }}
                >
                  <Text color={'blue.700'} textDecorationLine={'underline'}>
                    Log in
                  </Text>
                </TouchableHighlight>
              </HStack>
            </HStack>

            <Heading
              mt="1"
              _dark={{
                color: 'warmGray.200',
              }}
              color="coolGray.600"
              fontWeight="medium"
              size="xs"
            >
              Sign up to continue!
            </Heading>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Full Name</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Email ID</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>UserName</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" />
              </FormControl>
              <Text>
                By clicking Agree & Send OTP, you agree to the FindIn
                <Pressable>
                  <Text color={'blue.800'} textDecorationLine={"underline"}>Privacy Policy</Text>
                </Pressable>
                <Pressable>
                  <Text color={'#000'}>&nbsp; and &nbsp;</Text>
                </Pressable>
                <Pressable>
                  <Text color={'blue.800'} textDecorationLine={"underline"}>Terms & Conditions</Text>
                </Pressable>
              </Text>
              <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate("Otp")}>
                Agree & Send OTP
              </Button>
            </VStack>
          </ScrollView>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
