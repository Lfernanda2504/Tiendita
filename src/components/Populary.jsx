import React, { useEffect, useState } from "react";
import {
  Card,
  ContainerProducts,
  Products,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
  H3Title,
} from "../styled/CardStyled";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productsAction";
import DetailsProduct from '../components/DetailsProduct'
import { addCart } from "../actions/cartAction";

const Populary = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [show, setShow] = useState(false);
  const [selectProduct, setSelectProduct] = useState({});

  //console.log(products)


  useEffect(() => {
    dispatch(getProducts());
  }, []);
  
  const handleClose = () => setShow(false);

  const handleShow = (ele) => {
    setShow(true);
    setSelectProduct(ele.id);
  };

  const fruits = products.filter((fruit) => fruit.category === 'frutasVerduras');
  

  const handleAddCart = (ele) => {
    dispatch(addCart(ele));
    console.log(ele)
  };

  return (
    <ContainerProducts>
      <H3Title>Frutas y verduras</H3Title>
      <Products>
        {fruits.map((ele, index) => (
          <>
            <DetailsProduct
              id={selectProduct}
              show={show}
              element={ele.id}
              onHide={() => setShow(false)}
              handleAddCart={handleAddCart}
              
            />
            <Card key={index}>
              <CardImg src={ele.imagen} onClick={() => handleShow(ele)} />
              <CardBody>
                <CardText>
                  <strong>{ele.peso} </strong>
                </CardText>
                <CardTitle>{ele.nombre}</CardTitle>
              </CardBody>
              <Button onClick={()=> handleAddCart(ele)}>Agregar</Button>
            </Card>
          </>
        ))}
      </Products>
    </ContainerProducts>
  );
};

export default Populary;
