import axios, { AxiosRequestConfig } from "axios";

const getAllGistsService = async() => {
  return axios
  .get("https://api.github.com/gists/public");
};

export { getAllGistsService };
