import AuthForm from "./AuthForm";
const SignInPage = () => {
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
        }
      ]}
      />
    </div>
  )

};

export default SignInPage;