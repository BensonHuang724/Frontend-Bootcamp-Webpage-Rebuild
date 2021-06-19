import {  Navbar,Nav,Container} from 'react-bootstrap';

const NavbarCustomize = () => {
    return  <Navbar bg="dark" variant='dark' expand="lg" fixed='top' className='py-3'>
                <Container >
                  <Navbar.Brand href="#home" >Frontend BootCamp</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto" >
                      <Nav.Link href="#learn" className='mr-auto' style={{transitionDuration:'1s'}}>What You'll Learn</Nav.Link>
                      <Nav.Link href="#questions" className='mr-auto'>Questions</Nav.Link>
                      <Nav.Link href="#instructors" className='mr-auto'>Instructors</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
}

export default NavbarCustomize;