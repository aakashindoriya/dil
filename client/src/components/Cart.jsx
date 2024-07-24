import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Text, Flex, IconButton, useToast, Spinner, Skeleton } from '@chakra-ui/react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { getCart,  deleteItem } from '../redux/actions/cart.action';
import { checkoutHandler } from '../redux/actions/payment.action';

const Cart = () => {
  const dispatch = useDispatch();
  const auth=useSelector(state=>state.auth.isAuthenticated)
  const { items, loading, error } = useSelector(state => state.cart);
  const toast = useToast();
   console.log(items)
  useEffect(() => {
    
    if(auth){
        dispatch(getCart(toast));
    }
  }, [auth]);

  

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id, toast));
  };

  if (loading) {
    return (
      <Box p={5}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  return (
    <Box>
      {items.length === 0 ? (
        <Text>No items in cart</Text>
      ) : (
        items.map(item => (
          <Flex key={item._id} align="center" justify="space-between" p={5} borderWidth="1px" borderRadius="lg" mb={4}>
            <Text>{item.product.name}</Text>
            <Button colorScheme="red" onClick={() => handleDeleteItem(item.product._id)}><FaTrash /></Button>
          </Flex>
        ))
      )}
      <Flex align="center" justify="space-between" p={5} mt={5}>
        <Text>Total: ${items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)}</Text>
        <Button colorScheme="blue" disabled={items.length === 0} onClick={checkoutHandler}>Checkout</Button>
      </Flex>
    </Box>
  );
};

export default Cart;
