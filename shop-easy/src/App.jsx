import React from 'react'

import MainPage from './components/mainPage.jsx'

import SignUp from './components/SignUp.jsx'
import SignUpPage from './components/SignUpPage.jsx'

import SignIn from './components/SignIn.jsx'
import SignInPage from './components/SignInPage.jsx'

import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
    </>
  )
}

export default App