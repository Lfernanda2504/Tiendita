import React,{useState} from 'react'
import { Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Button, CardImg, CardTitle } from "../styled/CardStyled";
import { FiPlus, FiMinus, FiTrash } from "react-icons/fi";
import { removeCart } from '../actions/cartAction';
import { Link } from 'react-router-dom';



export const Carts = (props) => {
  const {cart} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const cartItems = cart.length;
  console.log(cart)


  function getTotal() {
    let totalProducts = 0;
    cart.forEach(item => {
      totalProducts = totalProducts + item.precio;
    });
    return totalProducts;
  }

  const handleRemoveCart = (item) => {
    dispatch(removeCart(item));
    
  };

  

 

  return (
    <div>

      <Modal
        {...props}
      >
        <Modal.Header closeButton>
          <Modal.Title>Bolsa({cartItems})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems > 0 ? (
            cart.map((item) => (
              <div className="cart-item">
                <Row>
                  <Col> <CardImg src={item.imagen}></CardImg></Col>
                  <Col><h6 key={item.id}>{item.nombre}</h6>
                    <CardTitle> ${item.precio}</CardTitle></Col>
                  <Col><FiPlus />{item.cantidad}<FiMinus /></Col>
                  {item.cantidad > 0? (
                  <Col><FiTrash onClick={() => handleRemoveCart(item)} /></Col>
                ) : (
                  ""
                )} 
                </Row>
              </div>
            ))) : (
            <div className="cart-empty">Su bolsa esta vacia!</div>)}
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col className="tex-justify"><strong>Total: $ {getTotal()}</strong></Col>
            <Col><Link to='/Checkout'> <Button variant="primary">({cartItems}) Ir a pagar</Button></Link></Col>
          </Row>
        </Modal.Footer>
      </Modal>


    </div>
  )
}
