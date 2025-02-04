import AuthForm from "./AuthForm";
const SignOutPage = () => {
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
        },
        {
          label: 'confirm password',
          type: 'password'
        }
      ]}
      />
    </>
  )

};

export default SignOutPage;