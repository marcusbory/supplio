import React, { useState } from 'react'
import { PageWrapper } from '../common/PageWrapper'
import { Box, Stack, FormControl, FormLabel, FormHelperText, Input, Button, Alert, AlertIcon, AlertTitle, Center } from '@chakra-ui/react'
import '../../styles/form.css'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate, Navigate } from 'react-router-dom'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, loading, setLoading, currentUser } = useAuth()
  const [error, setError] = useState('')
  let navigate = useNavigate()

  const isError = (input) => {
    return input === ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
      // setTimeout(() => {
      //   navigate('/home')
      // }, 500)
    } catch (error) {
      setError(error.message)
    }
  }

  if (currentUser) {
    return <Navigate to="/home" />
  }

  return (
    <PageWrapper>
      LOGIN
      <Box className="form-box">
        <Stack direction="column">
          {error &&
            <Alert status='error'>
              <AlertIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          }
          <form onSubmit={(e) => handleSubmit(e)}>
            <FormControl isInvalid={isError(email)}>
              <FormLabel htmlFor='email'>Email Address</FormLabel>
              <Input required id='email' type='email' placeholder='mayank@suppl.io'
                onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl isInvalid={isError(password)}>
              <FormLabel htmlFor='text'>Password</FormLabel>
              <Input id='password' type='password' required 
                onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button disabled={loading} w="100%" type="submit" mt="12px">
              SIGN IN
            </Button>
          </form>
        </Stack>
      </Box>
      <Center mt="12px">
        <Box>
          <Button onClick={() => navigate("/signup")}>
            CLICK HERE TO SIGN UP
          </Button>
        </Box>
      </Center>
    </PageWrapper>
  )
}
