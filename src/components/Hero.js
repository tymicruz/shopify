import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Text, Image, Button, Center } from "@chakra-ui/react"

const Hero = () => {

    const imageBasePath = window.location.protocol + "//" + window.location.host + "/images/";

    return (
        <Box backgroundColor="#ffa8e2" w="100%" position="relative" h="70vh">
            <Image src={imageBasePath + "tytylogo.png"} h="100%" m="auto" objectFit="contain"
                objectPosition={["top", "center"]}
            />
            <Text position="absolute" bottom="20%" w="100%"
                textAlign="center" color="white" fontWeight="bold" fontSize="3em">
                Introducing the essentials
            </Text>
            <Center>
                <Button
                    w="10rem"
                    backgroundColor="#ff38BD"
                    _hover={{ opacity: "70%" }}
                    color="white"
                    position="absolute"
                    bottom="2%"
                >
                    Shop Now
                </Button>
            </Center>
        </Box>
    )
}

export default Hero