import supabase from "./supabase-client";

export const createUser = async (e, fieldValues) => {
  e.preventDefault();

  console.log("Submitting with the Field values:", fieldValues);

  const { data, error } = await supabase.auth.signUp({
    email: fieldValues.username,
    password: fieldValues.password
  })


  console.log("supabase response", { data, error})

  if (error) {
    console.error("Error signing up:", error.message);
  } else {
    console.log("User created successfully:", data);
  }
}