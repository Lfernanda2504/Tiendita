import React, { useEffect, useState } from 'react';
import {firebase} from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter,
    Switch,
    Redirect,
} from "react-router-dom";
import  App from '../containers/App';
import  Product  from '../containers/Product.jsx';
import { login } from '../actions/authAction';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRoute';
import { Spinner } from 'react-bootstrap';

const AppRouter = () => {
    const dispatch = useDispatch();
    const [cheking, setCheking] = useState(true);
    const [isLooggedIn, setIsLooggedIn] = useState(false);
  
    useEffect(() => {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user?.uid) {
          dispatch(login(user.uid, user.displayName));
          setIsLooggedIn(true);
        } else {
          setIsLooggedIn(false);
        }
        setCheking(false);
      });
    }, [dispatch, setCheking]);
  
    if (cheking) {
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden"> Loading...</span>
        </Spinner>
      );
    }
    return (
        <BrowserRouter>
      <Switch>
        <PublicRoute
          path='/auth'
          component={AuthRouter}
          isAuthenticated={isLooggedIn}
        />

        <PrivateRoute
          exact
          path='/'
          component={App}
          isAuthenticated={isLooggedIn}
        />

        <PrivateRoute
          exact
          path='/Products'
          component={Product}
          isAuthenticated={isLooggedIn}
        />

        

        <Redirect to='/auth/login' />
      </Switch>
    </BrowserRouter>
    )
}

export default AppRouter;