import { Box, 
HStack, 
Text, 
Stack,
Button,
Input,
useColorModeValue,
Spacer,
useBreakpointValue } from "@chakra-ui/react";
function Navbar() {
    return <Box>
        <HStack
        spacing="24px"
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderBottomStyle={'solid'}
        borderBottomColor={useColorModeValue('gray.200', 'gray.900')}>
            <Text
            px={{ base: 4 }}
            fontSize={'24px'}>
                SeatStuck
            </Text>
            
            <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/explore'}>
            Explore
            </Button>
            <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/categories'}>
            Categories
            </Button>
            <Input placeholder="Search here" />
            <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/cart'}>
            Cart
            </Button>
            <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/signin'}>
            Sign In
            </Button>
        </HStack>
    </Box>
}

export default Navbar;