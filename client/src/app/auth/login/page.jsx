"use client";
import { useDispatch } from "react-redux";
import { userLogin } from "@/redux/middleware/user";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Spacer,
  Image,
} from "@chakra-ui/react";

function LoginPage() {
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    dispatch(userLogin({ email, password }));
  };

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
        {/* <ChakraLink href="/">
          <Image
            src="/path-to-your-logo.png" 
            alt="Logo"
            htmlWidth="150 px"
            m="0 auto 12px"
          />
        </ChakraLink> */}
        <VStack spacing={6} align="stretch">
          <Heading mb={6} textAlign="center">
            Log in
          </Heading>
          <form onSubmit={login}>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" mb={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Flex justify="flex-end">
              <NextLink href="/auth/forgot-password" passHref>
                <ChakraLink color="blue.600" fontSize="sm">
                  Forgot password?
                </ChakraLink>
              </NextLink>
            </Flex>
            <Button colorScheme="blue" type="submit" w="full" mt={4}>
              Log In
            </Button>
          </form>
          <HStack justify="center">
            <Text fontSize="sm">Don’t have an account?</Text>
            <NextLink href="/auth/register" passHref>
              <ChakraLink color="blue.600" fontSize="sm" fontWeight="medium">
                Register
              </ChakraLink>
            </NextLink>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
}

export default LoginPage;
