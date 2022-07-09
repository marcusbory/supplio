import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, 
    ModalFooter, 
    FormControl,
    FormLabel,
    Input} from "@chakra-ui/react";
  import React, { useState } from "react";
  import { PrimaryButton } from "../common/Button";
  import firebase from 'firebase/compat/app'
  import { db } from "../../firebase";
  import {doc, updateDoc} from "firebase/firestore";
  import { useAuth } from "../../contexts/AuthContext";
  import { useNavigate } from "react-router-dom";
  
  export const UpdateItemModal = ({ isOpen, onClose, item}) => {
    const [name, setName] = useState(item.name);
    const [amount, setAmount] = useState(item.amount)
    const [expiry, setExpiry] = useState(item.expiry)
    const [id, setId] = useState(item.id)
    const { currentUser } = useAuth()
    let navigate = useNavigate()
  
    const handleSubmit = async(e) => {
      e.preventDefault()
      const itemPayload = {
        name,
        amount,
        expiry: firebase.firestore.Timestamp.fromDate(new Date(expiry))
      }
    const ref = doc(db.collection('users').doc(currentUser.email), "items", id)
    await updateDoc(ref, itemPayload)
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
                <Input required id='name' type='name' placeholder={name}
                  onChange={(e) => setName(e.target.value)} />
              </FormControl>          
              <FormControl>
                <FormLabel htmlFor="text">Amount</FormLabel>
                <Input required id='amount' type='number' placeholder={amount}
                  onChange={(e) => setAmount(e.target.value)} />
              </FormControl>          
              <FormControl>
                <FormLabel htmlFor="date">Expiry Date</FormLabel>
                <Input required id='expiry' type='date' placeholder={item.expiry}
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