import { Box, Typography } from "@mui/material";
import React from "react";
import { navData } from "../../Data/data";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const navigate  =  useNavigate();

  function handleheaderclick(ele){
navigate(`/headerproducts/${ele}`)
  }
  return (
    <Box paddingY="10px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        boxShadow="rgba(0, 0, 0, 0.04) 0px 3px 5px"
        bgcolor="#fff"
        paddingX="30px"
        paddingY="20px"
      >
        {navData.map((ele) => (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            lineHeight="0"
            sx={{cursor:"pointer"}}
            onClick={()=>handleheaderclick(ele.text)}
          >
            <img src={ele.url} alt={ele.text} style={{ width: "50%" }} />

            <Typography fontWeight="700" fontSize="14px" color="#333333">
              {ele.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
