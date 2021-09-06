import React, { useEffect, useState } from "react";
//import { useSelector } from 'react-redux';
import axios from "axios";
import {
  Card,
  ContainerProducts,
  Products,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
  H3Title
} from "../styled/CardStyled";



const Product = () => {
  const [despensa, setDespensa] = useState([]);
 // const { products } = useSelector(state => state.products)
  
  useEffect(() => {
    axios.get(`http://localhost:3004/Despensa`).then((res) => {
      const listDespensa = res.data;
      setDespensa(listDespensa);
      console.log(listDespensa);
    });
  }, []);
  return (
    <ContainerProducts>
      <H3Title> Ofertas</H3Title>
      <Products>
        { despensa.map((ele) =>(
        <Card key={ele.id}>
          <CardImg src={ele.imagen} />
          <CardBody>
            <CardText>
              <strong>{ele.peso} </strong>
            </CardText>
            <CardTitle>{ele.nombre}</CardTitle>
          </CardBody>
          <Button>Agregar</Button>
        </Card>
        ))}
      </Products>
    </ContainerProducts>
  );
};

export default Product;
