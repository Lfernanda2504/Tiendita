import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Navbar, Container, Nav, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logOut } from "../actions/authAction";
import { ImgLogo } from "../styled/FooterStyled";
import { useDispatch, useSelector } from "react-redux";
import  { Carts } from "../components/Carts";

const Menu = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <Navbar bg="bg-white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <ImgLogo
              src="https://res.cloudinary.com/academia/image/upload/v1630521453/tienda/logo_c4omdc.png"
              alt="logo"
              className="logo"
              thumbnail
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="text-center" id="basic-navbar-nav ">
            <Nav className="me-auto text-center">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
              <Link className="nav-link" to="/Products">
                Productos
              </Link>
            </Nav>
            <Button
              className="m-3"
              variant="light"
              onClick={() => handleShow()}
            >
              <FiShoppingCart color="#0AC763"/>
              {cart.length}
            </Button>
            <Button variant="danger" onClick={handleLogout}>
              {" "}
              Cerrar sesión
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carts show={show} onHide={() => setShow(false)} />
    </div>
  );
};

export default Menu;
