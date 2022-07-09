import { Box, Center } from '@chakra-ui/react'
import React from 'react'

export const PageWrapper = ({ children }) => {
  return (
    <Center mt="80px">
      <Box minW="350px" maxW="600px" w="100%">
        { children }
      </Box>
    </Center>
  )
}