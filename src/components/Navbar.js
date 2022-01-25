import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import menu from '../icons/menu.png'

const Navbar = () => {

  const Navdiv = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-start;
background-color: rgb(200,200,200)
`
// const Menuicon = styled.img`
// max-height: 100%
// max-width: 100%
// `

  return (
  <Navdiv>
    {/* <div style={{marginLeft: "-7%"}}>
      <img style={{height: "50px", width: "50px", objectFit: "contain"}} src={menu}/>
    </div> */}
    <p>
      <Link to="/" style={{cursor: "pointer", color: "red", textDecoration: "none"}}>Home</Link>
    </p>
    <p>
      <Link to="/services" style={{cursor: "pointer", color: "red", textDecoration: "none"}}>Services</Link>
    </p>
    <p>
      <Link to="contact" style={{cursor: "pointer", color: "red", textDecoration: "none"}}>Contact</Link>
    </p>
    <p>
      <a href="https://phorest.com/book/salons/pureblisssalonspa">Book Appointment</a>
    </p>
  </Navdiv>
  )
}

export default Navbar;