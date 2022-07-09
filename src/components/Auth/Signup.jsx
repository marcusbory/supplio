import React, { useState } from 'react'
import { PageWrapper } from '../common/PageWrapper'
import { Box, Stack, FormControl, FormLabel, FormHelperText, Input, Button, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import '../../styles/form.css'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export function SignUp() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [cfmPassword, setCfmPassword] = useState('')
  const { signup, loading, setLoading } = useAuth()
  const [error, setError] = useState('')
  let navigate = useNavigate()

  const isError = (input) => {
    return input === ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await signup(name, email, password)
      setTimeout(() => {
        navigate('/home')
      }, 500)
    } catch (error) {
      setError(error.message)
      console.log(error)

    }
  }

  return (
    <PageWrapper>
      SIGN UP
      <Box className="form-box">
        <Stack direction="column">
          {error &&
            <Alert status='error'>
              <AlertIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          }
          <FormControl isInvalid={isError(email)}>
            <FormLabel htmlFor='email'>Email Address</FormLabel>
            <Input required id='email' type='email' placeholder='mayank@suppl.io'
              onChange={(e) => setEmail(e.target.value)} />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl isInvalid={isError(name)}>
            <FormLabel htmlFor='text'>Name</FormLabel>
            <Input required id='name' type='text' placeholder='Mayank'
              onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl isInvalid={isError(password)}>
            <FormLabel htmlFor='text'>Password</FormLabel>
            <Input id='password' type='password' required 
              onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <FormControl isInvalid={isError(cfmPassword)}>
            <FormLabel htmlFor='text'>Confirm Password</FormLabel>
            <Input id='confirm-password' type='password' required 
              onChange={(e) => setCfmPassword(e.target.value)} />
          </FormControl>
          <Button disabled={loading} w="100%" onClick={(e) => handleSubmit(e)}>
            SIGN UP
          </Button>
        </Stack>
      </Box>
    </PageWrapper>
  )
}
