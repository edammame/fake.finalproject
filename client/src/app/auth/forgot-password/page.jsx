// File: pages/auth/forgotpassword.js
"use client";
import { axiosInstance } from "@/axios/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

function ForgotPasswordPage() {
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Sesuaikan dengan endpoint API Anda
  //     const response = await axios.post("/api/auth/forgot-password", { email });
  //     setMessage(response.data.message);
  //   } catch (error) {
  //     setMessage("An error occurred. Please try again later.");
  //   }
  // };
  const router = useRouter();
  function forgotPassword() {
    const email = document.getElementById("email").value;

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
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md p-8 flex flex-col items-center bg-white bg-opacity-90 shadow-xl rounded-2xl">
        <Typography variant="h4" color="blue-gray" className="mb-4 text-center">
          Forgot Password
        </Typography>
        <form onSubmit={forgotPassword} className="w-full space-y-5">
          <Typography variant="h6" color="black" className="mb-1">
            Email
          </Typography>
          <Input
            id="email"
            type="email"
            color="lightBlue"
            size="lg"
            outline={true}
            placeholder="name@mail.com"
            className="mb-4"
          />
          <Button type="submit" color="blue" fullWidth className="mb-4">
            Send Reset Link
          </Button>
        </form>
        <Typography className="mt-4 text-sm text-center">
          <Link href="/auth/login">
            <span className="text-lightBlue-600 cursor-pointer hover:underline">
              Back to login
            </span>
          </Link>
        </Typography>
        <Typography className="text-sm text-center">
          <Link href="/auth/register">
            <span className="text-lightBlue-600 cursor-pointer hover:underline">
              Create an account?
            </span>
          </Link>
        </Typography>
      </Card>
    </div>
  );
}

export default ForgotPasswordPage;
