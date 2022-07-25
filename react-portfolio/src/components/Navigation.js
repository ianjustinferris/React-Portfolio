import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavTabs({ currentPage, handlePageChange }) {
    return (
        <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Container className="navWrapper">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto justify-content-center align-items-center">
                        <Nav.Link href="#home" onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>

                            Home

                        </Nav.Link>
                        <Nav.Link href="#about" onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>

                            About

                        </Nav.Link>
                        <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>

                            Contact

                        </Nav.Link>
                        <Nav.Link href="#projects" onClick={() => handlePageChange('Projects')}
                            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>

                            Projects

                        </Nav.Link>
                        <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>

                            Resume

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavTabs;
