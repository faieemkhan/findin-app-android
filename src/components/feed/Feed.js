import React from 'react';
import {ScrollView} from 'react-native';
import {
  Link,
  Text,
  HStack,
  Badge,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
  Stack,
  AspectRatio,
  Image,
  Avatar,
  Spacer,
  Divider,
  useDisclose,
  Actionsheet,
  Input,
  Button,
} from 'native-base';
import MCIon from 'react-native-vector-icons/MaterialCommunityIcons';
const Feed = ({navigation}) => {
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <>
      <ScrollView>
        <Box alignItems="center">
          <Box
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="5"
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
            <Box>
              <HStack
                space={[2, 3]}
                justifyContent="space-between"
                p={2}
                alignItems={'center'}
              >
                <Avatar
                  size="48px"
                  source={{
                    uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                />
                <VStack>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    bold
                  >
                    Faieem Khan
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}
                  >
                    Photo lover
                  </Text>
                  <Text
                    fontSize="xs"
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}
                  >
                    11 Jan, 2022 (11:45 PM)
                  </Text>
                </VStack>
                <Spacer />
                <Link>
                  <Text fontSize={16} 
                  _dark={{
                    color:"blue.400"
                  }}
                   _light={{
                    color:"blue.800"
                  }}>
                    <MCIon name="plus" size={16} /> follow
                  </Text>
                </Link>
              </HStack>
              <Divider />
              <Box>
                <Text>
                  When we define our button this way, the this variable in
                  options is not the HomeScreen instance, so you can't call
                  setState or any instance methods on it. This is pretty
                  important because it's extremely common to want the buttons in
                  your header to interact with the screen that the header
                  belongs to. So, we will look how to do this next.
                </Text>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Divider mt={1} />
              <Text
                fontSize={15}
                _dark={{
                  color: 'blue.400',
                }}
                color={'blue.800'}
                fontWeight={'light'}
                p={2}
              >
                <MCIon name="thumb-up" size={20} /> 100
              </Text>
              <Divider />

              <HStack justifyContent={'space-around'}>
                <Link>
                  <HStack alignItems={'center'} space={2}>
                    <Text fontSize={35} fontWeight={'light'}>
                      <MCIon name="thumb-up-outline" size={30} />
                    </Text>
                    <Text>Like</Text>
                  </HStack>
                </Link>
                <Link onPress={onOpen}>
                  <HStack alignItems={'center'} space={2}>
                    <Text fontSize={35} fontWeight={'light'}>
                      <MCIon name="comment-multiple" size={30} />
                    </Text>
                    <Text>Comment</Text>
                  </HStack>
                </Link>
              </HStack>
              <Divider />
            </Box>
            <Box>
              <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content h={'90%'} alignItems={'flex-start'}>
                  <Box>
                    <Input
                      type={'text'}
                      w="100%"
                      py="0"
                      InputRightElement={
                        <Button size="md" rounded="none" w="2/6" h="full">
                          Submit
                        </Button>
                      }
                      placeholder="Write a Comment"
                    />
                  </Box>
                  <Box w="100%" h={60} px={2} justifyContent="center">
                    <Text
                      fontSize="16"
                      color="gray.500"
                      _dark={{
                        color: 'gray.300',
                      }}
                    >
                      Comments
                    </Text>
                  </Box>

                  <Divider />
                  <ScrollView>
                    <HStack alignItems={'center'}>
                      <Box p={3}>
                        <Avatar
                          bg="cyan.500"
                          size="md"
                          source={{
                            uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                          }}
                        >
                          HS
                        </Avatar>
                      </Box>
                      <VStack>
                        <Text fontSize={16} fontWeight={'bold'}>
                          Faieem Khan
                        </Text>
                        <Badge colorScheme="coolGray">DARK</Badge>
                      </VStack>
                    </HStack>
                  </ScrollView>
                </Actionsheet.Content>
              </Actionsheet>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default Feed;
