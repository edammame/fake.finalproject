// File: pages/auth/forgotpassword.js
"use client";
import { axiosInstance } from "@/axios/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

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
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="z-10 p-8 bg-white bg-opacity-90 rounded-2xl shadow-xl max-w-md w-full">
        <h2 className="text-4xl font-bold mb-4 text-center">Forgot Password</h2>
        <form className="space-y-6" onSubmit={forgotPassword}>
          <div className="space-y-1">
            <label htmlFor="email" className="font-bold"></label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              className="w-full p-3 rounded-lg border border-gray-300"
              placeholder="Email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
          >
            Send Reset Link
          </button>
        </form>
        <div className="flex flex-col items-center justify-between mt-4 text-xs">
          <Link href="/auth/login">
            <span className="text-blue-600 hover:underline cursor-pointer">
              Back to login
            </span>
          </Link>
          <Link href="/auth/register">
            <span className="text-blue-600 hover:underline cursor-pointer mt-2">
              Create an account?
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
