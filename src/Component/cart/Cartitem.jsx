import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import {FaPlus,FaMinus} from 'react-icons/fa6'
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeToCart } from "../../redux/actions/cartAction";
import RemoveModal from "./RemoveModal";
 
const fassured =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const quantityButton = {
    backgroundColor: 'transparent',
  
   
    padding:"5px",
    border:"1px solid #878787",
    borderRadius:"50%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  cursor:"pointer"



  }
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
   
  
const Cartitem = ({ product }) => {
 const [quantity, setQuantity] =useState(product.quantity)
const [open, setOpen] =  useState(false);
 const handleOpen = ()=>  setOpen(true);
const dispatch  =  useDispatch();
 
 function handleIncreaseQuantity(){
  dispatch(increaseQuantity(product.id))
  setQuantity(pre=>pre+1)
 }

 function handleDecreaseQuantity(){

  dispatch(decreaseQuantity(product.id))
  setQuantity(pre=>pre-1)
 }

 

  return (
    <Box display="flex" flexDirection={{lg:"row", md:"row", sm:"row", xs:"column"}} borderTop="2px solid #f0f0f0">
      <Box m="20px" width="130px" height="25vh" padding="5px"  display="flex"  flexDirection="column" justifyContent="space-between" alignItems="center" gap=".7rem" >
        <img src={product?.url} alt="" width="100%" height="70%" style={{objectFit:"contain"}} />
        <Box display="flex" alignItems="center" gap="5px">
          <button style={quantityButton} disabled={quantity==1} onClick={handleDecreaseQuantity}><FaMinus/></button>
          <Typography  paddingX="12px" border="1px solid #878787" borderRadius="2px">{quantity}</Typography>
          <button style={quantityButton} onClick={handleIncreaseQuantity}> <FaPlus/> </button>
        </Box>
      </Box>
      <Box marginY="20px" width="100%">
      <Box display="flex" justifyContent="space-between">
        <Typography>{product.title.longTitle.length >45?product.title.longTitle.substring(0,45)+"...":product.title.lognTitle}</Typography>
        <Typography fontSize="14px" marginRight="4%" display={{md:'none', lg:'block', sm:'none', xs:'none'}}>
            {" "}
            Delivery by {date.toDateString()} |{" "}
            <span style={{ color: "green" }}>₹40</span>
          </Typography>
        </Box>
        <Typography sx={{ color: "#878787", fontSize: "14px", mt: "10px" }}>
          Seller:RetailNet
          <Box component="span" ml="10px">
            {" "}
            <img src={fassured} alt="" width="60px" />
          </Box>
        </Typography>
        <Typography mt="10px">
          <Box component="span" fontSize="18px" fontWeight="600">
            ₹{product?.price?.cost * quantity}
          </Box>{" "}
          &nbsp;
          <Box component="span" color="#878787">
            {" "}
            <strike>₹{product?.price?.mrp * quantity}</strike>
          </Box>
          &nbsp;
          <Box component="span" color="#388E3C">
            {product?.price?.discount}
          </Box>
        </Typography>
        <Button style={{color:"#000",fontSize: "16px", fontWeight: "600",marginTop:"20px" }}>
          SAVE FOR LATER
        </Button>
        <Button style={{color:"#000", fontSize: "16px", fontWeight: "600",marginTop:"20px" }} onClick={()=>{ handleOpen()}}>
          REMOVE
        </Button>
         
        {
          open && <RemoveModal  item={product} isModalOpen={open}  setIsModalOpen={setOpen}  />
        }
      </Box>

     
    </Box>
  );
};

export default Cartitem;
