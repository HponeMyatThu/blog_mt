import { signOut } from 'src/features/Slice/userSlice';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavbarLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/sign-in');
    dispatch(signOut())
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end gap-3'>
          <Nav className='justify-content-end gap-3' activeKey="/home">
            <Nav.Link href="#home" className='border-bottom border-black'>Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Links</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <button className='mx-5 px-3 rounded-3 bg-dark text-white' onClick={(e) => handleClick(e)}>Sign Out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
};

export default NavbarLayout;
