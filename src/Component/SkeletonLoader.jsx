import React from "react";
import { Box, Grid, Skeleton,Typography } from "@mui/material";

const SkeletonLoader = () => {
  return (
    <>
    {

       [...new Array(10)].map((e,index)=>(
        <Grid item xs={12} sm={6} md={3} lg={3}>
      <Box padding="5px" height="43vh" margin="5px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" style={{ cursor: "pointer" }}>
        <Box height="60%" position="relative">
          <Skeleton variant="rect" width="100%" height="100%" />
        </Box>
        <Box padding="2px 5px" position="relative" height="37%" boxSizing="border-box" mt=".5rem">
          <Typography component="span" position="absolute" paddingX="3px" fontSize="12px" bgcolor="green" color="#fff" bottom=".5rem" right="0" display="flex" borderRadius="3px" justifyContent="center" alignItems="center">
            <Skeleton width={40} height={16} />
          </Typography>
          <Typography>
            <Skeleton width={100} height={16} />
          </Typography>
          <Typography>
            <Box component="span" fontSize="17px" fontWeight="600">
              <Skeleton width={50} height={20} />
            </Box>{" "}
            &nbsp;
            <Box component="span" fontSize="14px" color="#878787">
              <Skeleton width={50} height={14} />
            </Box>
            &nbsp;
            <Box component="span" fontSize="14px" color="#32ab37">
              <Skeleton width={60} height={14} />
            </Box>
          </Typography>
          <Skeleton width={100} height={16} />
        </Box>
      </Box>
    </Grid>
       ))


    }

    

       
    </>
  );
};

export default SkeletonLoader;
