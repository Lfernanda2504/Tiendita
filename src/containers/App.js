import React from 'react';
import Banner from '../components/Banner';
import Populary from '../components/Populary';
import Product from './Product';
{/*import Dashboard from '../Admin/Dashboard';*/}




function App() {
  return (
    <div>
      <Banner />
      <Product />
      <Populary/> 
     {/* <Dashboard /> */}
    </div>
  );
}

export default App;
