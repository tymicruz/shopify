import React from 'react'
import { Box, Flex, Button, Text, Image, Heading } from '@chakra-ui/react'

const ImageWithText = ({ reverse, image, heading, text }) => {

    const reverseSection = reverse ? 'row-reverse' : 'row'
    return (
        <Box>
            <Flex flexDir={["column", reverseSection]} w="100%">
                <Image src={image} objectFit="cover" w={["100%", "50%"]}>
                </Image>
                <Flex w={["100%", "50%"]} flexDir="column" justifyContent="center" alignItems="center">
                    <Heading p="2rem">
                        {heading && heading}
                    </Heading>
                    <Text p="2rem">
                        {text && text}
                    </Text>
                    <Button p="2rem" w="10rem" backgroundColor="#ff38DB" color="white" _hover={{ opacity: "70%" }}>
                        Buy Now
                    </Button>
                </Flex>
            </Flex>
        </Box >
    )
}

export default ImageWithText