import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Nave from './Nave'
import { Link } from 'react-router-dom'
import { Row ,Container,Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import backk from './images/img11.png'
import Services from './Services'
import Projects from './projects'
import Contact from './Contactt'
import Footer from './Footer'



const Home = () => {
  return (
    <>
    
    <main id='/'>
      <Container className='main-all '>
        <Row>
          <Col lg={7} md={5} sm={5} xs={4} className='allll'>

            <p>Hello I am Mohamed Abd El Aziz</p>
            <h1> I'm Designing a Front End</h1>
            <button><HashLink to={'#Projects'}>View my work</HashLink></button>
            <div>
            <a href='https://www.facebook.com/med.oo.3956/'><i class="fa-brands fa-facebook-f"></i></a>
            <a href='#'><i class="fa-brands fa-github"></i></a> 
            <a href='#'><i class="fa-brands fa-square-instagram"></i></a> 
           
            
            </div>

          </Col>




          <Col lg={5} md={7} sm={7} xs={8} >



          <div className='nono'>
   
      
        <img className='img-mm' src={backk} alt=''/>
       </div>


          </Col>




        </Row>


      </Container>
       </main>
   
       <Services/>
       <Projects/>
       <Contact/>
       <Footer/>

      
        
    </>
  )
}

export default Home