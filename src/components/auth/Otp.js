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

const Otp = ({navigation}) => {
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
                Create Account
              </Heading>
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
            We have sent an OTP to faieemk444@gmail.com &nbsp;
            <Text color={"blue.700"} textDecorationLine={"underline"} onPress={() => navigation.navigate("Signup")}>Edit</Text>
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
                  <FormControl.Label>OTP</FormControl.Label>
                  <Input type='number' keyboardType='number-pad' maxLength={6} />
              <Link
              onPress={() => navigation.navigate("Signup")}
                _text={{
                  fontSize: 'md',
                  fontWeight: '500',
                  color: 'indigo.500',
                }}
                alignSelf="flex-end"
                mt="1"
              >
                 Cancel
              </Link>
            </FormControl>

              <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate("Login")}>
                Verify OTP
              </Button>

          </VStack>

        </ScrollView>
      </Box>
    </Box>
  </>
  )
}

export default Otp