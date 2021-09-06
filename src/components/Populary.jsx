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

const   Populary = () => {
    const [fruits, setfruits] = useState([]);
 // const { products } = useSelector(state => state.products)
  
  useEffect(() => {
    axios.get(`http://localhost:3004/frutas_verduras`).then((res) => {
      const listFruits= res.data;
      setfruits(listFruits);
      console.log(listFruits);
    });
  }, []);
    return (
    <ContainerProducts>
      <H3Title> Mas Populares</H3Title>
      <Products>
        { fruits.map((ele) =>(
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
    )
}

export default Populary



