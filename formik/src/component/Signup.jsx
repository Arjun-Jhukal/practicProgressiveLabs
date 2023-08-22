import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

// Key Value Pair for the initial value object are the name attribute for input fields
const initialvalues = {
  name: "",
  email: "",
  newPassword: "",
  confirmPassowrd: "",
};
const Signup = () => {
  // destructuring the value returned by useFormik
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialvalues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);

      action.resetForm();
    },
  });
  console.log(errors);

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="input__field">
        <label>Name</label>
        <input type="text" name="name" placeholder="Your Name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
        {touched.name && errors.name ? <p className="form__error">{errors.name}</p> : ""}
      </div>
      <div className="input__field">
        <label>Email</label>
        <input type="email" name="email" placeholder="Your Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
        {touched.email && errors.email ? <p className="form__error">{errors.email}</p> : ""}
      </div>
      <div className="input__field">
        <label>Password</label>

        <input type="password" name="newPassword" placeholder="New Password" value={values.newPassword} onChange={handleChange} onBlur={handleBlur} />
        {touched.newPassword && errors.newPassword ? <p className="form__error">{errors.newPassword}</p> : ""}
      </div>
      <div className="input__field">
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.confirmPassword && errors.confirmPassword ? <p className="form__error">{errors.confirmPassword}</p> : ""}
      </div>
      <button className="btn btn__submit" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
