import React from "react";
import Loader from "./Loader";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { APIcall } from "../services/APIcall";
import { useDispatch, useSelector } from "react-redux";
import {
  searchSuperHero,
  resetSearch,
  setIsLoading,
  resetIsLoading,
} from "../redux/actions/heroActions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.heroReducer.isLoading);

  const searchHero = async (hero) => {
    try {
      dispatch(setIsLoading());
      //Función de llamada a la API
      const results = await APIcall(hero);
      dispatch(resetSearch());
      dispatch(searchSuperHero(results));
      dispatch(resetIsLoading());
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
      <div className="container my-2 w-100 text-center min-vh-25">
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Loader></Loader>
          </div>
        ) : (
          <>
            <p className="lead" id="searchbar-text">
              Search heroes for your team
            </p>
            <div className="container d-flex justify-content-center align-items-center">
              <Form>
                <Field name="searchHero" type="text" />
                <ErrorMessage
                  name="searchHero"
                  render={(msg) => <p className="error-message">{msg}</p>}
                />
                <button className="btn m-1 action-button" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </Form>
            </div>
          </>
        )}
      </div>
    </Formik>
  );
};

export default SearchBar;
