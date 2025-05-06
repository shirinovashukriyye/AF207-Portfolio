import React, { useState } from "react";
import axios from "axios";
import { loginschema } from "../../schemas/LoginSchema";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./LoginForm.css";
import IconButton from "@mui/material/IconButton";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { toast } from "react-toastify";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const notify = (text, type) =>
    toast(text, {
      type: type,
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const submitForm = async (values, action) => {
      try {
        const res = await axios.get("http://localhost:3000/users");
        console.log("API cavabı:", res.data.users);
    
        const findUser = res.data.users.find(
          (user) => user.username === values.username && user.password === values.password
        );
    
        if (!findUser) {
          notify("Invalid user", "error");
          return;
        } else {
          const updatedUser = { ...findUser, isLogin: true };
    
          await axios.put(
            `http://localhost:3000/users/${updatedUser.id}`,
            updatedUser
          );
          notify("Login successful", "success");
          setTimeout(() => {
            action.resetForm();
            navigate("/");
          }, 2000);
        }
      } catch (error) {
        console.error("Login error:", error);
        notify("An error occurred. Please try again.", "error");
      }
    };

  const { values, handleChange, resetForm, handleSubmit, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: submitForm,
    validationSchema: loginschema,
  });
  return (
    <div className="loginContainer">
      <form action="" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <div className="label-container">
            {errors.username ? (
              <span className="error">{errors.username}</span>
            ) : null}
          </div>

          <TextField
            label="Username"
            name="username"
            variant="outlined"
            id="username"
            type="text"
            autoComplete="username"
            value={values.username}
            onChange={handleChange}
          />
          <div className="label-container">
            {errors.password ? (
              <span className="error">{errors.password}</span>
            ) : null}
          </div>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              value={values.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="password"
            />
          </FormControl>
        </Box>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          Don't have an account?
          <Link to="/register">Sign Up</Link>
        </div>
        <Stack spacing={2} direction="row">
          <Button className="btn-submit" type="submit" variant="contained">
            Sign Up
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default LoginForm;
