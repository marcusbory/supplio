import { Box, Flex, Text, useDisclosure} from "@chakra-ui/react";
import React from "react";
import { PageWrapper } from "../common/PageWrapper";
import '../../styles/pages.css'
import { ItemList } from "../Inventory/ItemList";
import { PrimaryButton } from "../common/Button";
import { AddItemModal } from "../Inventory/AddItemModal";

export const UserDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <AddItemModal isOpen={isOpen} onClose={onClose} />

      <PageWrapper>
        <Box className="header">
          <Flex direction="row" justifyContent={'space-between'} alignContent={'center'}>
            <Text>My Dashboard</Text>
            <PrimaryButton text={'Add'} fn={onOpen} />
          </Flex>
        </Box>
        <hr className="header-line"/>
        <ItemList />
      </PageWrapper>
    </>
  )
}