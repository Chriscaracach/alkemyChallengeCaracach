import React from "react";
import Loader from "./Loader";
import "../App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.heroReducer.isLoading);

  // const baseUrl = "/";
  const baseUrl = "https://superheroapi.com/api.php/"; //REVISAR ESTO
  const token = "10226588721411121";

  const searchHero = async (hero) => {
    try {
      dispatch({ type: "SET_IS_LOADING" });
      const res = await axios.get(baseUrl + token + "/search/" + hero);
      const results = res.data.results;
      dispatch({ type: "RESET_SUPERHEROE" });
      dispatch({ type: "BUSCAR_SUPERHEROE", results });
      dispatch({ type: "RESET_IS_LOADING" });
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
      <div className="container my-2 w-50 text-center">
        <p className="lead" id="searchbar-text">
          Search heroes for your team
        </p>
        <div className="container d-flex justify-content-center align-items-center">
          <Form>
            <Field name="searchHero" type="text" />
            <button className="btn m-1 action-button" type="submit">
              <i class="bi bi-search"></i>
            </button>
            <ErrorMessage
              name="searchHero"
              render={(msg) => <p className="error-message">{msg}</p>}
            />
          </Form>
          {isLoading ? (
            <div className="d-inline-block">
              <Loader></Loader>
            </div>
          ) : null}
        </div>
      </div>
    </Formik>
  );
};

export default SearchBar;
