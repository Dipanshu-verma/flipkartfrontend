import { Box, InputBase, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/actions/productAction";
const Search = () => {
  const [searchtext, setSeacrhText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { products } = useSelector((state) => state.allproducts);
  function getSearchText(e) {
    setSeacrhText(e.target.value);
  }

  return (
    <Box width="36%" marginLeft="3%" position="relative">
      <Box
        display="flex"
        alignItems="center"
        bgcolor="rgb(240, 245, 255)"
        width="100%"
        paddingX="9px"
        boxSizing="border-box"
        borderRadius="7px"
      >
        <FiSearch color="gray" fontSize="25px" cursor="pointer" />
        <InputBase
          type="text"
          placeholder="Search whatever you want"
          sx={{ paddingX: "6px", paddingY: "4px", width: "100%" }}
          onChange={(e) => getSearchText(e)}
        />
      </Box>
      <Box
        color="black"
        bgcolor="#fff"
        position="absolute"
        top="3.5rem"
        width="100%"
        maxHeight="50vh"
        sx={{overflowY:"scroll"}}
        

      >
        {searchtext && (
          <List>
            {products
              ?.filter((product) =>
                product.title.longTitle
                  .toLowerCase()
                  .includes(searchtext.toLowerCase())
              )
              .map((product) => (
                <Link
                  to={`productdetail/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setSeacrhText("")}
                >
                  <ListItem>{product.title.longTitle}</ListItem>
                </Link>
              ))}
          </List>
        )}
      </Box>
    </Box>

   
  );
};

export default Search;
