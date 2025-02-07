import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
const SignUpPage = () => {
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
              {
                label: "confirm password",
                type: "password",
              },
            ]}
            submitButtonLabel="create account"
          />
          <Link to="/" className="text-blue-600 underline">
            Sign in
          </Link>
        </div>
      </FormContainer>
    </>
  );
};

export default SignUpPage;
