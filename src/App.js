import React from "react";
import "./App.css";
//Components
import Header from "./Component/header/Header";
import Home from "./Component/Home/Home";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import DetailView from "./Component/detailspage/DetailView";
import Cart from "./Component/cart/Cart";
import Productspage from "./Component/slideProductPage/Productspage";
import ProductHeader from "./Component/headerProducts/ProductHeader";
import PaymentSuccess from "./Component/cart/paymentverification/PaymentSuccess";
 

function App() {

 
  return (
    <div>
      <Header />
      <Box mt="65px" paddingX="15px">
       <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/productdetail/:id" element={<DetailView/>} />
       <Route path="/slideproducts"  element={<Productspage/>} />
       <Route path="/headerproducts/:category"  element={<ProductHeader/>} />
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
       </Routes>
    
     
      </Box>
    </div>
  );
}

export default App;
