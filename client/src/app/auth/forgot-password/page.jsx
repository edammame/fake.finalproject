/** @format */
"use client";
import { axiosInstance } from "@/axios/axios";
import React, { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import {
  Flex,
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";

function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function forgotPassword() {
    axiosInstance()
      .get("/users/v2", {
        params: { email },
      })
      .then((res) =>
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
        }).then(function () {
          router.push("/auth/login");
        })
      )
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err?.response?.data?.message,
          icon: "error",
          timer: 2000,
          showConfirmButton: false,
        });

        return err.message;
      });
  }
  return (
    <Flex align="center" justify="center" h="100vh" p={8}>
      <Box
        w="full"
        maxW="sm"
        p={6}
        boxShadow="2xl"
        borderRadius="lg"
        bg="white"
      >
        <VStack spacing={4} align="stretch">
          <Heading mb={6} textAlign="center">
            Forgot Password
          </Heading>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              forgotPassword();
            }}
          >
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="blue" onClick={forgotPassword} w="full" mt={4}>
              Send Reset Link
            </Button>
          </form>
          <HStack justifyContent="center" spacing={1} mt={1}>
            <Text fontSize="sm">Have an account?</Text>
            <NextLink href="/auth/login" passHref>
              <ChakraLink color="blue.600" fontSize="sm">
                Login
              </ChakraLink>
            </NextLink>
          </HStack>
          <HStack justifyContent="center" mt={1} spacing={1}>
            <Text fontSize="sm">Create an account?</Text>
            <NextLink href="/auth/register" passHref>
              <ChakraLink color="blue.600" fontSize="sm">
                Register
              </ChakraLink>
            </NextLink>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
}

export default Page;
