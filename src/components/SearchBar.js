import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";

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
      <div className="container my-2 w-50">
        <p className="lead">Search heroes for your team</p>
        <Form>
          <Field name="searchHero" type="text" />
          <button className="btn mx-1 action-button" type="submit">
            <i class="bi bi-search"></i>
          </button>
          <ErrorMessage
            name="searchHero"
            render={(msg) => <p className="error-message">{msg}</p>}
          />
        </Form>
      </div>
    </Formik>
  );
};

export default SearchBar;
