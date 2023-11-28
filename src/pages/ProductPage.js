import React from 'react'
import { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Box, Grid, Image, Text, Button, Heading, Flex, Center } from "@chakra-ui/react"

const ProductPage = () => {

    let { handle } = useParams();

    const { fetchProductWithHandle, fetchAllProducts, addItemToCheckout, product, products } = useContext(ShopContext);

    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    useEffect(() => {
        fetchAllProducts()
        return () => {

        }
    }, [fetchAllProducts])


    if (!product.title) return <div>loading...</div>

    return (
        <Box p="2rem">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} m="auto">
                <Flex justifyContent="center" alignItems="center">
                    <Image src={product.images[0].src}></Image>
                </Flex>
                <Flex flexDirection="column" alignItems="center" justifyContent="center" px="2rem">
                    <Heading pb="2rem">{product.title}</Heading>
                    <Text fontWeight="bold" pb="2rem">$ {product.variants[0].price.amount}</Text>
                    <Text pb="2rem" color="gray.500">{product.description}</Text>
                    <Button
                        onClick={() => addItemToCheckout(product.variants[0].id, 1)}
                        _hover={{ opacity: "80%" }}
                        w="10rem"
                        backgroundColor="#ff38bd"
                        cursor="pointer"
                        color="white">Add to Cart</Button>

                </Flex>
            </Grid>
        </Box>
    )
}

export default ProductPage