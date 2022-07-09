import { Box } from "@chakra-ui/react";
import React from "react";
import { PageWrapper } from "../common/PageWrapper";
import '../../styles/pages.css'
import { ItemList } from "../Inventory/ItemList";

export const UserDashboard = () => {

  return (
    <PageWrapper>
      <Box className="header">
        My Dashboard
      </Box>
      <hr className="header-line"/>
      <ItemList />
    </PageWrapper>
  )
}