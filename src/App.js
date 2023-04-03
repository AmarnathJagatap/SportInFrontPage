import React from 'react';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Main from './Main';
import CarRacing from './Products/Pages/CarRacing';
import BikeRacing from './Products/Pages/BikeRacing';
import ProductDetail from './Products/Pages/ProductDetail';


export default function App() {
  return (
    <div>
   
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}>
            </Route>
            <Route path="/carracing" element={<CarRacing/>}>
            </Route>
            <Route path="/bikeracing" element={<BikeRacing/>}>
            </Route> 
            <Route path="/productdetail" element={<ProductDetail/>}>
            </Route>           
          </Routes>
      </BrowserRouter>

    </div>
  );
}

