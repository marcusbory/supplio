import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext';
import { SignUp } from './Auth/Signup';
import { HomePage } from './Pages/HomePage';
import { Login } from './Auth/Login';
import { TopNav } from './common/TopNav'
import '../styles/index.css'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AuthProvider>
          <TopNav />
          <Switch>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/home" element={<PrivateRoute component={<HomePage />} />} /> */}
            <Route exact path="/" element={<HomePage />} />
          </Switch>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
