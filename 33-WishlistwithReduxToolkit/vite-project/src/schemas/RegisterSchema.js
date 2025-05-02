import * as yup from "yup";

export const registerschema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 character")
    .required("Name is required"),
  surname: yup
    .string()
    .min(5, "Name must be at least 5 character")
    .required("Surname is required"),
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmpassword: yup
    .string()
    .required("ConfirmPassword is required")
    .oneOf([yup.ref("password"), yup.password], "Passwords must match"),
});
