import { Badge, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AiOutlineShop } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import LoginDialog from "../login/LoginDialog";
import { useContextData } from "../../context/Context.data";
import Profile from "./Profile";
import { Link, json, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CustomButton = ({drawer}) => {
  const [logindialog, setLoginDialog] = useState(false);
  const { username } = useContextData();
  const navigate =useNavigate();
  const { cartitems } = useSelector((state) => state.cart);
  const token  =  localStorage.getItem("access_token")



  
  return (
    <Box
      color="#000000"
      display={"flex"}
       flexDirection={drawer?"column":""}
      justifyContent={drawer?"center":"space-between"}
      gap={drawer?"1.5rem":"3rem"} 
      
      alignItems="center"
      fontSize="25px"
     
    
    >
      <Box
        display={"flex"}
         
        justifyContent="space-between"
        gap={drawer?"1.5rem":".5rem"}
        alignItems="center"
        sx={{ cursor: "pointer" }}
      >
       {!drawer && <AiOutlineShop /> }
        <Typography>Become a Seller</Typography>
      </Box>

      { token ? (
        <Profile  drawer/>
      ) : (
        <Box
          display="flex"
          className="signin-box"
          alignItems="center"
          gap=".5rem"
          justifyContent="space-between"
          sx={{cursor:"pointer","&:hover":{
            backgroundColor:"blue",
            color:"white"
          }}}
          
          padding="8px"
          color="black"
          borderRadius="7px"

          
        >
        {!drawer &&  <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-815786.svg"
            alt=""
          /> }

          <Typography onClick={() => setLoginDialog(true)}>
            
            Sign in 
          </Typography>
        </Box>
      )}
       
      <Box
        display={"flex"}
        onClick={()=>navigate("/cart")}
        justifyContent="space-between"
        gap={drawer?"1.5rem":".5rem"}
        alignItems="center"
        sx={{ cursor: "pointer" }}
        
      >
        <Badge badgeContent={cartitems?.length} color="secondary">
         {!drawer && <BsCart3 />}
         </Badge>
        <Typography>Cart</Typography>
        
      </Box>
    

      <Typography sx={{ cursor: "pointer" }}>More</Typography>

      <LoginDialog open={logindialog} setLoginDialog={setLoginDialog} />
    </Box>

  );
};

export default CustomButton;
