import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";
import * as userService from "../../services/users";
import supabase from "../../services/supabase-client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";






const SignUpPage = () => {

  const navigate = useNavigate();


  const [session, setSession ] = useState(null);

  useEffect(() => {
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session)

      if(!session) {
        console.log('no active session...redirecting.')
        navigate('/sign-up')
      }
    };


    getInitialSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        if(session) {
          console.log('user session data', session);
          navigate('/dashboard')
        } else {
          navigate("/sign-up")
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };

  }, [navigate])

  // useEffect(() => {
  //   (async () => {
  //     supabase.auth.getSession().then(( { data: { session } }) => {
  //       setSession(session);
  //     })
  //     if(session) {
  //       console.log('session data -->', session)
  //       navigate('/dashboard')
  //     }
  //   })();

  // });



  const handleSubmit = async (fieldValues) => {
    try {
      await userService.creatingAccount(fieldValues);
      console.log("Account created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
    }
    //TODO - LOOK INTO THE NAVIGATION OF WHEN THE USER CREATES AN ACCOUNT. 
    // if(session.access_token) {
    //   console.log('our session', session)
    //   navigate("/dashboard")
    // }
  };



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
            submitButtonLabel="Create an account"
            onSubmit={handleSubmit}
            
            />
          <Link to="/" 
          className="text-blue-600 underline">
            Sign in
          </Link>
        </div>
      </FormContainer>
    </>
  );
};

export default SignUpPage





// import { Link } from "react-router-dom";
// import AuthForm from "./AuthForm";
// import FormContainer from "./FormContainer";



// const SignUpPage = () => {




//   return (
//     <>
//       <FormContainer>
//         <div className="flex flex-col justify-center items-center">
//           <AuthForm
//             fields={[
//               {
//                 label: "username",
//                 type: "text",
//               },
//               {
//                 label: "password",
//                 type: "password",
//               },
//               {
//                 label: "confirm password",
//                 type: "password",
//               },
//             ]}
//             submitButtonLabel="create account"
            
//           />
//           <Link to="/" className="text-blue-600 underline">
//             Sign in
//           </Link>
//         </div>
//       </FormContainer>
//     </>
//   );
// };

// export default SignUpPage;