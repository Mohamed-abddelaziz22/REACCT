import React from 'react'
import styles from './mystyle.module.css'; 
import Home from './Home'
import Nave from './Nave'
import Projects from './projects'
import Services from './Services'
import Contactt from './Contactt';
import Footer from './Footer';
import dd from './images/img11.png'

import { Link,BrowserRouter, Routes, Route } from 'react-router-dom'



const App = () => {
  
  return (
    <BrowserRouter>


<Nave/>



<Routes>
  <Route path='/' element={<Home/>}/>
 <Route path='/projects' element={<Projects/>}/>
  <Route path='/Services' element={<Services/>}/>
 <Route path='/Contactt' element={<Contactt/>}/>

  
 


</Routes>



    </BrowserRouter>
  )
}

export default App