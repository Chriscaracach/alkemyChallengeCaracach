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
        email: Yup.string()
          .email("Invalid email address")
          .required("Email required"),
        password: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Password required"),
      })}
      onSubmit={async (values, { resetForm }) => {
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
        resetForm({ values: "" });
      }}
    >
      <div className="container w-25 m-auto mt-5">
        <Form>
          <div className="d-flex flex-column">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <label htmlFor="password" className="my-1">
              Password
            </label>
            <Field name="password" type="password" />

            <div className="container w-75 h-25 my-2">
              <ErrorMessage
                name="email"
                render={(msg) => (
                  <div class="alert alert-danger error-message" role="alert">
                    {msg}
                  </div>
                )}
              />

              <br />

              <ErrorMessage
                name="password"
                render={(msg) => (
                  <div class="alert alert-danger error-message" role="alert">
                    {msg}
                  </div>
                )}
              />
            </div>

            <button className="btn btn-dark" type="submit">
              OK
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default Login;
