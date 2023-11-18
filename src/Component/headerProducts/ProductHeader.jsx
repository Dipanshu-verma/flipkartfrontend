import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineStar } from "react-icons/ai";

import Sortbar from "../slideProductPage/Sortbar";
import Leftbar from "../slideProductPage/Leftbar";
import { useNavigate, useParams } from "react-router-dom";
import {
  filterbyratingHeaderProducts,
  getProductsByCategory,
  sortHeaderProducts,
} from "../../redux/actions/productAction";
import SkeletonLoader from "../SkeletonLoader";
let assured =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

const ProductHeader = () => {
  const navigate = useNavigate();

  const { category } = useParams();
 
  const dispatch = useDispatch();
  const { categoryProducts, error,loading } = useSelector(
    (state) => state.categoryproducts
  );
  const [productsData, setproductData] = useState(categoryProducts);

 
  

  useEffect(() => {
    getProducts();
  }, [category]);


  useEffect(() => {
    setproductData(categoryProducts);
  }, [categoryProducts]);

  

  async function getProducts() {
    if (category === "Home & Furniture") {
      await dispatch(getProductsByCategory("Home"));
    } else if (category === "Beauty, Toys & More") {
      await dispatch(getProductsByCategory("BeautyToys"));
    } else if (category === "Two Wheelers") {
      await dispatch(getProductsByCategory("TwoWheelers"));
    } else {
      await dispatch(getProductsByCategory(category));
    }
  }


  function handlesort(sortquery) {
    if (sortquery === "Popularity") {
     dispatch(filterbyratingHeaderProducts(category))
    } else if (sortquery === "Price -- Low to High") {
      dispatch(sortHeaderProducts("price", "asc", category));
    } else if (sortquery === "Price -- High to Low") {
      dispatch(sortHeaderProducts("price", "desc", category));
    } else if (sortquery === "Newest First") {
      dispatch(sortHeaderProducts("rating", "asc", category));
    }
  }
 

  return (
    <Box margin="75px 0" width="100%" display="flex" gap="10px">
      <Leftbar
        productsData={productsData}
        setproductData={setproductData}
        products={categoryProducts}
        productheader
        category={category}
      />

     
      <Box bgcolor="#fff" width="100%" padding=".5rem .3rem">
        <Sortbar handlesort={handlesort} />
  {
    productsData.length==0 && !loading ? <img src="https://jalongi.com/public/assets/images/product_not_found.jpeg" alt=""   style={{width:"40%",marginLeft:"30%", marginTop:"10vh" }} /> : <Box paddingLeft=".5rem">
          <Grid container width="100%" mt="1rem" boxSizing="border-box">
            { 
              loading?<SkeletonLoader/>: 
              
              
              productsData?.map((elm) => (
           
                <Grid item xs={12} sm={6} md={3} lg={3} key={elm.id}>
                  <Box
                    padding="5px"
                    height="43vh"
                    margin="5px"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    style={{ cursor: "poniter" }}
                    onClick={() => navigate(`/productdetail/${elm.id}`)}
                  >
                    <Box height="60%" position="relative">
                      <img
                        src={elm.url}
                        alt=""
                        width="100%"
                        height="100%"
                        style={{ objectFit: "contain" }}
                      />
                      {elm.tagline === "Best Seller" && (
                        <Typography
                          component="span"
                          position="absolute"
                          padding="2px 4px"
                          bgcolor="green"
                          color="#fff"
                          top="0"
                          left="0"
                          fontWeight="600"
                        >
                          {elm.tagline}
                        </Typography>
                      )}
                    </Box>
                    <Box
                      padding="2px 5px"
                      position="relative"
                      height="37%"
                      boxSizing="border-box"
                      mt=".5rem"
                    >
                      <Typography
                        component="span"
                        position="absolute"
                        paddingX="3px"
                        fontSize="12px"
                        bgcolor="green"
                        color="#fff"
                        bottom=".5rem"
                        right="0"
                        display="flex"
                        borderRadius="3px"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {" "}
                        {elm.rating} <AiOutlineStar />{" "}
                      </Typography>
                      <Typography>
                        {elm.title.shortTitle.length > 12
                          ? elm.title.shortTitle.substring(0, 12) + "..."
                          : elm.title.shortTitle}
                        <img
                          src={assured}
                          alt=""
                          width="60px"
                          style={{ marginLeft: "10px", marginTop: "5px" }}
                        />
                      </Typography>
                      <Typography>
                        <Box component="span" fontSize="17px" fontWeight="600">
                          ₹{elm.price?.cost}
                        </Box>{" "}
                        &nbsp;
                        <Box component="span" fontSize="14px" color="#878787">
                          {" "}
                          <strike>₹{elm.price?.mrp}</strike>
                        </Box>
                        &nbsp;
                        <Box component="span" fontSize="14px" color="#32ab37">
                          {elm.price?.discount} off
                        </Box>
                      </Typography>

                      {elm.size?.length > 1 && (
                        <Typography>
                          {" "}
                          Size:{" "}
                          {elm.size.map((size) => (
                            <span>{size}, </span>
                          ))}{" "}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Grid>
          
            ))
            
            }


          </Grid>
        </Box>
  }
        
      </Box>

     

      


    </Box>
  );
};

export default ProductHeader;
