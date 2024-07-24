import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, FormControl, FormLabel, Input, Spinner, useToast } from '@chakra-ui/react';
import { register } from '../redux/actions/auth.actions';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const isLoading = useSelector(state => state.auth.loading);
  const isAuth = useSelector(state => state.auth.isAuthenticated); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuth) {
      navigate(-1)
    }
  }, [isAuth, navigate]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await dispatch(register(formData, toast));
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <FormControl mt={4}>
        <FormLabel>Name</FormLabel>
        <Input name="name" onChange={handleChange} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" onChange={handleChange} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" onChange={handleChange} />
      </FormControl>
      <Button colorScheme="blue" mt={6} onClick={handleSubmit} isLoading={isLoading}>
        {isLoading ? <Spinner size="sm" /> : 'Register'}
      </Button>
    </Box>
  );
};

export default RegisterUser;
