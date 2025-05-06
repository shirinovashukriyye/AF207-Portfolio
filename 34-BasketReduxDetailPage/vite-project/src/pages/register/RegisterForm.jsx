import React from "react";
import "./RegisterForm.css";
import { useFormik } from "formik";
import { registerschema } from "../../schemas/RegisterSchema";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

const RegisterForm = () => {
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
    const response = await axios.get("http://localhost:3000/users");
    const users = response.data.users || [];  
    const existUser = users.find(
      (user) => user.email === values.email || user.username === values.username
    );

    await axios.post("http://localhost:3000/users", values);
    console.log(values);
    notify("User registered successfully", "success");
    setTimeout(() => {
      action.resetForm();
    }, 200);
    navigate("/login");
  };

  const { values, handleChange, resetForm, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      isLogin: false,
      wishlist: [],
      basket: [],
    },
    onSubmit: submitForm,
    validationSchema: registerschema,
  });

  return (
    <div className="registerContainer">
      <form action="" onSubmit={handleSubmit}>
        <h1>Register</h1>

        <div className="label-container">
          {errors.name ? <span className="error">{errors.name}</span> : null}
        </div>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          id="name"
          type="text"
          autoComplete="given-name"
          value={values.name}
          onChange={handleChange}
        />
        <div className="label-container">
          {errors.surname ? (
            <span className="error">{errors.surname}</span>
          ) : null}
        </div>
        <TextField
          label="Surname"
          variant="outlined"
          name="surname"
          id="surname"
          type="text"
          autoComplete="family-name"
          value={values.surname}
          onChange={handleChange}
        />
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
          {errors.email ? <span className="error">{errors.email}</span> : null}
        </div>
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          id="email"
          type="text"
          autoComplete="email"
          value={values.email}
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
                    showPassword ? "hide the password" : "display the password"
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
        <div className="label-container">
          {errors.confirmpassword ? (
            <span className="error">{errors.confirmpassword}</span>
          ) : null}
        </div>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="confirmpassword">Confirm Password</InputLabel>
          <OutlinedInput
            id="confirmpassword"
            value={values.confirmpassword}
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
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
            label="confirmpassword"
          />
        </FormControl>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          Already have an account?
          <Link to="/login">Sign In</Link>
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

export default RegisterForm;
