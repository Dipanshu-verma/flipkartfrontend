import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from '@mui/material'
import React from 'react'
import { LocalOffer as Badge } from '@mui/icons-material';

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 16px;
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border:none;
    }
`
const ProductDetail = ({product}) => {
 console.log(product.category);
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
  return (
    <>
      <Typography>{product?.title?.longTitle}</Typography>
            <Typography mt="5px" fontSize="15px" color="#878787">
              8 Rating & 1 review
              <Box component="span">
                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                  width="77px"
                  style={{ marginLeft: "20px" }}
                />
              </Box>
            </Typography>
          <Typography>
              <Box component="span" fontSize="28px">
                ₹{product?.price?.cost}
              </Box> &nbsp;
              <Box component="span" color="#878787">
                {" "}
                <strike>₹{product?.price?.mrp}</strike>
              </Box>&nbsp;
              <Box component="span" color="#388E3C">
                {product?.price?.discount}
              </Box>
            </Typography>
            <Typography>Available offers</Typography>
            <Box >
            <Typography fontSize="14px" mt="10px"><StyledBadge/> Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card </Typography>
                <Typography fontSize="14px" mt="10px"><StyledBadge /> Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply  </Typography>
                <Typography fontSize="14px" mt="10px"><StyledBadge  /> purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs </Typography>
                <Typography fontSize="14px" mt="10px"><StyledBadge  />  Partner OfferExtra 10% off upto ₹500 on next furniture purchase   </Typography>
            </Box>
            <Table>
                <TableBody  style={{width:"100%",boxSizing:"border-box"}}>
                    <ColumnText>
                    <TableCell sx={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell sx={{fontWeight:"600"}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    
                    <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product?.price?.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} />
                        </TableCell>
                    </TableRow>
                    <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product?.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
    </>
  )
}

export default ProductDetail