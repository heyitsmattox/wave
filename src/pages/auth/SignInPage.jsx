import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const SignInPage =  () => {
  const location = useLocation();
  const fieldValues = location.state?.fieldValues || {};


  console.log('signInPage', fieldValues)


// LEFT OFF HERE

const navigate = useNavigate()

// LEFT OFF HERE

const handleSignIn = async () => {
 if(Object.keys(fieldValues).length === 0) {
  console.log('object is empty and will not redirect')
  return null
 } else {
  navigate("/dashboard")
 }
}




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
            onSubmit={handleSignIn}
            />
          <Link to="/sign-up" 
          className="text-blue-600 underline">
            Create an account
          </Link>
        </div>
      </FormContainer>
    </>
  );
};

export default SignInPage
