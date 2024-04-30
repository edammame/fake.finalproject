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
  HStack,
  VStack,
  Link as ChakraLink,
  Box,
  Text,
} from "@chakra-ui/react";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useFormik } from "formik";
import NextLink from "next/link";
import Link from "next/link";
import { useEffect, useState } from "react";
import { axiosInstanceSSR } from "@/axios/axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function PasswordChangerComponent({ token }) {
  const router = useRouter();

  YupPassword(Yup);
  const toast = useToast();
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const inputFormik = () => {
    formik.setValues({
      password: document.getElementById("password").value,
      confirmPassword: document.getElementById("confirmPassword").value,
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      password: Yup.string().min(5).minNumbers(1).required().minUppercase(1),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "password does not match"),
    }),
    async onSubmit(values) {
      try {
        const { password } = values;
        const res = await axiosInstanceSSR().patch(
          "/users/v4",
          { password },
          {
            headers: {
              Authorization: token,
            },
          }
        );
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
    const { password, confirmPassword } = formik.values;
    if (password && confirmPassword) formik.handleSubmit();
  }, [formik.values]);
  return (
    <>
      <Flex align="center" justify="center" h="100vh" p={8} bg="gray.100">
        <Box
          w="full"
          maxW="md"
          p={8}
          boxShadow="xl"
          borderRadius="lg"
          bg="white"
        >
          <VStack spacing={6} align="stretch">
            <Heading mb={6} textAlign="center">
              Change Password
            </Heading>
            <form onSubmit={formik.handleSubmit}>
              <FormControl id="password" mb={4}>
                <FormLabel>New Password</FormLabel>
                <Input
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <FormHelperText color="red">
                  {formik.errors.password}
                </FormHelperText>
              </FormControl>

              <FormControl id="confirmPassword" mb={4}>
                <FormLabel>Confirm Password </FormLabel>
                <Input
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                />
                <FormHelperText color={"red"}>
                  {formik.errors.confirmPassword}
                </FormHelperText>
              </FormControl>

              <Button
                colorScheme="blue"
                type="submit"
                onClick={inputFormik}
                w="full"
                mt={4}
              >
                Change Password
              </Button>
            </form>
            <HStack justify="center" mt={4}>
              <Text fontSize="sm">Already have an account?</Text>
              <NextLink href="/auth/login" passHref>
                <ChakraLink color="blue.600" fontSize="sm" fontWeight="medium">
                  Login
                </ChakraLink>
              </NextLink>
            </HStack>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}
export default PasswordChangerComponent;
