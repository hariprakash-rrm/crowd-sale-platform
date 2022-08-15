import axios from "axios";
// import stores from "../stores";
import router from "@/router";

export const interceptorsSetup = () => {
  axios.interceptors.request.use(
    (config) => {
      let userToken = JSON.parse(localStorage.getItem("token"));
      if (!config.url.includes("/login")) {
        config.headers["Accept"] = "application/json";
        if (userToken && userToken["token"]) {
          config.headers[
            "Authorization"
          ] = `Bearer ${userToken["token"]}`;
        }
        if (config.url.includes("/login/refresh-token")) {
          delete config.headers["Authorization"];
        }
      } else {
        config.headers["Content-Type"] =
          "application/x-www-form-urlencoded;charset=UTF-8";
      }
      return Promise.resolve(config);
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export function interceptorsResponse() {
  axios.interceptors.response.use(
    function (response) {
      return Promise.resolve(response);
    },
    function (error) {
      const { status, data: { detail: { token } = {} } = {} } =
        error.response || {};
      const { config } = error;
      const originalRequest = config;
      if (originalRequest.url.includes("/login/refresh-token")) {
        return Promise.reject(error);
      }
    if (status === 401) {
      localStorage.removeItem("token");
      router.push("/login");
    }
    //   if (status === 403) {
    //     stores.dispatch("logout");
    //     stores.dispatch("showToast", {
    //       class: "bg-danger text-white",
    //       message: "Session Expired!",
    //     });
        // if (!isRefreshing) {
        //   isRefreshing = true;
        //   stores
        //     .dispatch("refreshToken")
        //     .then(({ status }) => {
        //       if (status === 200 || status == 204) {
        //         onRefresh();
        //       }
        //     })
        //     .catch((refreshErr) => {
        //       const { response: { status } = {} } = refreshErr || {};
        //       if (status === 403) {
        //         stores.dispatch("logout");
        //       }
        //     })
        //     .finally(() => {
        //       isRefreshing = false;
        //     });
        // }
        // const requestSubscribers = new Promise((resolve) => {
        //   subscribeTokenRefresh(() => {
        //     resolve(axios(originalRequest));
        //   });
        // });
        // return requestSubscribers;
    //   }
    //   if (status === 401 && token) {
    //     stores.dispatch("redirectToReset", token);
    //     return;
    //   }
      return Promise.reject(error);
    }
  );
}
