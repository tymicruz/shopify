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
    Link
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

const Cart = () => {

    const { isCartOpen, removeLineItem, closeCart, checkout } = useContext(ShopContext)

    return (
        <>
            <Drawer
                isOpen={isCartOpen}
                placement='right'
                onClose={closeCart}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>your shopping cart</DrawerHeader>

                    <DrawerBody>

                        {
                            checkout.lineItems?.length ? checkout.lineItems.map((lineItem) => (
                                <Grid templateColumns="repeat(4, 1fr)" gap={1} key={lineItem.id}>
                                    <Flex alignItems="center" justifyContent="center">
                                        <CloseIcon cursor="pointer" onClick={() => removeLineItem(lineItem.id)}></CloseIcon>
                                    </Flex>
                                    <Flex alignItems="center" justifyContent="center">
                                        <Image src={lineItem.variant.image.src} />
                                    </Flex>
                                    <Flex alignItems="center" justifyContent="center">
                                        <Text>{lineItem.title}</Text>
                                    </Flex>
                                    <Flex alignItems="center" justifyContent="center">
                                        <Text>{lineItem.variant.price.amount}</Text>
                                    </Flex>
                                </Grid>
                            )) :
                                <Box h="100%" w="100%">
                                    <Text h="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center">
                                        Your Cart is empty!
                                    </Text>
                                </Box>
                        }
                    </DrawerBody>

                    {
                        checkout.lineItems?.length ?
                            <DrawerFooter>
                                <Button w="100%" colorScheme='green'>
                                    <Link href={checkout.webUrl}>
                                        Checkout
                                    </Link>
                                </Button>
                            </DrawerFooter> : null
                    }
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart