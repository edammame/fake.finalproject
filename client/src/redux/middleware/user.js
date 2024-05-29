/** @format */

import { axiosInstance } from "@/axios/axios";
import { functionLogin, functionLogout } from "../slices/userSlice";
import Swal from "sweetalert2";

export const userLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance().get("/users", {
        params: { email, password },
      });
      // console.log(res.data.result);
      if (res.data.result?.id) {
        const { first_name } = res.data.result;

        Swal.fire({
          title: "Success! Welcome " + first_name,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        }).then(async function () {
          dispatch(functionLogin(res.data.result));
        });

        localStorage.setItem("user", res.data.token);
      }
      return;
    } catch (err) {
      localStorage.removeItem("auth");
      Swal.fire({
        title: "Error!",
        text: err.response.data.message,
        icon: "error",
        confirmButtonText: "ok",
      });

      return err.message;
    }
  };
};

export const keepLogin = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("user");
      const res = await axiosInstance().get("/users/v1", {
        headers: {
          Authorization: token,
        },
      });

      if (res.data.result?.id) {
        dispatch(functionLogin(res.data.result));

        localStorage.setItem("user", res.data.token);
      } else {
        alert("user not found");
        throw Error("user not found");
      }
      return;
    } catch (err) {
      localStorage.removeItem("auth");
      dispatch(functionLogout);
      return err.message;
    }
  };
};
