import Link from "next/link";
import React from "react";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="blue darken-4">
      <div className="nav-wrapper">
        <div className="container">
          <Link href="/">
            <a className="brand-logo">Blan</a>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a>Signup</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
