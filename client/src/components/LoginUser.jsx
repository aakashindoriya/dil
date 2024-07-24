import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Spinner, useToast } from '@chakra-ui/react';
import { loginUser } from '../redux/actions/auth.actions';
import { useNavigate } from 'react-router-dom';
const LoginComponent = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const isAuth = useSelector(state => state.auth.isAuthenticated); 
  const isLoading = useSelector(state => state.auth.loading);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {

      await dispatch(loginUser(formData, toast));
    
  };
  useEffect(() => {
    if (isAuth) {
      navigate(-1)
    }
  }, [isAuth, navigate]);
  

  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <FormControl >
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" onChange={handleChange} />
      </FormControl>

      <FormControl mt={4} >
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" onChange={handleChange} />
      </FormControl>

      <Button colorScheme="blue" mt={6} onClick={handleSubmit} isLoading={isLoading}>
        {isLoading ? <Spinner size="sm" /> : 'Login'}
      </Button>
    </Box>
  );
};

export default LoginComponent;
