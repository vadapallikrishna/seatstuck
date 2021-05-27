import Navbar from './Navbar.js';
import CartItem from './CartItem.js';
import {Heading, VStack, Button} from '@chakra-ui/react';
function Cart() {
    var i = 0;
    var products = [];
    while(i<10) {
        products.push(<CartItem/>);
        i++;
    }
    return <div>
    <Navbar/>
    <Heading>
        Cart
    </Heading>
    <VStack templateColumns="repeat(5, 1fr)" gap={6}>
    {products}
    </VStack>
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
            Next
          </Button>
    </div>
    
}

export default Cart;