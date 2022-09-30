import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
        <Navbar className='mt-5' bg='danger' expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="./components/CardList.js">Yu Gi Oh - Cards</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
    </div>
  )
}
export default Footer;
