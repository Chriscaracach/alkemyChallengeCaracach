import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { setToken } from "../token/AuthFunctions";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.loginReducer.loginError);
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
          dispatch({ type: "LOGIN_USER" });
        } catch (error) {
          dispatch({ type: "LOGIN_ERROR" });
          setTimeout(() => {
            dispatch({ type: "LOGIN_ERROR_RESET" });
          }, 5000);
          console.log(error);
        }
        resetForm({ values: "" });
      }}
    >
      <div className="container w-25 m-auto mt-5" id="login-container">
        <Form>
          <div className="d-flex flex-column">
            <label htmlFor="email" className="my-1 login-label">
              Email
            </label>
            <Field name="email" type="email" />
            <label htmlFor="password" className="my-1 login-label">
              Password
            </label>
            <Field name="password" type="password" />

            <div className="container w-75 h-25 my-2 text-center d-flex flex-column justify-content-center align-items-center">
              <ErrorMessage
                name="email"
                render={(msg) => <p className="error-message">{msg}</p>}
              />
              <ErrorMessage
                name="password"
                render={(msg) => <p className="error-message">{msg}</p>}
              />
              {loginError ? (
                <p className="error-message">
                  Invalid email or password, try again
                </p>
              ) : null}
            </div>

            <button className="btn action-button" type="submit">
              OK
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default Login;
