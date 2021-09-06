import {firebase , db} from '../firebase/firebase-config'

export const getProductAll = () => async (dispatch) => {
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


