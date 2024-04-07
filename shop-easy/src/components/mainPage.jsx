import '../App.css'

import Header from './Header.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Products from './Products.jsx'

function MainPage(){
  return(
    <>
      <Header></Header>
      <About></About>
      <Products></Products>
      <Contact></Contact>
    </>
  )
}

export default MainPage