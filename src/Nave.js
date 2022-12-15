import React from 'react'
import './mystyle.module.css'; 
import { Button, Navbar ,Nav ,Container ,className, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-scroll';


const Nave = () => {
  return (
    <>
    
      
 <nav>  
    <HashLink className='mohamed-nav'  to={"/#"} >Mohamed</HashLink>
   
  <div className='div-hash'>
  <HashLink to='#Services'>Services</HashLink>
  <HashLink to='#Projects'>projects</HashLink>
  <HashLink to='#Contactt'>Contact</HashLink>
  </div>
 </nav>

 
    </>
  )
}

export default Nave