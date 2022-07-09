import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Spacer,
    useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export const TopNav = () => {
  const { currentUser, logout } = useAuth()
  let navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav>
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box p='3'>
              <Heading size='lg'>SUPPL.IO</Heading>
          </Box>
          <Spacer/>
          { currentUser ? 
            <Button
              rounded={'full'}
              px={6}
              mr={4}
              colorScheme={'orange'}
              bg={'white'}
              color={'orange'}
              border={'orange 2px solid'}
              _hover={{ bg: 'orange.400', color: 'white' }}
              onClick={handleLogout}>
              Log Out
            </Button> :
            <ButtonGroup gap='2'>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'orange'}
                bg={'orange.400'}
                _hover={{ bg: 'orange.500' }}
                onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
              <Button
                rounded={'full'}
                px={6}
                mr={4}
                colorScheme={'orange'}
                bg={'white'}
                color={'orange'}
                border={'orange 2px solid'}
                _hover={{ bg: 'orange.400', color: 'white' }}
                onClick={() => navigate("/login")}>
                Log In
              </Button>
            </ButtonGroup>
          }
        </Flex>
      </Box>
    </nav>
  )
}