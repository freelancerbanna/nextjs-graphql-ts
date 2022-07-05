import { Layout, LoginComponent } from "components";
import { NextPage } from "next";
import React from "react";

const Login: NextPage = () => {
  return (
    <Layout>
      <LoginComponent />
    </Layout>
  );
};

export default Login;
