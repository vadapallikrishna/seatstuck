import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Box,
  Center,
  useColorModeValue
} from '@chakra-ui/react';
import Navbar from './Navbar.js';
function Signin() {

    return <Stack direction={'column'}>
        <Navbar/>
        <Center>
    <Box
    maxW={'400px'}
    height={'300px'}
    p={6}
    w={'full'}
    bg={useColorModeValue('white', 'gray.900')}
    shadow={'lg'}
    rounded={'lg'}
    p={6}>
    <Stack minH={'100vh'} direction={'column'}>
        <Heading fontSize={'2xl'}>Sign in to your account</Heading>
        <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
        </FormControl>
        <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
        </FormControl>
        <Button colorScheme={'blue'} variant={'solid'}>
              Sign in
        </Button>
    </Stack>
    </Box>
    </Center>
    </Stack>
}

export default Signin;