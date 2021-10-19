import database from '../firebase/firebase-config'
import { types } from '../type/types';

{/*  export const /getProductAll = () => async (dispatch) => {
   db.collection('Despensa').get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const dataDocument = doc.data();
          return { ...dataDocument, id: doc.id };
        });
        console.log(data)
        dispatch({ type: 'getProduct', payload: data });
    });
  };
*/}

const _getProducts = (products)=>({
    type: types.GET_PRODUCTS,
    products
});

export const getProducts = () => {
  return async(dispatch)=> { 
    return database.ref('Product').once('value').then(snapshot => {
          const products = [];

          snapshot.forEach(item => { 
            products.push({
            id: item.key,
            ...item.val()
          });
            
        });

          dispatch(_getProducts(products));
        });
      };
    };

    export const selectedProduct =(product)=>{
        return {
          type: types.SELECT_PRODUCT,
          product,
        }
    }