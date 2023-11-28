import React from 'react'
import { Box, Heading, Text, Center } from '@chakra-ui/react'

const RichText = ({ heading, text }) => {
    return (
        <Box p="4rem">
            <Center display="flex" flexDir="column" textAlign="center">
                <Heading p="2rem">
                    {heading && heading}
                </Heading>
                <Text p="2rem">{text && text}</Text>
            </Center>
        </Box>
    )
}

export default RichText