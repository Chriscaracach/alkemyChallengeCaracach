import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useState } from "react";
const SearchBar = () => {
  const [Heroes, setHeroes] = useState([]);

  const url = "https://superheroapi.com/api/";
  const token = "10226588721411121";
  return (
    <Formik
      initialValues={{ searchHero: "" }}
      validationSchema={Yup.object({
        searchHero: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {}}
    >
      <div className="container my-2">
        <Form>
          <label htmlFor="searchHero">Búsqueda</label>
          <Field name="searchHero" type="text" />
          <ErrorMessage name="searchHero" />
          <button className="btn btn-dark" type="submit">
            Buscar
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default SearchBar;
