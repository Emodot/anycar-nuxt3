import axios from "axios";
import { useDataStore } from "~/store/index";

export default defineNuxtPlugin((NuxtApp) => {
  axios.defaults.baseURL = "https://cara-4oc8.onrender.com/";
  // axios.defaults.withCredentials = true;
  const dataStore = useDataStore();
  axios.interceptors.request.use((config) => {
    config.headers["Authorization"] = `Bearer ${dataStore.token}`;
    config.headers["x-api-token"] = `${dataStore.apiToken}`;
    // console.log(config);
    return config;
  });
  axios.interceptors.response.use(
    (response) => {
      // console.log(response);
      return response;
    },
    (error) => {
      // console.log(error);
      const parsedError = error.response?.data?.message || error.message;
      const status = error.response?.data?.code;
      if (
        parsedError?.toLowerCase().includes("session expired") ||
        parsedError?.toLowerCase().includes("invalid signature") ||
        parsedError?.toLowerCase().includes("Invalid api token") ||
        status === 401
      ) {
        if (!window.location.pathname.includes("/auth/login")) {
          // dataStore.$reset();
          location.replace(`/auth/login?fallBackUrl=${window.location.pathname}`);
          // redirect(`/auth/login?fallBackUrl=${window.location.pathname}`);
        }
      }
      // console.log(error);
      return Promise.reject(error);
    }
  );
  return {
    provide: {
      axios: axios,
    },
  };
});
