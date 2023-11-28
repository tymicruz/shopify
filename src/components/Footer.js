import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, Image, VStack } from "@chakra-ui/react"

const Footer = () => {

    const imageBasePath = window.location.protocol + "//" + window.location.host + "/images/";

    return (
        <Box backgroundColor="#FFA8E2">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} color="white" fontWeight="bold">
                <Link to="/">
                    <Image src={imageBasePath + "tytylogo.png"} w={40} h={40}></Image>
                </Link>
                <VStack>
                    <Link to="/">Essential Oils</Link>
                    <Link to="/">Essential Hoodies</Link>
                </VStack>
                <VStack>
                    <Link to="/">About Us</Link>
                    <Link to="/">Learn More</Link>
                    <Link to="/">Sustainability</Link>
                </VStack>
            </Grid>
            <Box>
                <Text w="100%" textAlign="center" color="white" p="1rem" borderTop="1px solid white">
                    Copyright www.cocotuoil.com
                </Text>
            </Box>
        </Box>
    )
}

export default Footer