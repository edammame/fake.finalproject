/** @format */
"use client";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Center,
  Heading,
  Flex,
  Button,
  useToast,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useFormik } from "formik";
import Link from "next/link";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/axios/axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function RegisterPage() {
  const [gender, setGender] = useState("male");
  const router = useRouter();

  YupPassword(Yup);
  const toast = useToast();
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    first_name: "",
    last_name: "",
    gender: "male",
  };

  const inputFormik = () => {
    formik.setValues({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      confirmPassword: document.getElementById("confirmPassword").value,
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      gender: gender,
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      email: Yup.string().required().email(),
      first_name: Yup.string().required().min(4),
      last_name: Yup.string().required().min(4),
      gender: Yup.string(),
      password: Yup.string().min(5).minNumbers(1).required().minUppercase(1),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "password does not match"),
    }),
    async onSubmit(values) {
      try {
        const { email, password, first_name, last_name, gender } = values;
        const res = await axiosInstance().post("/users/", {
          email,
          password,
          first_name,
          last_name,
          gender,
        });
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
        }).then(function () {
          router.push("/auth/login");
        });
      } catch (error) {
        toast({
          title: "Error",
          position: "top",

          description: error?.response?.data?.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    },
  });

  useEffect(() => {
    const { email, password, confirmPassword, first_name, last_name } =
      formik.values;
    if (email && password && confirmPassword && first_name && last_name)
      formik.handleSubmit();
  }, [formik.values]);

  return (
    <>
      <Flex className=" max-w-96 w-full flex-col gap-2 ">
        <Heading> Register</Heading>
        <FormControl className="flex flex-col gap-2">
          <div>
            <FormLabel>First Name</FormLabel>
            <Input type="text" id="first_name" />
            <FormHelperText color={"red"}>{formik.errors.name}</FormHelperText>
          </div>
          <div>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" id="last_name" />
            <FormHelperText color={"red"}>{formik.errors.name}</FormHelperText>
          </div>
          <div>
            <FormLabel>Email address</FormLabel>
            <Input type="email" id="email" />
            <FormHelperText color={"red"}>{formik.errors.email}</FormHelperText>
          </div>
          <div>
            <FormLabel>Gender</FormLabel>
            <RadioGroup onChange={setGender} value={gender}>
              <Stack direction="row">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Stack>
            </RadioGroup>
          </div>

          <div>
            <FormLabel>Password </FormLabel>
            <Input type="password" id="password" />
            <FormHelperText color={"red"}>
              {formik.errors.password}
            </FormHelperText>
          </div>
          <div>
            <FormLabel>Confirm Password </FormLabel>
            <Input type="password" id="confirmPassword" />
            <FormHelperText color={"red"}>
              {formik.errors.confirmPassword}
            </FormHelperText>
          </div>
        </FormControl>
        <div>
          Have an account ?{" "}
          <Link href="/auth/login" className="text-[#4F46E5] font-bold">
            Login
          </Link>
        </div>
        <Button type="button" colorScheme={"facebook"} onClick={inputFormik}>
          Register
        </Button>
      </Flex>
    </>
  );
}
export default RegisterPage;
