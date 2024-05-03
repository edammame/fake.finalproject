"use client";
import { useDispatch } from "react-redux";
import { userLogin } from "@/redux/middleware/user";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

function LoginPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    dispatch(userLogin({ email, password }));
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Log In
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log in</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <form onSubmit={login}>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password">
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
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Text fontSize="sm">Don’t have an account?</Text>
            <NextLink href="/auth/register" passHref>
              <ChakraLink color="blue.600" fontSize="sm" fontWeight="medium">
                Register
              </ChakraLink>
            </NextLink>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginPage;
