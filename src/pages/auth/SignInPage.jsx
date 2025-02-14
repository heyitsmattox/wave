import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import supabase from "../../services/supabase-client";
import { useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (fieldValues) => {
    console.log("fieldValues-->", fieldValues)
    console.log("attempting to login with:", {
      email: fieldValues.email,
      password: fieldValues.password,
    });

    const { data, error } = await supabase.auth.signInWithPassword({
      email: fieldValues.email,
      password: fieldValues.password,
    });

    if (error) {
      console.error("Loging error:", error.message);
      return { success: false, error: error.message };
    }

    console.log("Login successful:", data);
    return { success: true, data };
  };

  const handleSubmit = async (fieldValues) => {
    setEmail(fieldValues.email);
    setPassword(fieldValues.password);

    const response = await login(fieldValues);

    if (response.success) {
      console.log("redirecting user");
      navigate("/dashboard");
    } else {
      console.error("Login failed", response.error);
    }
  };

  return (
    <>
      <FormContainer>
        <div className="flex flex-col justify-center items-center">
          <AuthForm
            fields={[
              {
                label: "email",
                type: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
              },
              {
                label: "password",
                type: "password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
              },
            ]}
            submitButtonLabel="sign in"
            onSubmit={handleSubmit}
          />
          <Link to="/sign-up" className="text-blue-600 underline">
            Create an account
          </Link>
        </div>
      </FormContainer>
    </>
  );
};

export default SignInPage;
