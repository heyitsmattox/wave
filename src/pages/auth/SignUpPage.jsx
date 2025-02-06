import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center">
       <AuthForm 
      fields={[
        {
          label: 'username',
          type: 'text',
        },
        {
          label: 'password',
          type: 'password',
        },
        {
          label: 'confirm password',
          type: 'password'
        }
      ]}
      submitButtonLabel='create account'
    
      />
      <Link to='/'>Sign in</Link>
    </div>
  )

};

export default SignUpPage;