import { Box, Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Totalview = ({cartitems,price,discount}) => {
 
  
  return (
    <Box padding={{lg:"0 15px",md:"0 15px",sm:"0 5px",xs:"0 0"}}marginTop={{lg:"0",md:"0",sm:"20px",xs:"20px"}}>
    <Box borderBottom="1px solid #f0f0f0" bgcolor="#fff" padding="15px 20px">
      <Typography color="#878787" fontWeight="600">
        PRICE DETAILS
      </Typography>
    </Box>
    <Box padding="15px 20px" bgcolor="#fff">
      <Typography marginBottom="20px" fontSize="14px">
        Price
        <Typography component="span">({cartitems?.length} item)</Typography>
        <Box component="span" sx={{ float: "right" }}>
          ₹{price}
        </Box>
      </Typography>
      <Typography marginBottom="20px" fontSize="14px">
        Discount
        <Box
          component="span"
          sx={{ float: "right", color: "#388e3c", fontWeight: "600" }}
        >
          -₹{discount}
        </Box>
      </Typography>
      <Typography marginBottom="20px" fontSize="14px">
        Delivery Charges
        <Box
          component="span"
          sx={{ float: "right", color: "#388e3c", fontWeight: "600" }}
        >
          ₹40
        </Box>
      </Typography>
      <Divider/>

      <Typography
        marginTop='15px'
        marginBottom="20px"
        fontSize="19px"
        fontWeight="600"

      >
        Total Amount
        <Box component="span" sx={{ float: "right" }}>
          ₹{price - discount + 40}
        </Box>
      </Typography>
      <Divider/>
      <Typography
        marginBottom="20px"
        fontSize="15px"
        fontWeight="600"
        color="#388e3c"
        marginTop='15px'
      >
       
        You will save ₹{discount - 40} on this order
      </Typography>
    </Box>
  </Box>
  )
}

export default Totalview