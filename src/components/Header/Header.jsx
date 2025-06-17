import { Dropdown } from "antd";
import { InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  const items = [
    {
      key: "1",
      label: <Link to={"/auth/register"}>Registration</Link>,
      
    },
    
    
  ];

  return (
    <Navbar expand="lg" className="bg-dark p-3">
      <Container>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <img src="/public/logo.png" alt="logo" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 navbar-item"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex flex-gap-25">
            <div className="input-form">
              <CiSearch className="text-white input-icon" />
              <input type="text" placeholder="Search" className="input-bar" />
            </div>
            <div className="user-icon">
              <Dropdown
                trigger={["click"]}
                placement="bottomRight"
                menu={{
                  items,
                }}
              >
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  <img src="/user.png" alt="user" />
                </Link>
              </Dropdown>
            </div>
            <div className="cart-icon">
              <img src="/cart.png" alt="cart"/>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
