import * as React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { ILogin } from "interfaces";
import { useMemo } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      center: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const Login: React.FunctionComponent = () => {
  // validation schema for form error handling
  let validationSchema = useMemo(
    () =>
      yup.object({
        email: yup.string().required("Email is required"),
        password: yup.string().required("Password is required"),
      }),
    []
  );
  let {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(validationSchema),
  });
  // submitting form handler
  let handleLoginForm = (data: ILogin) => {};

  //
  return (
    <>
      <center>
        <div className="section"></div>

        <h5 className="indigo-text">Please, login into your account</h5>
        <div className="section"></div>

        <div className="container">
          <div
            className="z-depth-1 grey lighten-4 row"
            style={{
              display: "inline-block",
              padding: "32px 48px 0px 48px",
              border: "1px solid #EEE",
            }}
          >
            <form className="col s12" onSubmit={handleSubmit(handleLoginForm)}>
              <div className="row">
                <div className="col s12"></div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    type="email"
                    id="email"
                    {...register("email")}
                  />
                  <label htmlFor="email">Enter your email</label>
                  {errors.email && (
                    <span className="helper-text red-text">
                      {errors.email?.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    type="password"
                    id="password"
                    {...register("password")}
                  />
                  <label htmlFor="password">Enter your password</label>
                  {errors.password && (
                    <span className="helper-text red-text">
                      {errors.password?.message}
                    </span>
                  )}
                </div>
                <label style={{ float: "right" }}>
                  <a className="pink-text" href="#!">
                    <b>Forgot Password?</b>
                  </a>
                </label>
              </div>

              <br />
              <center>
                <div className="row">
                  <button
                    type="submit"
                    name="btn_login"
                    className="col s12 btn btn-large waves-effect indigo"
                  >
                    Login
                  </button>
                </div>
              </center>
            </form>
          </div>
        </div>
        <Link href="/register">
          <a>Create account</a>
        </Link>
      </center>

      <div className="section"></div>
      <div className="section"></div>
    </>
  );
};
export default Login;
