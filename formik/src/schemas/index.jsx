import * as Yup from "yup";

// Here also the key props name are same as that in formik form input field name

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  newPassowrd: Yup.string().min(6).required("please Enter Your Password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("newPassword"), null], "Password must Match"),
});
