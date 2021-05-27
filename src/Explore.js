import {
    Heading,
    VStack,
    StackDivider,
    Flex
} from '@chakra-ui/react'
import Navbar from './Navbar';
import TrendingProduct from './TrendingProduct';
function Explore() {
    return <Flex direction={'column'}>
    <Navbar/>
    <Heading>
        Trending
    </Heading>
    <VStack
    divider={<StackDivider borderColor="gray.200" />}
    spacing={4}
    align="stretch"
    >
    <TrendingProduct title="Cooler" desc="At low price"/>
    <TrendingProduct title="Cooler" desc="At low price"/>
    </VStack>
    </Flex>
} 

export default Explore;