import { useSession, signIn } from "next-auth/react";
import React, { useState } from "react";
import { Button } from "@components/index";
import Link from "next/link";
import { useRouter } from "next/router";
import { data } from "@ampt/data";
import { api } from "@ampt/api";
const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { data: session } = useSession();
  //   console.log("Username: ", name);
  //   console.log("Password: ", password);
  const router = useRouter();
  console.log(session);
  //   console.log(session);

  //   const publicApi = api("public").router("/api");

  //   publicApi.get("/hello", async (event) => {
  //     return event.status(200).body({ message: "Hello from the public api!" });
  //   });

  const save_user = async (user) => {
    // await data.set("user", user);
    // user = JSON.stringify(user) as string;
    const { name, email, image } = user;
    await fetch("http://localhost:3000/api/data", {
      method: "POST",
      body: JSON.stringify(session?.user),
    });
  };

  if (session?.user) {
    // const test = await data.set("user", "session?.user");
    save_user(session?.user);
    router.replace("/home");
  }
  return (
    <div className="container">
      <div className="inner-container">
        <h3 className="login-title">Sign Up</h3>
        <div className="form-container">
          <form action="" className="form">
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input
                type="text"
                id="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="example@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input
                type="text"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
            </div>
            <Button
              title="sign in"
              btnType="submit"
              handleClick={(e) => {
                e.preventDefault();
              }}
            />
          </form>
        </div>

        <div style={{ border: "2px" }}>OR</div>
        <button onClick={() => signIn()} className="google-btn">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 256 262"
          >
            <path
              fill="#4285F4"
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            ></path>
            <path
              fill="#34A853"
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            ></path>
            <path
              fill="#FBBC05"
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
            ></path>
            <path
              fill="#EB4335"
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            ></path>
          </svg> */}
          <span>Continue with Google</span>
        </button>
        {/* <Button icon="" title="use google" /> */}
        <div>
          <p className="auth">
            Already have an account?{" "}
            <Link href={"/"} className="auth-link">
              Sign In
            </Link>{" "}
            Now!.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
