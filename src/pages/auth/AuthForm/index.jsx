import { useState } from "react";
import Field from "./Field";

// import * as userService from "../../../services/users";

const AuthForm = (props) => {

  const { fields, submitButtonLabel, onSubmit } = props;


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



  return (
    <>
    <form className="font-lato m-4 p-4 bg-white border border-slate-300 rounded-lg"
    onSubmit={async (e) => {
      e.preventDefault(); 
      if (onSubmit) {
        await onSubmit(fieldValues);
        console.log("Form submitted");
      } else {
        console.error("onSubmit function is undefined!");
      }
    }}

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
            // console.log(`updating field ${field.label}:`, e.target.value)
          }}
        />
      ))}
      <button
      type="submit"
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
