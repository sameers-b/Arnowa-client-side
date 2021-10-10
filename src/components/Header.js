import React,{useEffect} from 'react'
import {Navbar, Nav} from 'react-bootstrap'

const Header = ({history}) => {
   const name = localStorage.getItem("name")
   useEffect(()=>{},[name])

   const logoutHandler = () =>{
      localStorage.removeItem("name");
      localStorage.removeItem("html");
      localStorage.removeItem("css");
      localStorage.removeItem("javaScript");
      window.location.reload();
   }
   return (
      <>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Arnowa</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
     <Nav>
            {name ? (
              <>
              <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
              </>
            ) : (
              <>
              <Nav.Link href="/">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </>
   )
}

export default Header
