import React, { useEffect, useState } from 'react';
import { Box, Image, Button, Text, Flex, IconButton ,useToast} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cart.action';


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [cartItem,setCartItem]=useState(false)
  const toast = useToast();

  

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: product._id, quantity: 1 }, toast));
  };
useEffect(()=>{
  const val = cartItems.find(item => item?.product?._id === product._id);
  if(val){
    setCartItem(true)
  }
 
},[cartItems])
  

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} maxW="sm"  justifyContent="center" alignItems="center">
      <Image src={product.image} alt={product.name} minW={"100%"}/>
      <Text mt={2} fontSize="xl" fontWeight="semibold" as="h4" lineHeight="tight">
        {product.name}
      </Text>
      <Text>${product.price}</Text>
      <Flex mt={4} align="center">
        {cartItem ? (
          <>
            <Button disabled={true}>Alredy in cart</Button>
          </>
        ) : (
          <Button onClick={handleAddToCart} colorScheme="blue">Add to Cart</Button>
        )}
      </Flex>
    </Box>
  );
};

export default ProductCard;
