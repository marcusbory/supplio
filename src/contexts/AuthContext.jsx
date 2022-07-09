import React, { useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import firebase from 'firebase/compat/app'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const signup = async (name, email, password) => {
    const newUser = {
      name,
      email,
      joinDate: firebase.firestore.FieldValue.serverTimestamp(),
    }
    await db.collection('users').doc(email).get().then((doc) => {
      if (!doc.exists) {
        db.collection('users').doc(email).set(newUser)
      }
    })
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const login = async (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => {
    setCurrentUser(null)
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    loading,
    setLoading, 
    login,
    logout,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
