import React from 'react'
import { PageWrapper } from '../common/PageWrapper'
import { Box, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export function Login() {
  const { currentUser } = useAuth()
  console.log(currentUser)
  let navigate = useNavigate()


  return (
    <PageWrapper>
      LOGIN
      <Box>
        <Button onClick={() => navigate("/signup")}>
          CLICK HERE TO SIGN UP
        </Button>
      </Box>
    </PageWrapper>
  )
}
