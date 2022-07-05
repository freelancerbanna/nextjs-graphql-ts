import * as React from "react";
import Link from "next/link";
import Image from "next/image";

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
  // submitting form handler
  let handleLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
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
            <form className="col s12" onSubmit={handleLoginForm}>
              <div className="row">
                <div className="col s12"></div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    type="email"
                    name="email"
                    id="email"
                  />
                  <label htmlFor="email">Enter your email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    type="password"
                    name="password"
                    id="password"
                  />
                  <label htmlFor="password">Enter your password</label>
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
