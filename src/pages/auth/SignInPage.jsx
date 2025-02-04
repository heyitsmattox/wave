import AuthForm from "./AuthForm";
const SignInPage = () => {
  return (
    <>
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
    </>
  )

};

export default SignInPage;