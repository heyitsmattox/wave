import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";
import * as userService from "../../services/users";
import supabase from "../../services/supabase-client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [error, setError] = useState("")

  useEffect(() => {
   const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);

      if (!session) {
        console.log("no active session...redirecting.");
        navigate("/sign-up");
      }
    };

    getInitialSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        if (session) {
          console.log("user session data", session);
          navigate("/dashboard");
        } else {
          navigate("/sign-up");
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);


  return (
    <>
      <FormContainer>
        <div className="text-rose-400 font-lato">{error}</div>
          <AuthForm
            fields={[
              {
                label: "email",
                type: "text",
              },
              {
                label: "password",
                type: "password",
              },
              {
                label: "confirm password",
                type: "password",
              },
            ]}
            submitButtonLabel="Create an account"
            onSubmit={async (fieldValues) => {
              if(!fieldValues.email.includes("@")) {
                setError("Oops! It looks like your email is missing an '@' symbol. Please check and try again.");
                return;
              }
             if(fieldValues.email.length < 5 ) {
                setError("Hmm...that email looks too short. Make sure it is at least 5 characters in length.");
                return;
              }
             if(fieldValues.password.length < 5) {
                setError("Password must be at least 6 characters long")
                return;
              }
              if(fieldValues.password !== fieldValues['confirm password']) {
                setError('Passwords do not match. Please try again.')
                return;
              } 

              const response =  await userService.creatingAccount(fieldValues);
              if(response.status === 201) {
                setError("")
                navigate("/dashboard", {
                  state: { 
                    accountCreated: true,
                    fieldValues
                  },
                });
              } else {
                const data = await response.json();
                setError(data.error)
              }
            }}
          />
          <Link to="/" className="text-blue-600 underline">
            Sign in
          </Link>   
      </FormContainer>
    </>
  );
};

export default SignUpPage;

