export const setToken = (token) => {
  localStorage.setItem("TOKEN", token);
};
export const getToken = () => {
  if (localStorage.getItem("TOKEN") != null) {
    return true;
  } else {
    return false;
  }
};
export const deleteToken = () => {
  localStorage.removeItem("TOKEN");
};
