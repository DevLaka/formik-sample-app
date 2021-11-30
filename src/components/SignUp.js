import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

export const SignUp = () => {
  const validate = Yup.object({
    first_name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("First Name is required"),
    last_name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Last name is required"),
    email: Yup.string()
      .max(15, "Email is invalid")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password should contain at least 8 characters")
      .required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={values => {
          console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="first_name" type="text" />
            <TextField label="Last Name" name="last_name" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirm_password"
              type="password"
            />
            <button className="btn btn-dark mt-3" type="submit">
              Register
            </button>
            <button className="btn btn-danger ms-3 mt-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
