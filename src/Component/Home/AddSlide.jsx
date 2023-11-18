import { Box, useMediaQuery, useTheme} from '@mui/material';
import React from 'react'
import Slide from './Slide';
 

const AddSlide = ({products,title,timer,tag}) => {
    const adURL =
    "https://rukminim1.flixcart.com/fk-p-flap/470/720/image/db75ad39921d9bdc.jpg?q=20";
    const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box display="flex" width="100%" gap="1rem" justifyContent="space-between">
          <Box  width={isMediumScreen ? '100%' : '82%'}>
            <Slide products={products} title={title} timer={timer}  tag={tag} />
          </Box>
          <Box bgcolor="white" mt="15px" height="56vh"  display={isMediumScreen ? 'none' : 'block'}>
            <img src={adURL} alt="ad" width="100%" height="100%" />
          </Box>
        </Box>
      );
}

export default AddSlide