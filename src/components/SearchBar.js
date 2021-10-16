import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const SearchBar = () => {
  return (
    <Formik
      initialValues={{ searchHero: "" }}
      validationSchema={Yup.object({
        searchHero: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      <div className="container my-2">
        <Form>
          <label htmlFor="searchHero">Búsqueda</label>
          <Field name="searchHero" type="text" />
          <ErrorMessage name="email" />
          <button className="btn btn-dark" type="submit">
            Buscar
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default SearchBar;
