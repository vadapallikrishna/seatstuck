import Navbar from './Navbar.js';
import Product from './Product.js';
import {Grid} from '@chakra-ui/react';
function Welcome() {
    var i = 0;
    var products = [];
    while(i<10) {
        products.push(<Product/>);
        i++;
    }
    return <div>
    <Navbar/>
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
    {products}
    </Grid>
    </div>
    
}

export default Welcome;