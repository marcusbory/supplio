import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import { PageWrapper } from './common/PageWrapper';
import { AuthProvider } from '../contexts/AuthContext';
import { PrivateRoute } from './Auth/PrivateRoute';
import { SignUp } from './Auth/Signup';
import { HomePage } from './Pages/HomePage';
import { Login } from './Auth/Login';

function App() {
  return (
    <ChakraProvider>
      <PageWrapper>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/signup" element={<SignUp />} />
              {/* <Route path="/home" element={<PrivateRoute component={<HomePage />} />} /> */}
              <Route path="/home" element={<HomePage />} />
              <Route exact path="/" element={<Login />} />
            </Switch>
          </AuthProvider>
        </Router>
      </PageWrapper>
    </ChakraProvider>
  );
}

export default App;
