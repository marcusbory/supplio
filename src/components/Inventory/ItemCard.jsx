import React from 'react'
import { Box, Flex, useDisclosure  } from '@chakra-ui/react'
import {EditIcon} from '@chakra-ui/icons'
import '../../styles/component.css'
import { UpdateItemModal } from './UpdateItemModal'

export const ItemCard = ({ item, key }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const expiry = new Date(item.expiry.toDate()).toLocaleDateString('en-SG')
  return (
    <>
    <UpdateItemModal isOpen={isOpen} onClose={onClose} item={item}/>

    <Box key={key} className="item-card">
      <Flex direction="row" justifyContent={'space-between'}>
      <Box>
        {item.name}
      </Box>
      <EditIcon onClick={onOpen} />
      </Flex>
      <hr />
      <Flex dir="row" justifyContent={'space-between'}>
        <Box>Amount: {item.amount}g</Box>
        <Box>Expiry: {expiry}</Box>
      </Flex>
    </Box>
    </>
  )
}