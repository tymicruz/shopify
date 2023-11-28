import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Badge, Flex, Icon, Image, Text, Box } from '@chakra-ui/react'
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';


const NavBar = () => {

    const { openMenu, openCart, checkout } = useContext(ShopContext)
    const imageBasePath = window.location.protocol + "//" + window.location.host + "/images/";

    return (
        <Box backgroundColor="#FFA8E2" display="flex" alignItems="center" flexDir="row" justifyContent="space-between" p="2rem">
            <Icon onClick={() => openMenu()} cursor="pointer" fill="white" as={MdMenu} w={40} h={40} />

            <Link to='/'><Image className="rotate-center" src={imageBasePath + "tytylogo.png"} w={40} h={40} /></Link>

            <Flex flexDir="row" alignItems="center">
                <Icon onClick={() => openCart()} cursor="pointer" fill="white" as={MdShoppingCart} w={40} h={40} />
                <Badge backgroundColor="#FF38BD" borderRadius="50%" px="1.3rem" py="1rem" color="white">
                    {checkout.lineItems?.length}
                </Badge>
            </Flex>
        </Box>

    )
}

export default NavBar