import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export function PrivateRoute({ component }) {
  const { currentUser } = useAuth()

  if (!currentUser) {
    return (
      <Navigate to="/" />
    )
  }

  return (
    <>
      {component}
    </>
  )
}
