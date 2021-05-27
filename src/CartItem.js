import {Box, 
Heading, 
Image, 
Button, 
HStack, 
useColorModeValue} from '@chakra-ui/react';

function CartItem() {
    return <Box
    maxW={'600px'}
    w={'full'}
    bg={useColorModeValue('white', 'gray.900')}
    shadow={'lg'}
    rounded={'lg'}
    p={6}
    textAlign={'center'}>
        <HStack>
             <Image p={6} fallbackSrc="https://via.placeholder.com/150"/>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Product Name
        </Heading>
                  <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Remove from Cart
          </Button>
        </HStack>
    </Box>
}

export default CartItem;