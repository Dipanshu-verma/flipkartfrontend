import React, { useEffect } from "react";
 
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import AddSlide from "./AddSlide";
import { Box } from "@mui/material";
 

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { products } = useSelector((store) => store.allproducts);
    
  return (
    <>
        <Navbar/>
        <Banner/>
       <AddSlide products={products} title=" Deal of the day" tag="Deal of the day"/>
       <Slide products={products} title="Best of Electronics" category="Electronics"/>
       <Slide products={products} title="Trending offers" tag="Top Selling"/>
       <Slide products={products}  title="Sports, Healthcare & more" category="Grocery"/>

       <Slide products={products} title="Suggesting items" tag="Best Seller" />
       <Slide products={products}  title="Fashion Top Deals" category="Fashion" />
      
    </>
  );
};

export default Home;
