import axios from "axios";
import { getUserFromLocalStorgae } from "./localStorage";

// const url = "https://jobify-prod.herokuapp.com/api/v1/toolkit";

const customFetch = axios.create({
  baseURL: "https://redux-toolkit-jobster-api-server.onrender.com/api/v1",
});

customFetch.interceptors.request.use(
  (conifg) => {
    const user = getUserFromLocalStorgae();
    if (user) {
      conifg.headers["Authorization"] = `Bearer ${user.token}`;
    }
    return conifg;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default customFetch;
