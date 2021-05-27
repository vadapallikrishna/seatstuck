import {
    Heading,
    Text,
    VStack,
    StackDivider,
    Flex,
    Box,
    SimpleGrid
} from '@chakra-ui/react'
import Navbar from './Navbar.js'
import Product from './Product.js'

function Listing() {
    return <Flex direction={'column'}>
    <Navbar/>
    <Flex direction={'row'}>
    <VStack
    p={6}
    divider={<StackDivider borderColor="gray.200" />}
    spacing={4}
    align="stretch">
    <Text>
        Computers
    </Text>
    <Text>
        Home Appliances
    </Text>
    <Text>
        Home Automation
    </Text>
    <Text>
        Shirts
    </Text>
    <Text>
        T-Shirts
    </Text>
    </VStack>
    <Box>
        <Heading>
            Product Category
        </Heading>
        <SimpleGrid columns={4} gap={6}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </SimpleGrid>
    </Box>
    </Flex>
    </Flex>
}

export default Listing;