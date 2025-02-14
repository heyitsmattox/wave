import supabase from "./supabase-client";


export const creatingAccount = async (fieldValues) => {


  console.log("Submitting with the Field values:", fieldValues);
  
  const { data, error } = await supabase.auth.signUp({
    email: fieldValues.email,
    password: fieldValues.password
  });  
  if (error) {
    console.error("Error signing up:", error.message);
  } else {
    console.log("User created successfully:", data);

  }
}


