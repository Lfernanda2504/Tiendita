import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
//import Populary from '../components/Populary'
//import axios from "axios";
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

import DetailsProduct from '../components/DetailsProduct'
import { useDispatch } from "react-redux";
import { getProducts } from "../actions/productsAction";
import { addCart } from "../actions/cartAction";




const Product = (props) => {
  //const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);
  const [selectP, setSelectP] = useState({});
  const dispatch = useDispatch()
 
  const { products } = useSelector(state => state.products)
  //console.log(products)
  
  const handleAddCart = (ele) => {
    dispatch(addCart(ele));
    console.log(ele)
  };

  {
    /* <Dashboard /> useEffect(() => {
    axios.get(`http://localhost:3004/Despensa`).then((res) => {
      const listDespensa = res.data;
      setDespensa(listDespensa);
      console.log(listDespensa);
    });
  }, []);


  useEffect(()=>{
    const data = firebase.database().ref('Product');
    data.once('Product', (snapshot) =>{
      const all = snapshot.val();
      const product = [];
      for (let id in all){
        product.push({ id, ...all[id]});
      }
      setProduct(product);
    });
  }, []);
  

  useEffect(() => {
    db.collection("Product")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
        });
      });
  }, []);
   
  useEffect(()=>{
   firebase.database().ref('Product').once('value', (snapshot) =>{
      const all = snapshot.val();
      const product = [];
      for (let id in all){
        product.push({ id, ...all[id]});
      }
      setProduct(product) 
      
    });
  }, []);
 */
  }
 
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const handleClose = () => setShow(false);

  const handleShow = (ele) =>{
    setShow(true);
    setSelectP(ele.id) 
    console.log(selectP)
    }
    
   const despensa =products.filter((d) => d.category === 'despensa');
 
  return (
    <ContainerProducts>
      <H3Title> Despensa</H3Title>
      <Products>
        {despensa.map((ele, index) => (
          <>
            <DetailsProduct
              id={selectP}
              show={show}
              key={ele.id}
              onHide={() =>setShow(false)}
              handleAddCart={handleAddCart}
            />
            <Card key={index}> 
            
                <CardImg src={ele.imagen} onClick={() => handleShow(ele)}/>
                  
              <CardBody>
                <CardText>
                  <strong>{ele.peso} </strong>
                </CardText>
                <CardTitle>{ele.nombre}</CardTitle>
              </CardBody>
              <Button onClick={()=>handleAddCart(ele)}>Agregar </Button>
            </Card>
          </>
        ))}
      </Products>
    </ContainerProducts>
  );
};

export default Product;
