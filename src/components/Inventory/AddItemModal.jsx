import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, 
  ModalFooter, 
  FormControl,
  FormLabel,
  Input} from "@chakra-ui/react";
import React, { useState } from "react";
import { PrimaryButton } from "../common/Button";
import firebase from 'firebase/compat/app'
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const AddItemModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [expiry, setExpiry] = useState('2022-07-10')
  const { currentUser } = useAuth()
  let navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const itemPayload = {
      name,
      amount,
      expiry: firebase.firestore.Timestamp.fromDate(new Date(expiry))
    }
    await db.collection('users').doc(currentUser.email).collection('items').add(itemPayload)
    navigate('/')
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add an item</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={(e) => handleSubmit(e)}>
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="text">Name</FormLabel>
              <Input required id='name' type='name' placeholder='Chicken'
                onChange={(e) => setName(e.target.value)} />
            </FormControl>          
            <FormControl>
              <FormLabel htmlFor="text">Amount</FormLabel>
              <Input required id='amount' type='number' placeholder='100'
                onChange={(e) => setAmount(e.target.value)} />
            </FormControl>          
            <FormControl>
              <FormLabel htmlFor="date">Expiry Date</FormLabel>
              <Input required id='expiry' type='date'
                onChange={(e) => setExpiry(e.target.value)} />
            </FormControl>          
          </ModalBody>
          <ModalFooter>
            <PrimaryButton disabled={name === '' || amount === 0} text={"Add"} fn={handleSubmit} />
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}