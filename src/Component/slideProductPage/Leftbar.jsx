import React, { useState } from "react";
import FilterTop from "./FilterTop";
import FilterBottom from "./FilterBottom";
import { Box, Typography } from "@mui/material";
import { useContextData } from "../../context/Context.data";
import { handleCheckboxChangeForColor, handleCheckboxChangeForDiscount, handleCheckboxChangeForRating, handleCheckboxChangeForSize } from "../../service/api";
import { useParams } from "react-router-dom";

const Ratings = ["1★ & above", "2★ & above", "3★ & above", "4★ & above"];
const Sizes = ["S", "M", "L", "XL", "XXL"];
const Discounts = ["30% off", "40% off", "50% off", "60% off", "70% off"];

const Colors = [
  "White",
  "Red",
  "Blue",
  "Brown",
  "Green",
  "Black",
  "Yellow",
  "Gray",
  "Burgundy",
  "Pink",
  "Golden",
  "Beige",
  "Silver",
  "Oak",
  "Walnut",
  "Bronze",
  "Multicolor",
  "Orange",
];


const Leftbar = ({ setproductData, productsData, products,productheader,category,tag }) => {

  const{isRotatedRating, setIsRotatedRating,isRotatedSize, setIsRotatedSize,isRotatedDiscount, setIsRotatedDiscount,isRotatedColor, setIsRotatedColor} = useContextData();
 

  const [filters, setFilters] = useState({
    rating: 1,
    size: "",
    discount: 1,
    color: "",
  });
  
 

 
  
  const handleBoxClickRating = () => {
    setIsRotatedRating((prevState) => !prevState);
  };

  const handleBoxClickSize = () => {
    setIsRotatedSize((prevState) => !prevState);
  };
  const handleBoxClickDiscount = () => {
    setIsRotatedDiscount((prevState) => !prevState);
  };

  const handleBoxClickColor = () => {
    setIsRotatedColor((prevState) => !prevState);
  };


 
 
 
  return (
    <Box bgcolor="#fff" width="30%"    className="leftslider">
      <Typography
        component="h2"
        padding="1rem .7rem"
        fontWeight="600"
        fontSize="20px"
      >
        Filter
      </Typography>
      <Box borderTop="1px solid #878787">
        <FilterTop
          title="CUSTOMER RATINGS"
          isRotated={isRotatedRating}
          onclick={() => handleBoxClickRating()}
        />
        {isRotatedRating && (
          <FilterBottom
            value={Ratings}
            type="rating"
            onclick={(elm) => handleCheckboxChangeForRating(elm,products,filters,setFilters,setproductData,productsData,productheader)}
          />
        )}
      </Box>
  {
   ( category ==="Fashion" || tag==="Best Seller" || tag==="Top Selling" || tag ==="Deal of the day") &&
  
      <Box borderTop="1px solid #878787">
        <FilterTop
          title="SIZE"
          isRotated={isRotatedSize}
          onclick={() => handleBoxClickSize()}
        />
        {isRotatedSize && (
          <FilterBottom
            value={Sizes}
            type="Size"
            onclick={(elm) => handleCheckboxChangeForSize(elm,products,filters,setFilters,setproductData,productsData,productheader)}
          />
        )}
      </Box>
  }
      <Box borderTop="1px solid #878787">
        <FilterTop
          title=" DISCOUNT"
          isRotated={isRotatedDiscount}
          onclick={() => handleBoxClickDiscount()}
        />
        {isRotatedDiscount && (
          <FilterBottom
            value={Discounts}
            type="Discount"
            onclick={(elm) => handleCheckboxChangeForDiscount(elm,products,filters,setFilters,setproductData,productheader)}
          />
        )}
      </Box>

      {
        ( category ==="Fashion" || category==="Home & Furniture" || tag==="Top Selling" || tag ==="Deal of the day"||tag==="Best Seller") &&
      
      <Box borderTop="1px solid #878787">
        <FilterTop
          title="Color"
          isRotated={isRotatedColor}
          onclick={() => handleBoxClickColor()}
        />
        {isRotatedColor && (
          <FilterBottom
            value={Colors}
            type="Discount"
            onclick={(elm) => handleCheckboxChangeForColor(elm,products,filters,setFilters,setproductData,productheader)}
          />
        )}
      </Box>
      }
    </Box>
  );
};

export default Leftbar;
