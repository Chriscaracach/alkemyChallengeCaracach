import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logDOM } from "@testing-library/dom";

const SearchBar = () => {
  const dispatch = useDispatch();

  // const baseUrl = "/";
  const baseUrl = "https://superheroapi.com/api.php/"; //REVISAR ESTO
  const token = "10226588721411121";

  const searchHero = async (hero) => {
    try {
      const res = await axios.get(baseUrl + token + "/search/" + hero);
      const results = res.data.results;
      dispatch({ type: "RESET_SUPERHEROE" });
      dispatch({ type: "BUSCAR_SUPERHEROE", results });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={{ searchHero: "" }}
      validationSchema={Yup.object({
        searchHero: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        searchHero(values.searchHero);
      }}
    >
      <div className="container my-2">
        <Form>
          <p className="small">Buscá más héroes para tu equipo</p>
          <Field name="searchHero" type="text" />
          <ErrorMessage name="searchHero" />
          <button className="btn btn-dark mx-1" type="submit">
            Buscar
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default SearchBar;
