import React  from "react";
import { useDispatch } from "react-redux";
import { removeToCart } from "../../redux/actions/cartAction";
import {
  Box,
  Button,
  Modal,
 
  SnackbarContent,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

 
 
function RemoveModal({ item, isModalOpen, setIsModalOpen  }) {
  const dispatch = useDispatch();
 
  const removeItemFromCart = (id) => {
  

     dispatch(removeToCart(id));

    setIsModalOpen(false);
   
  }; 

 
 

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

 
  
  return (
    <div>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 370,
            height: 170,
            bgcolor: "white",
            boxShadow: 24,
            p: 3,
            pb: 6,
            textAlign: "center",
          }}
        >
          <Button
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              m: 1,
            }}
          >
            <CloseIcon sx={{ color: "black" }} />
          </Button>
          <Typography variant="h6" textAlign="left">
            Remove Item
          </Typography>
          <Typography textAlign="left" marginTop="18px" color="#878787">
            Are you sure you want to remove this item?
          </Typography>

          <Button
            onClick={handleCloseModal}
            sx={{
              fontSize: "16px",
              mt: 6,
              color: "#000",
              fontWeight: "600",
              bgcolor: "#fff",
              border: "1px solid #C2C2C2",
              mr: "20px",
              p: "13px 45px",
              "&:hover": {
                bgcolor: "white",
                color: "rgb(40, 116, 240)",
              },
            }}
          >
            CANCEL
          </Button>

          <Button
            onClick={() => {
              removeItemFromCart(item.id);
            }}
            sx={{
              fontSize: "16px",
              mt: 6,
              color: "#fff",
              fontWeight: "600",
              bgcolor: "rgb(40, 116, 240)",
              p: "13px 45px",
              "&:hover": {
                bgcolor: "rgb(40, 116, 240)",
              },
            }}
          >
            REMOVE
          </Button>
         
        </Box>
      </Modal>
      
    </div>
  );
}
 
export default RemoveModal;