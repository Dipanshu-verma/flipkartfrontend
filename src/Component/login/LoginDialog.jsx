import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Box, Button, TextField, Typography } from "@mui/material";
import { authanticateLogin, authanticateSignup } from "../../service/api";
import { useContextData } from "../../context/Context.data";
import axios from "axios";
const URL = "http://localhost:8000";
const LoginDialog = ({ open, setLoginDialog }) => {
  const [login, setLogin] = useState(true);
  
  const [signupvalues, setSignupValues] = useState({
    fullname: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [loginvalues, setLoginValues] = useState({
    email: "",
    password: "",
  });


  const [error, setError] = useState(false);

  const { setUserName } = useContextData();
  function handleDialogClose() {
    setLoginDialog(false);
    setLogin(true);
    setError(false);
  }


  function handleSignupValue(e) {
    setSignupValues({ ...signupvalues, [e.target.name]: e.target.value });
  }


  function handleLoginValues(e) {
    setLoginValues({ ...loginvalues, [e.target.name]: e.target.value });
  }

  
  async function handleSignup() {
    try {
      const res = await axios.post(`${URL}/signup`, signupvalues);

      setLogin(true);
    } catch (error) {
      console.log(error.message);
    }
  }


  async function handleLogin() {
    try {
      const res = await axios.post(`${URL}/login`, loginvalues);
      setUserName(res.data.user.fullname);
      localStorage.setItem("access_token", res.data.token);
      localStorage.setItem("name", res.data.user.fullname);
      handleDialogClose();
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  }


  function handleLoginBox() {
    setLogin((pre) => !pre);
    setError(false);
  }

  return (
    <Dialog open={open} onClose={handleDialogClose}>
      <Box height="70vh" width="100%" display="flex" boxSizing="border-box">
        <Box
          width="45%"
          color="#fff"
          paddingX="30px"
          paddingY="35px"
          bgcolor="#2874f0"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          {login ? (
            <Box>
              <Typography variant="h5" mb="15px" fontWeight="600">
                Login
              </Typography>
              <Typography>
                {" "}
                Get access to your Orders Wishlist and Recommendation
              </Typography>
            </Box>
          ) : (
            <Box>
              <Typography variant="h5" mb="15px" fontWeight="600">
                Looks like you're new here!
              </Typography>
              <Typography>
                {" "}
                Sign up with your mobile number to get started
              </Typography>
            </Box>
          )}

          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
            alt="Loginimg"
            width="100%"
          />
        </Box>
        {login ? (
          <Box display="flex" flexDirection="column" padding="30px" gap=".7rem">
            <TextField
              variant="standard"
              onChange={(e) => handleLoginValues(e)}
              name="email"
              label="Enter Email"
              value={loginvalues.email}
            />
            {error && (
              <Typography
                fontSize="12px"
                color="red"
                lineHeight="0"
                mt="5px"
                fontWeight="600"
              >
                Please Enter Valid Username and password
              </Typography>
            )}
            <TextField
              variant="standard"
              onChange={(e) => handleLoginValues(e)}
              name="password"
              label="Enter Password"
              value={loginvalues.password}
            />

            <Typography fontSize="12px" color="#878787">
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                background: "#FB641B",
                color: "#fff",
                borderRadius: "2px",
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Typography textAlign="center">OR</Typography>
            <Button
              sx={{
                textTransform: "none",
                background: "#fff",
                color: "#2874f0",
                borderRadius: "2px",
                boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
              }}
            >
              Request OTP
            </Button>
            <Typography
              fontSize="14px"
              textAlign="center"
              color="#2874f0"
              mt="2rem"
              fontWeight="600"
              sx={{ cursor: "pointer" }}
              onClick={handleLoginBox}
            >
              New to Flipkart? Create an account
            </Typography>
          </Box>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            paddingX="30px"
            paddingY="25px"
            gap=".5rem"
          >
            <TextField
              variant="standard"
              onChange={(e) => handleSignupValue(e)}
              name="fullname"
              label="Enter Full Name"
              value={signupvalues.fullname}
            />
            <TextField
              variant="standard"
              onChange={(e) => handleSignupValue(e)}
              name="email"
              label="Enter Email"
              value={signupvalues.email}
            />
            <TextField
              variant="standard"
              onChange={(e) => handleSignupValue(e)}
              name="password"
              label="Enter Password"
              value={signupvalues.password}
            />
            <TextField
              variant="standard"
              onChange={(e) => handleSignupValue(e)}
              name="mobile"
              label="Enter Mobile Number"
              value={signupvalues.mobile}
            />
            <Typography fontSize="12px" color="#878787">
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                background: "#FB641B",
                color: "#fff",
                borderRadius: "2px",
              }}
              onClick={handleSignup}
            >
              Sign Up
            </Button>

            <Typography
              fontSize="14px"
              textAlign="center"
              color="#2874f0"
              mt="1rem"
              fontWeight="600"
              sx={{ cursor: "pointer" }}
              onClick={handleLoginBox}
            >
              Existing user? Log in
            </Typography>
          </Box>
        )}
      </Box>
    </Dialog>
  );
};

export default LoginDialog;
