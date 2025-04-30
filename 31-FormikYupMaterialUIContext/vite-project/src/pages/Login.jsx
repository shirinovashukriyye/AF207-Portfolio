import { Container, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const goTo = useNavigate();

  const form = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: (data) => {
      loginUser(data);
      goTo('/');
    }
  });

  return (
    <Container maxWidth="sm">
      <form onSubmit={form.submitForm}>
        <TextField fullWidth label="Username" name="username" margin="normal"
          value={form.values.username}
          onChange={form.handleChange}
          error={form.touched.username && Boolean(form.errors.username)}
          helperText={form.touched.username && form.errors.username}
        />
        <TextField fullWidth label="Password" name="password" type="password" margin="normal"
          value={form.values.password}
          onChange={form.handleChange}
          error={form.touched.password && Boolean(form.errors.password)}
          helperText={form.touched.password && form.errors.password}
        />
        <Button type="submit" variant="contained" fullWidth>Login</Button>
      </form>
    </Container>
  );
};

export default Login;
