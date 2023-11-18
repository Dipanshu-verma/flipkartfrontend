import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector } from "react-redux";
import Countdown from "react-countdown";
import { Link, useNavigate } from "react-router-dom";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ products, title, timer, category, tag }) => {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };
const navigate =  useNavigate();
  function handleProductsPage(){
    localStorage.setItem("tag", tag);
    localStorage.setItem("category", category)
navigate("/slideproducts")

  }


  return (
    <Box mt="15px" paddingBottom="20px" bgcolor="#fff">
      <Box padding="25px 20px" display="flex" alignItems="center">
        <Typography
          fontSize="20px"
          fontWeight="600"
          lineHeight="32px"
          marginRight="15px"
        >
          {title}
        </Typography>
        {timer && (
          <Box
            display="flex"
            gap="10px"
            alignItems="center"
            ml="10px"
            color="#7f7f7f"
          
          >
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
              alt="timer"
              width="25px"
            />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Box>
        )}

        <Box
          variant="span"
          ml="auto"
          bgcolor="#1C41D6"
          padding="4px"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="#fff"
          cursor="pointer"
          onClick={handleProductsPage}
        >
          {" "}
          <ArrowForwardIosIcon fontSize="small" />{" "}
        </Box>
      </Box>

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        dotListClass="custom-dot-list-style"
        infinite={true}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
      >
        {products
          ?.filter((elm) =>
            tag ? elm.tagline === tag : elm.category === category
          )
          .map((elm) => (
            <Link
              to={`/productdetail/${elm.id}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                border="1px solid  rgb(224,224,224)"
                height="35vh"
                borderRadius="4px"
                padding="8px 10px"
                textAlign="center"
                mx="8px"
                display="flex"
                flexDirection="column"
                gap="1rem"
                justifyContent="space-between"
              >
                <Box height="60%" width="100%">
                  <img
                    src={elm.url}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Box>
                  <Typography color="gray">
                    {elm.title.shortTitle.length > 15
                      ? elm.title.shortTitle.substring(0, 14)
                      : elm.title.shortTitle}
                  </Typography>
                  <Typography fontSize="14px" fontWeight="600" color="#212121">
                    {" "}
                    From ₹{elm.price.cost}
                  </Typography>
                </Box>
              </Box>
            </Link>
          ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
