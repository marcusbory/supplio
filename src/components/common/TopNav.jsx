import {
    Box,
    ButtonGroup,
    Flex,
    Heading,
    Spacer,
    useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { PrimaryButton, SecondaryButton } from './Button'

export const TopNav = () => {
  const { currentUser, logout } = useAuth()
  let navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav>
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')} position='fixed' top="0" width="100%">
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box p='3'>
              <Heading size='lg'>SUPPL.IO</Heading>
          </Box>
          <Spacer/>
          { currentUser ? 
            <SecondaryButton text={"Log Out"} fn={handleLogout} style={{ marginRight: '12px' }} /> :
            <ButtonGroup gap='2'>
              <PrimaryButton text={"Sign Up"} fn={() => navigate('/signup')} />
              <SecondaryButton text={"Log In"} fn={() => navigate('/login')} style={{ marginRight: '12px' }}/>
            </ButtonGroup>
          }
        </Flex>
      </Box>
    </nav>
  )
}