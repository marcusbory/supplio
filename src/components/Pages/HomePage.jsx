import React from "react"
import { PageWrapper } from "../common/PageWrapper"
import { Navigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export const HomePage = () => {
  const { currentUser } = useAuth()

  // if (!currentUser) {
  //   return <Navigate to="/" />
  // }

  return (
    <PageWrapper>
      HOME
    </PageWrapper>
  )
}
