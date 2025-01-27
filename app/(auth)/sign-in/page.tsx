"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";
import React from "react";

const SignIn = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={SignInSchema}
      defaulValues={{ email: "", password: "" }}
      onSubmit={(values) => Promise.resolve({ success: true, values })}
    />
  );
};

export default SignIn;
