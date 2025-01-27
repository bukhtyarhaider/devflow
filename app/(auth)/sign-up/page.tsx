"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";
import React from "react";

const SignUp = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={SignUpSchema}
      defaulValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(values) => Promise.resolve({ success: true, values })}
    />
  );
};

export default SignUp;
