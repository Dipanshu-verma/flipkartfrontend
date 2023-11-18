import { Box, IconButton, Snackbar, styled } from "@mui/material";
import React, { Fragment, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import Button from '@mui/material/Button';
 
 
import CloseIcon from '@mui/icons-material/Close';

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 60px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px 10px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "46%",
  height: 50,
  borderRadius: "2px",
  [theme.breakpoints.down("md")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "46%",
  },
}));

const ActionItem = ({ product }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  function addItemToCart() {
    const savedCart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
      const exist  =  savedCart.find((elm)=> elm.id ===product.id)
  if(!exist){
  savedCart.push(product);
  localStorage.setItem("cart", JSON.stringify(savedCart));
  dispatch(addToCart(product));
  setOpen(true)
 

}
 
  
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <Fragment>
      
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );
  return (
    <LeftContainer>
      <img
        src={product?.detailUrl}
        alt=""
        padding="15px 20px"
   
        width="330px"
        height="400px"
        
      />
      <StyledButton
        variant="contained"
        sx={{ marginRight: "10px", backgroundColor: "#ff9f00" }}
        onClick={addItemToCart}
      >
        {" "}
        <ShoppingCartIcon /> Add to cart
      </StyledButton>
      <Snackbar
        open={open}
        anchorOrigin={{  vertical: 'top',
         horizontal: 'center',}}
        autoHideDuration={2000}
        onClose={handleClose}
        style={{width:"40%",}}
        message={`item ${product?.title?.longTitle} is added into the cart`}
        action={action}
        
      />
      <StyledButton variant="contained" sx={{ backgroundColor: "#fb541b" }}>
        {" "}
        <FlashOnIcon /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
