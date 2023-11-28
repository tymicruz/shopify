import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Box,
    Heading,
    Text,
    Grid,
    Flex,
    Image,
    Link,
    VStack
} from '@chakra-ui/react'


const NavMenu = () => {

    const { isMenuOpen, closeMenu } = useContext(ShopContext);

    return (
        <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement='left' size="sm">
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menuu</DrawerHeader>
                    <DrawerBody>
                        <VStack p="2rem">
                            <Link to="/">About Us</Link>
                            <Link to="/">Learn More</Link>
                            <Link to="/">Sustainability</Link>
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Text w="100%" textAlign="center">
                            Copyright www.cocotuoil.com
                        </Text>
                    </DrawerFooter>
                </DrawerContent>
            </ DrawerOverlay>
        </Drawer >
    )
}

export default NavMenu