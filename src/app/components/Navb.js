import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// Este componente se maqueto para la parte de la barra de navegación de igual manera con react-bootstrap

function Navb() {
  return (
    <Navbar bg='danger' expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="./components/CardList.js">Yu Gi Oh - Cards</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}
export default Navb;
