import {Image, Heading, Box, Center, Stack, Badge, Button, useColorModeValue} from '@chakra-ui/react';

function Product() {
    return  <Center> 
    <Box
    maxW={'320px'}
    w={'full'}
    bg={useColorModeValue('white', 'gray.900')}
    shadow={'lg'}
    rounded={'lg'}
    p={6}
    textAlign={'center'}>
        <Image p={6} fallbackSrc="https://via.placeholder.com/150"/>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Product Name
        </Heading>

           <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            music
          </Badge>
        </Stack>
        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Remember
          </Button>
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
            Add to Cart
          </Button>
        </Stack>
    </Box>
    </Center>
}

export default Product;