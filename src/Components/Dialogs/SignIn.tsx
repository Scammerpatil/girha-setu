"use client";
import axios, { AxiosResponse } from "axios";
import { Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import SignUp from "./SignUp";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";

const SignIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useAuth();

  const handleSignIn = async () => {
    try {
      const res = axios.post("/api/auth/login", data);
      toast.promise(res, {
        loading: "Signing in...",
        success: (data: AxiosResponse) => {
          console.log(data.data.message);
          router.push(data.data.route);
          setUser(data.data.exisitingUser);
          return data.data.message;
        },
        error: (error: unknown) => {
          return error.toString();
        },
      });
    } catch (error: unknown) {
      toast.error(`Failed to logout, ${String(error)}`);
    }
  };
  return (
    <>
      <dialog id="login" className="modal w-screen max-w-none">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 border-base-content cursor-pointer"
              onClick={() => {
                (document.getElementById("login") as HTMLDialogElement).close();
              }}
            >
              <X />
            </button>
            <section className="relative z-10 overflow-hidden">
              <div className="container">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="mx-auto max-w-[500px] rounded bg-base px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                      <h3 className="mb-3 text-center text-2xl font-bold text-base-conten sm:text-3xl">
                        Sign in to your account
                      </h3>
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm text-base-content"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="identifier"
                          value={data.email}
                          onChange={(e) => {
                            setData({ ...data, email: e.target.value });
                          }}
                          placeholder="Enter your Email"
                          className="w-full rounded-sm border border-stroke px-6 py-3 outline-none transition-all duration-300 focus:border-primary bg-base-200 text-base-content"
                        />
                      </div>
                      <div className="mb-4 relative">
                        <label className="mb-3 block text-sm text-base-content">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={data.password}
                            onChange={(e) =>
                              setData({
                                ...data,
                                password: e.target.value,
                              })
                            }
                            className="w-full rounded-sm border border-stroke px-6 py-3 outline-none transition-all duration-300 focus:border-primary bg-base-200 text-base-content"
                            placeholder="Enter Password"
                            required
                          />
                          <span
                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-base-content"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff size={20} />
                            ) : (
                              <Eye size={20} />
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
                        <div className="mb-4 sm:mb-0">
                          <label
                            htmlFor="checkboxLabel"
                            className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
                          >
                            <div className="relative">
                              <input
                                type="checkbox"
                                id="checkboxLabel"
                                className="sr-only"
                              />
                              <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20">
                                <span className="opacity-0">
                                  <svg
                                    width="11"
                                    height="8"
                                    viewBox="0 0 11 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                      fill="currentColor"
                                      stroke="currentColor"
                                      strokeWidth="0.4"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            Keep me signed in
                          </label>
                        </div>
                        <div>
                          <a
                            href="#0"
                            className="text-sm font-medium text-primary hover:underline"
                          >
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                      <div className="mb-6">
                        <button
                          className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-primary-content shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                          onClick={handleSignIn}
                        >
                          Sign in
                        </button>
                      </div>
                      <p className="text-center text-base font-medium text-body-color">
                        Don&apos;t you have an account?{" "}
                        <button
                          className="text-primary hover:underline"
                          onClick={() => {
                            (
                              document.getElementById(
                                "login"
                              ) as HTMLDialogElement
                            ).close();
                            (
                              document.getElementById(
                                "signup"
                              ) as HTMLDialogElement
                            ).showModal();
                          }}
                        >
                          Sign up
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-0 z-[-1]">
                <svg
                  width="1440"
                  height="969"
                  viewBox="0 0 1440 969"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_95:1005"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="1440"
                    height="969"
                  >
                    <rect width="1440" height="969" fill="#090E34" />
                  </mask>
                  <g mask="url(#mask0_95:1005)">
                    <path
                      opacity="0.1"
                      d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                      fill="url(#paint0_linear_95:1005)"
                    />
                    <path
                      opacity="0.1"
                      d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                      fill="url(#paint1_linear_95:1005)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_95:1005"
                      x1="1178.4"
                      y1="151.853"
                      x2="780.959"
                      y2="453.581"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="currentColor" />
                      <stop
                        offset="1"
                        stopColor="currentColor"
                        stopOpacity="0"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_95:1005"
                      x1="160.5"
                      y1="220"
                      x2="1099.45"
                      y2="1192.04"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="currentColor" />
                      <stop
                        offset="1"
                        stopColor="currentColor"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </section>
          </form>
        </div>
      </dialog>
      <SignUp />
    </>
  );
};
export default SignIn;
