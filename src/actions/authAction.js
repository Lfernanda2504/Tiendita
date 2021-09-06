import { types } from '../type/types';
import {facebook, firebase,google} from '../firebase/firebase-config';

export const loginGoogle = () =>{

     return (dispatch) =>{

      firebase.auth().signInWithPopup(google)
         .then(({user}) =>{
             console.log(user);
               dispatch(
                   login(user.uid,user.displayName)
               ) 
         })

     }
}

export const loginFacebook = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(facebook)
      .then(({ user }) => {
        console.log(user);
        dispatch(login(user.uid, user.displayName));
      }).catch((err) => { console.log('error', err); });
  };
};


export const loginEmailPassword = (email,password) =>{
     return (dispatch) =>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user}) =>{
              dispatch(
                  login(user.uid,user.displayName)
              ) 
        })
        .catch(e =>{
            console.log(e);
        })
     }
}

export const registerEmailPassword = (email, pass, name) => {
    return (dispatch) => {
      firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(async ({ user }) => {
          console.log(user);
  
          await user.updateProfile({ displayName: name })
  
          dispatch(
            login(user.uid, user.displayName)
          )
        })
        .catch(e => {
          console.log(e);
        })
    }
  }

export const login = (id,displayName) => {
      return{
          type: types.login,
          payload:{
              id,
              displayName
          }

      }
}

export const logOut = () => async (dispatch)=>{
  await firebase.auth().signOut();
  dispatch(logout());
};


export const logout = () => ({
  type: types.logout
})