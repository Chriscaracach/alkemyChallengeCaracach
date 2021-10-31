import axios from "axios";

export const APIcall = async (baseUrl, token, hero) => {
  let data = [];
  try {
    const res = await axios.get(baseUrl + token + "/search/" + hero);
    data = res.data.results;
  } catch (error) {
    console.log(error);
  }

  return data;
};

export const postToken = async (baseUrlPost, values) => {
  let res;
  try {
    res = await axios.post(baseUrlPost, values);
  } catch (error) {
    console.log(error);
  }
  return res;
};
