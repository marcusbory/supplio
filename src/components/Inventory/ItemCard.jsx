import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import '../../styles/component.css'

export const ItemCard = ({ item, key }) => {
  const expiry = new Date(item.expiry.toDate()).toLocaleDateString('en-SG')
  return (
    <Box key={key} className="item-card">
      <Box>
        {item.name}
      </Box>
      <hr />
      <Flex dir="row" justifyContent={'space-between'}>
        <Box>Amount: {item.amount}g</Box>
        <Box>Expiry: {expiry}</Box>
      </Flex>
    </Box>
  )
}