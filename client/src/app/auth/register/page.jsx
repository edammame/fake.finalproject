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
  Box,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { Form, useFormik } from "formik";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
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
    <Flex align="center" justify="center" h="100vh" p={8}>
      <Box
        w="full"
        maxW="md"
        p={8}
        boxShadow="2xl"
        borderRadius="lg"
        bg="white"
      >
        <VStack spacing={4} align="stretch">
          <Heading mb={6} textAlign="center">
            Register
          </Heading>

          <FormControl id="email">
            <FormLabel>First Name</FormLabel>
            <Input type="text" id="first_name" />
            <FormHelperText color={"red"}>{formik.errors.name}</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" id="last_name" />
            <FormHelperText color={"red"}>{formik.errors.name}</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" id="email" />
            <FormHelperText color={"red"}>{formik.errors.email}</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup onChange={setGender} value={gender}>
              <Stack direction="row">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Password </FormLabel>
            <Input type="password" id="password" />
            <FormHelperText color={"red"}>
              {formik.errors.password}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password </FormLabel>
            <Input type="password" id="confirmPassword" />
            <FormHelperText color={"red"}>
              {formik.errors.confirmPassword}
            </FormHelperText>
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            w="full"
            mt={4}
            onClick={inputFormik}
          >
            Register
          </Button>
          <HStack justify="center">
            <Text fontSize="sm">Have an account ?</Text>
            <NextLink href="/auth/login" passHref>
              <ChakraLink color="blue.600" fontSize="sm" fontWeight="medium">
                Login
              </ChakraLink>
            </NextLink>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
}
export default RegisterPage;
