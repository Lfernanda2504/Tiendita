import { types }from '../type/types'
import Swal from 'sweetalert2'

export const addCart = (product) => {
    Swal.fire({
        title:'Producto añadido',
         icon:'success'});
    
   return {
       type: types.addCart,
       payload : product

   }
}
 
export const removeCart = (product) => {
    Swal.fire({
        title:'Se elimino correctamente',
         icon:'success'});
         
    return {
        type: types.removeCart,
        payload: product
 
    }
 }

 export const clearCart = () => {
    return {
        type: types.clearCart
    }
  }