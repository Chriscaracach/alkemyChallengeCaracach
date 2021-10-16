import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
