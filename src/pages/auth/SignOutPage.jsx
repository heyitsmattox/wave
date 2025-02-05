import AuthForm from "./AuthForm";
const SignOutPage = () => {
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
      />
    </div>
  )

};

export default SignOutPage;