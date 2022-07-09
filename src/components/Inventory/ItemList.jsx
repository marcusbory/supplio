import React, { useState, useEffect } from 'react'
import { Box, Alert, AlertIcon, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'
import { ItemCard } from './ItemCard'
import { db } from '../../firebase'

export const ItemList = () => {
  const { currentUser } = useAuth()
  const [items, setItems] = useState([])

  useEffect(() => {
    if (!currentUser) {
      return
    }
    db.collection('users').doc(currentUser.email).collection('items').get().then((docs) => {
      if (docs.docs.length > 0) {
        setItems(
          docs.docs.map(item => ({...item.data(), id: item.id}))
                  .sort((a, b) => (a.expiry - b.expiry))
        )
      }
    })
  }, [currentUser])

  return (
    <Box>
      {items.length === 0 &&
        <Alert status='info'>
          <AlertIcon />
          Seems like you do not have any food items...
        </Alert>
      }
      {items.length > 0 && items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </Box>
  )
}