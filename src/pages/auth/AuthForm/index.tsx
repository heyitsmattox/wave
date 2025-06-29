import { useState } from "react";
import Field from './Field.tsx';
import LoadingSpinner from "../../../shared-components/LoadingSpinner.tsx";

interface props {
  fields: Array<{ label: string; type: string }>;
  submitButtonLabel: string;
  onSubmit: (fieldValues: { email: string, password: string }) => Promise<void>;
}

const AuthForm = (props: props) => {
  const { fields, submitButtonLabel, onSubmit } = props;
  const [loading, setLoading ] = useState<boolean | null>(null)

  //keep track of the input the user is doing each time
  const [fieldValues, setFieldValues] = useState(() => {
    //default value needs to be an object
    const initialState: Record<string, string> = {};
    
    //iterate through our fields
    for (let field of fields) {
      //set our key to an empty string
      initialState[field.label] = "";
      console.log('field values: ', field)
      console.log("fields equals: ", fields)
    }
    return initialState;
  });

  return (
    <>
      <form
        className="font-lato m-4 py-8 px-10 pb-12 bg-slate-800 border border-slate-300 rounded-lg"
        onSubmit={async (e) => {
          e.preventDefault();
          if (onSubmit) {
            setLoading(true);
            await onSubmit(fieldValues as { email: string, password: string });
            console.log("location AuthForm: --> Form submitted");
            setLoading(false);
          } else {
            console.error("Error submitting form!");
          }
        }}
      >
        {fields.map((field) => (
          <Field
            key={field.label}
            label={field.label}
            type={field.type}
            value={fieldValues[field.label]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
          type="submit"
          className="relative flex justify-center items-center bg-blue-700 text-white p-5 w-full rounded-lg 
py-3 shadow-md mt-6"
          onSubmit={() =>fieldValues}
        >
          {submitButtonLabel}
          <span className="w-5 h-5 inline-flex items-center justify-center">
    {loading && <LoadingSpinner />}
  </span>
        </button>
      </form>
    </>
  );
};

export default AuthForm;
