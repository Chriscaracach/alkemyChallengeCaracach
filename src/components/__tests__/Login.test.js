import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../Login";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { act } from "react-dom/test-utils";

const MockLogin = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

test("When user click submit button, a loader(spinner) should be rendered", async () => {
  render(<MockLogin />);
  const EmailInput = screen.getByPlaceholderText(/your email/i);
  const PassInput = screen.getByPlaceholderText(/your password/i);
  act(() => {
    fireEvent.change(EmailInput, { target: { value: "wrongemail@wrong.com" } });
    fireEvent.change(PassInput, { target: { value: "wrong" } });
  });

  const SubmitButton = screen.getByRole("button");
  act(() => {
    fireEvent.click(SubmitButton);
  });

  await waitFor(() => {
    const loader = screen.getByRole("status");
    expect(loader).toBeInTheDocument();
  });
});

test("A error message is rendered if email input is invalid", async () => {
  render(<MockLogin />);
  const EmailInput = screen.getByPlaceholderText(/your email/i);
  act(() => {
    fireEvent.change(EmailInput, { target: { value: "wrong" } });
  });
  const SubmitButton = screen.getByRole("button");
  act(() => {
    fireEvent.click(SubmitButton);
  });

  await waitFor(() => {
    const ErrorMessage = screen.getByText("Invalid email address");
    expect(ErrorMessage).toBeInTheDocument();
  });
});

test("A error message is rendered if password or email is incorrect", async () => {
  render(<MockLogin />);
  const EmailInput = screen.getByPlaceholderText(/your email/i);
  const PassInput = screen.getByPlaceholderText(/your password/i);
  act(() => {
    fireEvent.change(EmailInput, { target: { value: "wrongemail@wrong.com" } });
    fireEvent.change(PassInput, { target: { value: "wrong" } });
  });
  const SubmitButton = screen.getByRole("button");
  act(() => {
    fireEvent.click(SubmitButton);
  });

  await waitFor(() => {
    const ErrorMessage = screen.getByRole("alert");
    expect(ErrorMessage).toBeInTheDocument();
  });
});
