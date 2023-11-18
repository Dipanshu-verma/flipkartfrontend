import { Box, Grid, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cartitem from "./Cartitem";
import Totalview from "./Totalview";
import EmptyCart from "./EmptyCart";

import { handlepayment } from "../../service/api";
const Cart = () => {
  const { cartitems } = useSelector((state) => state.cart);

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartitems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartitems.map((item) => {
      price += item.price.mrp * item.quantity;
      discount += (item.price.mrp - item.price.cost)*item.quantity
    });
    discount= discount.toFixed(1)
    setPrice(price);
    setDiscount(discount);
  };



  return (
    <>
      {cartitems.length ? (
        <Grid
          container
          paddingY={{ lg: "20px", md: "10px", sm: "10x", xs: "10px" }}
          paddingX={{ lg: "20px", md: "10px", sm: "0px", xs: "0px" }}
        >
          <Grid item lg={8} md={8} sm={12} xs={12} bgcolor="#fff">
            <Box padding="15px 24px">
              <Typography color="green-200">
                My Cart ({cartitems?.length})
              </Typography>
            </Box>
            {cartitems?.map((product) => (
              <Cartitem key={product.id} product={product} />
            ))}
            <Box
              bgcolor="#fff"
              padding="16px 22px"
              boxShadow="0 -2px 10px 0 rgb(0 0 0 / 10%)"
              borderTop="1px solid #f0f0f0"
            >
              <Button
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  backgroundColor: "#fb641b",
                  color: "#fff",
                  width:"250px",
                  height: "51px",
                  borderRadius: "2px",
                }}
                onClick={()=> handlepayment(price-discount+40)}
 
              >
                PLACE ORDER
              </Button>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Totalview cartitems={cartitems} price={price} discount={discount}/>
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
