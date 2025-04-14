import supabase from "./supabase-client";
import LoginFinder from '../../backend/apis/LoginFinder.js';

export const creatingAccount = async (fieldValues) => {
  //supabase's signUp method returns two properties
  //data and error
    const { data, error } = await supabase.auth.signUp({
      email: fieldValues.email,
      password: fieldValues.password,
    });
    if (error) {
      console.error("Error signing up:", error.message);
      throw error;
    }
    try {
      //after it will use our axios instance to make the post requestu
      const response = await LoginFinder.post('/', {
        ...fieldValues, //spreading all fieldValues into the request body
        supabase_uid: data.user.id,
      });
      return response;
    } catch (err) {
      console.error("Error saving user to DB:", err.message);
      throw err;
    }
  };