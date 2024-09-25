import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://media.istockphoto.com/id/1267947017/vector/quotation-status-icon-vector-graphics.jpg?s=612x612&w=0&k=20&c=qefzpiOrqwnWlMucNnkwva_y-fqj2zxDEPNw8DNS5r8="
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
              
            />{' '}
            <span style={{color:'white'}}>Quotes Generator</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      </>
  )
}

export default Header