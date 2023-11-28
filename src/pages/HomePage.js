import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image } from '@chakra-ui/react';
import Hero from '../components/Hero';
import ImageWithText from '../components/ImageWithText';
import RichText from '../components/RichText';

const HomePage = () => {

    const { fetchAllProducts, products } = useContext(ShopContext);

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (!products) return <div>Loading ...</div>
    console.log("products here:")
    console.log(products)
    return (
        <Box>
            <Hero />
            <RichText heading="a heading" text="this is text." />
            <Grid templateColumns="repeat(3, 1fr)">
                {
                    products.map(product => (

                        < Link to={`/products/${product.handle}`} key={product.id}>
                            <Box _hover={{ opacity: '80%' }} textAlign="center">
                                <div>
                                    <Text w="100%">{product.title}</Text>
                                    < Text > {product.variants[0].price.amount}</Text>
                                    <Image w="100%" src={product.images[0].src} color="gray.500" />
                                </div>
                            </Box>
                            {/* {console.log(product.handle)}
                            {console.log("!!!!!")} */}
                        </Link>
                    ))
                }
            </Grid>
            <RichText heading="a heading" text="this is text." />
            <ImageWithText reverse image="https://static.vecteezy.com/system/resources/previews/004/557/370/original/food-mushroom-cartoon-object-vector.jpg" heading="Hoodies"
                text="Shrooms can be a nice addition to your life." />
            <ImageWithText image="https://static.vecteezy.com/system/resources/previews/004/557/370/original/food-mushroom-cartoon-object-vector.jpg" heading="Hoodies"
                text="Shrooms can be a nice addition to your life." />
            <ImageWithText reverse image="https://static.vecteezy.com/system/resources/previews/004/557/370/original/food-mushroom-cartoon-object-vector.jpg" heading="Hoodies"
                text="Shrooms can be a nice addition to your life." />

        </Box >
    )
}

export default HomePage