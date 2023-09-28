"use client";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { data: session } = useSession();
  const router = useRouter();
  //   console.log("Username: ", name);s

  if (session?.user) {
    router.replace("/home");
  }
  return (
    // <div className="container">
    //   <div className="inner-container">
    //     <h3 className="login-title">Sign In</h3>
    //     <div className="form-container">
    //       <form action="" className="form">
    //         <div className="form-group">
    //           <label htmlFor="username">username</label>
    //           <input
    //             type="text"
    //             id="username"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             placeholder="example@email.com"
    //           />
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="password">password</label>
    //           <input
    //             type="password"
    //             id="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             placeholder="password"
    //           />
    //         </div>
    //         <Button
    //           title="sign in"
    //           btnType="submit"
    //           handleClick={(e) => {
    //             e.preventDefault();
    //           }}
    //         />
    //       </form>
    //     </div>

    //     <div style={{ border: "2px" }}>OR</div>
    //     <button
    //       onClick={() => {
    //         const signin = signIn();
    //         console.log("Sign::: ", signin);
    //       }}
    //       className="google-btn"
    //     >
    //       {/* <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="2em"
    //         height="2em"
    //         viewBox="0 0 256 262"
    //       >
    //         <path
    //           fill="#4285F4"
    //           d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
    //         ></path>
    //         <path
    //           fill="#34A853"
    //           d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
    //         ></path>
    //         <path
    //           fill="#FBBC05"
    //           d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
    //         ></path>
    //         <path
    //           fill="#EB4335"
    //           d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
    //         ></path>
    //       </svg> */}
    //       <span>Continue with Google</span>
    //     </button>
    //     {/* <Button icon="" title="use google" /> */}
    //     <div>
    //       <p className="auth">
    //         Dont have an account?{" "}
    //         <Link href={"/sign-up"} className="auth-link">
    //           Sign Up
    //         </Link>{" "}
    //         Now!.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div>
      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
          }

          .container {
            padding: 0px 30px;
          }
          body {
            background: #342d3c;
            font-family: Montserrat;
            background-image: url("https://i.ibb.co/nDJFmsp/day-859-sketch.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .login-form {
            background: #302938;
            width: 100%;
            max-width: 420px;
            margin: 70px auto 0px auto;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            border-radius: 4px;
            box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);
            padding: 35px 25px;
          }

          .login-form h3 {
            text-align: center;
            padding-bottom: 20px;
            font-weight: 600;
            color: white;
          }
          .social-login {
            display: flex;
            justify-content: center;
            justify-items: center;
            padding-top: 8px;
          }
          .social-icon {
            background-color: #352e3d;
            color: white;
            display: flex;
            justify-content: center;
            justify-items: center;
            padding: 15px 5px;
            width: 100%;
            border-radius: 5px;
            margin-right: 15px;
          }
          .google,
          .facebook {
            height: 20px;
            margin-right: 7px;
          }
          .or {
            color: white;
            text-align: center;
            font-size: 15px;
            margin-left: -15px;
            padding: 20px 10px 0px;
          }

          .content {
            margin-top: 20px;
          }

          .login-form .input-field input {
            font-size: 16px;
            border-radius: 3px;
            width: 100%;
            padding: 15px 12px;
            border: 0;
            margin-top: 8px;
            outline: none;
          }
          .input-field {
            margin: 18px 0px;
          }

          .login-form .action button {
            width: 100%;
            border: none;
            padding: 18px;
            cursor: pointer;
            background: #8e80f5;
            color: #fff;
            border-radius: 6px;
            margin-top: 10px;
            font-size: 15px;
            font-style: normal;
          }

          label {
            color: white;
            padding-bottom: 0px;
            padding: 20px 0px;
          }

          .singup {
            text-align: center;
            margin: 20px auto;
            color: #fff;
            font-size: 15px;
          }
          .singup a {
            color: #673ab7;
            text-decoration: none;
          }
        `}
      </style>

      <body>
        <div className="container">
          <div className="login-form">
            <form>
              <h3>Log in with</h3>
              <div className="social-login">
                <div
                  className="social-icon"
                  onClick={() => {
                    const signin = signIn();
                    console.log("Sign::: ", signin);
                  }}
                >
                  <img
                    src="https://freesvg.org/img/1534129544.png"
                    className="google"
                  />
                  Google
                </div>
                <div className="social-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="facebook"
                    viewBox="0 0 486.037 1000"
                  >
                    <path
                      fill="#4267b2"
                      d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000H124.074"
                    ></path>
                  </svg>
                  Twitter
                </div>
              </div>
              <h2 className="or">Or</h2>
              <div className="content">
                <div className="input-field">
                  {/* <label for="email">Email</label> */}
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    // autocomplete="nope"
                  />
                </div>
                <div className="input-field">
                  {/* <label for="password">Password</label> */}
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="action">
                <button>Log in</button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <h2 className="singup">
            Dont have an account?{" "}
            <span>
              <a href="#">Sign up</a>
            </span>
          </h2>
        </div>
      </body>
    </div>
  );
};

export default Login;
