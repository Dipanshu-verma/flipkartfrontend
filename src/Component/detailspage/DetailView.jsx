import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../redux/actions/productAction";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const DetailView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.detailproduct);
  console.log(product);

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [id, dispatch]);

  const SkeletonLoader = () => (
    <Grid bgcolor="#f0f0f0" container>
      <Grid item lg={4} md={4} sm={8} xs={12}>
        <Box  px={2} style={{ backgroundColor: "#fff" }}>
        <Skeleton  width={300} height="80vh"/>
        <Skeleton width={300} height={100}/>
        </Box>
      </Grid>
      <Grid item lg={8} md={8} sm={8} xs={12}>
        
        <Box  style={{ backgroundColor: "#fff" }}>
        <Skeleton width="100%" height="100vh"/>
        </Box>
      </Grid>
    </Grid>
  );

  return (
    <Box mt="75px">
      {loading ? (
        SkeletonLoader()
      ) : (
        <Grid bgcolor="#fff" container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <Grid mt="50px" item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={product} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default DetailView;
