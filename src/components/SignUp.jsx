import '../App.css'

import Header from './Header.jsx'
import Contact from './Contact.jsx'
import SignUpPage from './SignUpPage.jsx'

function SignUp(){
  return(
    <>
      <Header></Header>
        <SignUpPage></SignUpPage>
      <Contact></Contact>
    </>
  )
}

export default SignUp;