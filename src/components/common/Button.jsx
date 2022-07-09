import { Button } from "@chakra-ui/react";
import React from "react";

export const PrimaryButton = ({ text, fn, style, disabled=false }) => {
  return (
    <Button
      disabled={disabled}
      style={style}
      rounded={'full'}
      px={6}
      colorScheme={'orange'}
      bg={'orange.400'}
      _hover={{ bg: 'orange.500' }}
      onClick={fn}>
      {text}
    </Button>
  )
}

export const SecondaryButton = ({ text, fn, style, disabled=false }) => {
  return (
    <Button
      disabled={disabled}
      style={style}
      rounded={'full'}
      px={6}
      colorScheme={'orange'}
      bg={'white'}
      color={'orange'}
      border={'orange 2px solid'}
      _hover={{ bg: 'orange.400', color: 'white' }}
      onClick={fn} >
      {text}
    </Button>
  )
}