import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

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
    <div className="body">
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
          .body {
            background-image: url("https://i.ibb.co/nDJFmsp/day-859-sketch.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .login-form {
            width: 100%;
            max-width: 420px;
            margin: 70px auto 0px auto;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            border-radius: 4px;
            box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);
            padding: 35px 25px 0px 25px;
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

      <div className="container bg-black/50">
        <div className="login-form bg-black/50">
          <form>
            <h3>Log in with</h3>
            <div className="social-login ">
              <div
                className="social-icon hover:cursor-pointer border"
                onClick={() => {
                  const signin = signIn();
                }}
              >
                <img
                  src="https://freesvg.org/img/1534129544.png"
                  className="google"
                />{" "}
                Google
              </div>
              <div className="social-icon flex border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="facebook"
                >
                  <path
                    fill="currentColor"
                    d="M8 2H1l8.26 11.014L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z"
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
                  disabled={true}
                  placeholder="Enter email address"
                  // autocomplete="nope"
                />
              </div>
              <div className="input-field">
                {/* <label for="password">Password</label> */}
                <input
                  id="password"
                  type="password"
                  disabled={true}
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="action">
              <button type="button">Log in</button>
            </div>
          </form>
        </div>
      </div>
      {/* <div>
        <h2 className="singup">
          Dont have an account?{" "}
          <span>
            <a href="#">Sign up</a>
          </span>
        </h2>
      </div> */}
    </div>
  );
};

export default Login;
