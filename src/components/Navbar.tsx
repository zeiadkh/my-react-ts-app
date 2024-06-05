import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Bnavbar from 'react-bootstrap/Navbar';

function Navbar() {
  return (
    <>
      <Bnavbar bg="primary" data-bs-theme="dark">
        <Container>
          <Bnavbar.Brand href="/">ToDo</Bnavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Bnavbar>
    </>
  );
}

export default Navbar;