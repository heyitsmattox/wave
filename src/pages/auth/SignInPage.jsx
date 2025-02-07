import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <>
      <FormContainer>
        <div className="flex flex-col justify-center items-center">
          <AuthForm
            fields={[
              {
                label: "username",
                type: "text",
              },
              {
                label: "password",
                type: "password",
              },
            ]}
            submitButtonLabel="sign in"
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
