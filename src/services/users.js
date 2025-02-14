import supabase from "./supabase-client";


export const creatingAccount = async (fieldValues) => {


  console.log("Submitting with the Field values:", fieldValues);
  
  const { data, error } = await supabase.auth.signUp({
    email: fieldValues.username,
    password: fieldValues.password
  });  
  if (error) {
    console.error("Error signing up:", error.message);
  } else {
    console.log("User created successfully:", data);

  }
}


// LEFT OFF HERE

// export const signInUser = async (fieldValues) => {
  
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email: fieldValues.username,
//     password: fieldValues.password
//   });

//   if(error) {
//     console.error("Error signing in with account:", error.message);
//   } else {
//     console.log("account signed in successfully", data);
//   }
// }
