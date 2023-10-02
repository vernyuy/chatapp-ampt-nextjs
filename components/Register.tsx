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
  const router = useRouter();
  console.log(session);

  const save_user = async (user) => {
    const { name, email, image } = user;
    await fetch("http://localhost:3000/api/users/user", {
      method: "POST",
      body: JSON.stringify(session?.user),
    });
  };

  if (session?.user) {
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
          <span>Continue with Google</span>
        </button>
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
