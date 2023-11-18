import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineStar } from "react-icons/ai";


import Sortbar from "./Sortbar";
import Leftbar from "./Leftbar";
import { useNavigate } from "react-router-dom";
let assured =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

const Productspage = () => {
   const navigate=   useNavigate();
  const { products } = useSelector((state) => state.allproducts);

  let tag  =  localStorage.getItem("tag");
  let category  =  localStorage.getItem("category");

  const [productsData, setproductData]  = useState(products);
 
  useEffect(()=>{
 
  const filteredData  =  products.filter((elm)=> elm.category === category || elm.tagline === tag) 
    setproductData(filteredData)
    },[products])

    function handlesort(sortquery) {

      if(sortquery === "Popularity"){

       const sortedData = productsData.filter((elm) => elm.rating >=4)
       if(sortedData.length>0){
        setproductData(sortedData)
       }else{
        setproductData(productsData);
       }

      
   
      }else if(sortquery === "Price -- Low to High"){
       const sortedData = [...productsData].sort((a,b) => a.price.mrp - b.price.mrp)
     
       setproductData(sortedData)
      
      }else if(sortquery === "Price -- High to Low"){
       const sortedData = [...productsData].sort((a,b) => b.price.mrp - a.price.mrp)
      
       setproductData(sortedData)
      
      }else if(sortquery === "Newest First"){


       const sortedData = productsData.filter((elm) => elm.rating <= 2)
      
       if(sortedData.length>0){
        setproductData(sortedData)
       }else{
        setproductData(productsData);
       }
       
       
      }

   
 }
  

  return (
    <Box margin="75px 0" width="100%" display="flex" gap="10px">

    <Leftbar productsData={productsData} setproductData={setproductData} products={products} category={category} tag={tag}/>

      <Box bgcolor="#fff" width="100%" padding=".5rem .3rem">
        <Sortbar handlesort={handlesort}/>
   {
    productsData.length==0 ? <img src="https://jalongi.com/public/assets/images/product_not_found.jpeg" alt=""   style={{width:"40%",marginLeft:"30%", marginTop:"10vh" }} /> :<Box paddingLeft=".5rem">
          <Grid container width="100%" mt="1rem" boxSizing="border-box">
            {productsData?.map((elm) => (
              <>
                <Grid xs={12} sm={6} md={3} lg={3} key={elm.id}>
                  <Box
                    padding="5px"
                    height="43vh"
                    margin="5px"
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    style={{cursor:"poniter"}}
                    onClick={()=> navigate(`/productdetail/${elm.id}`)}
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
              </>
            ))}
          </Grid>
        </Box>
   }
        
      </Box>
    </Box>
  );
};

export default Productspage;
