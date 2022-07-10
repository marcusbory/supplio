import React from 'react'
import { Box, Flex, HStack, useDisclosure  } from '@chakra-ui/react'
import {EditIcon, DeleteIcon} from '@chakra-ui/icons'
import '../../styles/component.css'
import { UpdateItemModal } from './UpdateItemModal'
import { db } from "../../firebase";
import {doc, updateDoc, deleteDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const ItemCard = ({ item, key }) => {
  let navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { currentUser } = useAuth()
  const expiry = new Date(item.expiry.toDate()).toLocaleDateString('en-SG')

  const deleteItem = async(e) => {
    e.preventDefault()
    const ref = doc(db.collection('users').doc(currentUser.email), "items", item.id)
    await deleteDoc(ref)
    navigate(0)
  }

  return (
    <>
    <UpdateItemModal isOpen={isOpen} onClose={onClose} item={item}/>

    <Box key={key} className="item-card">
      <Flex direction="row" justifyContent={'space-between'}>
      <Box>
        {item.name}
      </Box>
      <HStack>
      <EditIcon onClick={onOpen} />
      <DeleteIcon onClick={deleteItem}/>
      </HStack>
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