import {Box,Heading,Text} from '@chakra-ui/react';

function TrendingProduct({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}

export default TrendingProduct;