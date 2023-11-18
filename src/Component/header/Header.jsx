import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  styled,
  Drawer,
  ListItem,
  List,
} from "@mui/material";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
const StyledHeader = styled(AppBar)`
  background: #ffffff;
  height: 64px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;
const Header = () => {
  const [open, setOpen] = useState(false);

  function handleDrawer() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <StyledHeader>
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box lineHeight="0" sx={{ cursor: "pointer" }}>
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg"
              alt="FlipKart Logo"
              style={{ width: 130 }}
            />

            <Typography
              fontSize="12px"
              color="#9E9E9E"
              fontWeight="600"
              marginLeft="43px"
              fontStyle="italic"
            >
              Explore{" "}
              <span style={{ color: "#FFC220" }}>
                plus
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg"
                  alt="plusicon"
                  style={{ marginLeft: "5px" }}
                />
              </span>
            </Typography>
          </Box>
        </Link>
        <Search />
        <Box marginLeft="1.5rem"  display={{ xs:"none", sm:"none", md:"none",lg:"block"}}>
          <CustomButton />
        </Box>
        <Box
          display={{ lg: "none", md: "block" }}
          marginLeft="auto"
          marginRight="10px"
          onClick={handleDrawer}
        >
          <MenuIcon sx={{ color: "black", cursor: "pointer" }} />
        </Box>
        <Drawer  anchor="right" open={open} onClose={handleClose}>
          <Box width="180px" onClick={handleClose}>
            <List Button>
              <ListItem>
                <CustomButton  drawer/>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        ;
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
