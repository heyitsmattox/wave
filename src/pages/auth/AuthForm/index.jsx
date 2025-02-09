import { useState } from "react";
import Field from "./Field";
import supabase from "../../../services/supabase-client"

const AuthForm = (props) => {
  const { fields, submitButtonLabel } = props;
  //keep track of the input the user is doing each time
  const [fieldValues, setFieldValues] = useState(() => {
    //default value needs to be an object
    const initialState = {};
    //iterate through our fields
    for (let field of fields) {
      //set our key to an empty string
      initialState[field.label] = "";
    }
    return initialState;
  });

//implementatiton MVP for adding a user to our database.
// console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
// console.log("Supabase Key:", import.meta.env.VITE_SUPABASE_KEY);


const createUser = async (e) => {
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

  // console.log(fieldValues.username);
  // console.log(fieldValues.password);

  return (
    <>
    <form className="font-lato m-4 p-4 bg-white border border-slate-300 rounded-lg"
    onSubmit={createUser}
    >
      {fields.map((field) => (
        <Field
        key={field.label}
          label={field.label}
          type={field.type}
          value={fieldValues[field.label]}
          onChange={(e) => {
            //keep our object reference
            setFieldValues({
              //copying over our original values
              //assign our new values
              ...fieldValues,
              [field.label]: e.target.value,
            });
          }}
        />
      ))}
      <button
        className="bg-blue-700 text-white p-4 w-full rounded-lg 
py-3 shadow-md mt-4"
      >
        {submitButtonLabel}
      </button>
    </form>
    
    </>
  );
};

export default AuthForm;
