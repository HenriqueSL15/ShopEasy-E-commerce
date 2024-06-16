import '../App.css'

import Header from './Header.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Products from './Products.jsx'

function MainPage(){
  return(
    <>
      <Header></Header>
      <About id={'about'}></About>
      <Products id={'products'}></Products>
      <Contact id={'contacts'}></Contact>    
    </>
  )
}

export default MainPage