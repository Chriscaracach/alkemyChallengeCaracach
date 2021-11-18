import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";

const MockHeader = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
};

test("Not render a Logout button when no user logged in", () => {
  render(<MockHeader />);
  const ButtonLogout = screen.queryByRole("button");
  expect(ButtonLogout).not.toBeInTheDocument();
});
