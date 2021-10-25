import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { setToken } from "../token/AuthFunctions";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={async (values) => {
        try {
          const res = await axios.post(
            "http://challenge-react.alkemy.org/",
            values
          );
          setToken(res.data.token);
          console.log("token guardado");
          dispatch({ type: "LOGIN_USER" });
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <div className="container w-25">
        <Form>
          <div className="d-flex flex-column">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            {/* Solucionar tema de que se mueve el boton cuando aparecen los errores */}
            <div className="position-relative">
              <ErrorMessage name="email" />
              <ErrorMessage name="password" />
            </div>
            <button className="btn btn-dark my-5" type="submit">
              OK
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default Login;
