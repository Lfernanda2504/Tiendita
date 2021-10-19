import React, { useEffect, useState } from "react";
import { Container, Modal, Row, Col, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Button, SelectMadurez } from "../styled/CardStyled";
import { FiPlus, FiMinus, FiCheck } from "react-icons/fi";
import { addCart } from "../actions/cartAction";

const DetailsProduct = (props) => {
  const { products } = useSelector((state) => state.products);
  const [selectProduct, setSelectProduct] = useState({});
  const [cantidad, setCantidad] = useState(1)
  const dispatch = useDispatch();
  useEffect(() => {
    setSelectProduct(products.find((product) => product.id === props.id));
  }, [products, props.id]);

  const { handleAddCart } = props;

  const handleCantidad = (type) => {
    if (type === "dec") {
     cantidad > 1 && setCantidad(cantidad - 1)
    } else {
      setCantidad(cantidad + 1)
    }
  }


  const selcM = selectProduct?.madurez;

  return (
    <Container>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectProduct && (
            <Row className="justify-content-center align-items-center">
              <Col md={6} xs={12}>
                <img
                  src={selectProduct.imagen}
                  alt={selectProduct.nombre}
                  className="img-fluid mx-auto d-block"
                />
              </Col>
              <Col md={6} xs={12}>
                <h4>{selectProduct.nombre}</h4>
                <h6>${selectProduct.precio}</h6>
                <p>{selectProduct.descripcion}</p>
                {selcM ? (
                  <SelectMadurez>
                    Selecciona la madurez que deseas
                    <option>Por elegir</option>
                    {selectProduct.madurez?.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m}
                      </option>
                    ))}
                  </SelectMadurez>
                ) : (
                  ""
                )}
              </Col>
              <Row>
                <Col>
                  <FiMinus onClick={() => handleCantidad("dec")} />
                  {cantidad}
                  <FiPlus onClick={() => handleCantidad("inc")} />
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    onClick={() => handleAddCart(selectProduct)}
                  >
                    Agregar
                  </Button>
                </Col>
              </Row>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DetailsProduct;
