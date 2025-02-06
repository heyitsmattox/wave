import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <>
      <FormContainer />

      <div className="flex justify-center items-center">
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
      </div>
      <Link to='/sign-up'>Create an account</Link>
    </>
  );
};

export default SignInPage;
