/** @format */
"use client";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useEffect } from "react";
import { axiosInstance } from "@/axios/axios";
import { redirect } from "next/dist/server/api-utils";
import { useFormik } from "formik";
import Link from "next/link";
// import Image from "next/image";
// import BackgroundImage from "../../../assets/imaginedragons.jpg";

function RegisterPage() {
  YupPassword(Yup);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      gender: "male",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      first_name: Yup.string().required(),
      email: Yup.string().required().email("not an email"),
      password: Yup.string().required().min(5),
    }),
    onSubmit: () => {
      signup();
    },
  });
  const signup = () => {
    const user = formik.values;
    console.log(user);
    if (user.email && user.first_name && user.last_name && user.password) {
      axiosInstance()
        .post("/users", user)
        .then((res) => {
          formik.resetForm();
          alert("registration successful");
          redirect("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* <Image
        src={BackgroundImage}
        alt="background"
        layout="fill"
        objectFit="cover"
        className="absolute"
      /> */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="z-10 p-8 bg-white bg-opacity-90 rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create New Account
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* ... input fields ... */}
          <div className="flex flex-col space-y-4">
            <input
              id="first_name"
              name="first_name"
              type="text"
              onChange={(e) =>
                formik.setFieldValue("first_name", e.target.value)
              }
              value={formik.values.first_name}
              placeholder="First Name"
              className="w-full px-4 py-1 border border-gray-300 rounded-md"
            />
            <div className="my-1 text-red-500">{formik.errors.first_name}</div>

            <input
              id="last_name"
              name="last_name"
              type="text"
              onChange={(e) =>
                formik.setFieldValue("last_name", e.target.value)
              }
              value={formik.values.last_name}
              placeholder="Last Name"
              className="w-full px-4 py-1 border border-gray-300 rounded-md"
            />

            <div className="my-1 text-red-500">{formik.errors.last_name}</div>

            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <div className="my-1 text-red-500">{formik.errors.email}</div>

            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <div className="my-1 text-red-500">{formik.errors.password}</div>

            <select
              id="gender"
              name="gender"
              onChange={(e) => formik.setFieldValue("gender", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white"
            >
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
            </select>
            <div className="my-1 text-red-500">{formik.errors.gender}</div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={formik.handleSubmit}
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/login">
            <span className="text-blue-600 hover:underline cursor-pointer">
              Log in
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
