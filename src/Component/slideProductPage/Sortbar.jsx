import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const Sortbar = ({handlesort}) => {
  const [choosed, setChoosed] = useState("");

 
  return (
    <Box
      display="flex"
      gap="24px"
      fontSize="14px"
      borderBottom="1px solid #878787"
      style={{cursor:"pointer"}}
      paddingY=".6rem"
    >
      <Typography>Sort By</Typography>
      <Typography
        color={choosed === "Popularity" ? "blue" : "black"}
        fontWeight={choosed === "Popularity" ? "600" : "500"}
        onClick={() =>{setChoosed("Popularity"); handlesort("Popularity")}}
      >
        Popularity
      </Typography>

      <Typography
        color={choosed === "Price -- Low to High" ? "blue" : "black"}
        fontWeight={choosed === "Price -- Low to High" ? "600" : "500"}
        onClick={() =>{setChoosed("Price -- Low to High"); handlesort("Price -- Low to High")}}
      >
        Price -- Low to High
      </Typography>

      <Typography
        color={choosed === "Price -- High to Low" ? "blue" : "black"}
        fontWeight={choosed === "Price -- High to Low" ? "600" : "500"}
        onClick={() =>{setChoosed("Price -- High to Low"); handlesort("Price -- High to Low")}}
      >
        Price -- High to Low
      </Typography>

      <Typography
        color={choosed === "Newest First" ? "blue" : "black"}
        fontWeight={choosed === "Newest First" ? "600" : "500"}
        onClick={() =>{ setChoosed("Newest First"); handlesort("Newest First")}}
      >
        Newest First
      </Typography>

    </Box>
  );
};

export default Sortbar;
