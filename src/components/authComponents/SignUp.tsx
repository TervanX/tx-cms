"use client";
import { useState } from "react";
import Button from "../reusable/Button";
import { Loader } from "lucide-react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = () => {
    if (!email || loading) return;

    console.log("Email submitted:", email);
    setLoading(true);
    setMessage("");

    // Simulate API call
    setTimeout(() => {
      setMessage("User not found with this email");
      setLoading(false);

      // Clear message after 5 seconds
      setTimeout(() => setMessage(""), 5000);
    }, 3000);
  };

  return (
    <div className="relative grid gap-3 mx-0 md:mx-6 lg:grid-cols-[2fr_1fr]">
      {/* Left Column - Sign Up Form */}
      <div className="z-10 flex min-h-[688px] items-center justify-center rounded-lg px-5 py-10 bg-white">
        <div className="relative h-auto overflow-hidden p-0 md:flex md:h-auto md:items-center">
          <div className="mx-auto max-w-[436px] md:mx-0">
            {/* Heading */}
            <h1 className="text-3xl lg:text-4xl tracking-tight text-center antialiased">
              Welcome back to Layer X <br />
              Secure Login
            </h1>

            <p className="text-[16px] lg:text-[18px] leading-[130%] text-gray-700 mb-6 mt-6 text-center md:text-left antialiased">
              Sign in to your account to access trading infrastructure, treasury
              management, and embedded wallet solutions.
            </p>

            {/* Form Container */}
            <div className="lg:min-w-[436px]">
              <div className="flex w-full max-w-xl flex-col gap-6">
                {/* Terms Notice */}
                <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-2">
                  <p className="text-[12px] leading-[130%] text-gray-700 antialiased">
                    By signing up, I agree to LayerX&apos;s{" "}
                    <a
                      className="underline"
                      target="_blank"
                      href="/security/terms"
                      rel="noopener noreferrer"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      className="underline"
                      target="_blank"
                      href="/security/policy"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>

                {/* Error Message */}
                {message && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                    <p className="text-[14px] leading-[130%] text-red-700 antialiased">
                      {message}
                    </p>
                  </div>
                )}

                {/* Email Input and Submit */}
                <div className="flex items-center gap-4 flex-col lg:flex-row">
                  <div className="relative flex flex-col w-full max-w-none">
                    <div className="flex items-center rounded-lg bg-white h-[48px] px-3 border border-gray-300 focus-within:border-black hover:border-gray-400 hover:focus-within:border-black transition-colors">
                      <input
                        placeholder="Enter email"
                        className="w-full bg-transparent focus:outline-none text-[16px] leading-[130%] text-gray-700 placeholder-gray-400"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyPress={(e) =>
                          e.key === "Enter" && handleEmailSubmit()
                        }
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <Button
                    type="button"
                    onClick={handleEmailSubmit}
                    disabled={!email || loading}
                    className="group rounded-lg transition-all h-12 px-5 bg-black text-white disabled:bg-gray-200 hover:bg-gray-700 active:bg-black focus:bg-black focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black w-full whitespace-nowrap lg:w-auto disabled:cursor-not-allowed"
                  >
                    <div className="flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <Loader className="h-4 w-4 animate-spin" />
                          <p className="text-[16px] leading-[130%]">Continue</p>
                        </>
                      ) : (
                        <p className="text-[16px] leading-[130%]">Continue</p>
                      )}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Video */}
      <div className="hidden lg:flex relative min-h-[300px] sm:min-h-[400px] lg:min-h-[688px] overflow-hidden rounded-lg bg-gray-200">
        <div className="relative h-full w-full">
          <img
            src="https://res.cloudinary.com/dx1etzf66/image/upload/v1761889068/signup_urir3n.jpg"
            alt="Secure login illustration"
            className="absolute inset-0 h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
