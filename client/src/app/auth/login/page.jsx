"use client";
import { useDispatch } from "react-redux";
import { userLogin } from "@/redux/middleware/user";
import Link from "next/link";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

function LoginPage() {
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    dispatch(userLogin({ email, password }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md p-8 flex flex-col items-center">
        <Typography variant="h4" color="blue-gray" className="text-center mb-4">
          Log in
        </Typography>
        <form onSubmit={login} className="w-full">
          <Typography variant="h6" color="blue-gray" className="mb-3">
            Email
          </Typography>
          <Input
            id="email"
            type="email"
            size="lg"
            placeholder="name@mail.com"
            className="mb-4"
            labelProps={{ className: "before:content-none after:content-none" }}
          />
          <Typography variant="h6" color="blue-gray" className="mb-3">
            Password
          </Typography>
          <Input
            id="password"
            type="password"
            size="lg"
            placeholder="********"
            className="mb-4"
            labelProps={{ className: "before:content-none after:content-none" }}
          />
          <Link href="/auth/forgot-password">
            <Typography
              variant="small"
              color="gray"
              className="cursor-pointer hover:underline text-right mb-4"
            >
              Forgot password?
            </Typography>
          </Link>
          <Button type="submit" color="blue" fullWidth className="mb-4">
            Log In
          </Button>
        </form>
        <Typography color="gray" className="text-center text-sm">
          Don't have an account?{" "}
          <Link href="/auth/register">
            <Typography
              as="span"
              variant="small"
              color="blue"
              className="font-medium cursor-pointer hover:underline"
            >
              Register
            </Typography>
          </Link>
        </Typography>
      </Card>
    </div>
  );
}

export default LoginPage;
