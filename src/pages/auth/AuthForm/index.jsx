import { useState } from 'react';

const AuthForm = (props) => {
  const { fields, submitButtonLabel } = props;
  //keep track of the input the user is doing each time
  const [ fieldValues, setFieldValues ] = useState(() => {
    //default value needs to be an object
    const initialState = {}
    //iterate through our fields
    for(let field of fields) {
      //set our key to an empty string
      initialState[field.label] = ''
    }
    return initialState
  })

  console.log(fieldValues)

  return <form className="font-lato m-4 p-4 bg-white border border-slate-300 rounded-lg">

     {
      fields.map((field, idx) => <div
      className="flex flex-col my-4"
      key={field.label}>
      <label htmlFor={field.label} className="pl-1 text-slate-500">{field.label}</label>
      <input 
      id={field.label} 
      type={field.type} 
      className="px-1 py-1 bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-300 w-64"
      value={fieldValues[field.label]}
      onChange={(e) => {
        //keep our object reference
        setFieldValues({
          //copying over our original values
          //assign our new values
          ...fieldValues, [field.label]: e.target.value
        })
      }}
  
      ></input>
      </div>
      )
     }
<button className="bg-blue-700 text-white p-4 w-full rounded-lg 
py-3 shadow-md mt-4">
  {submitButtonLabel}
</button>
  </form>
};

export default AuthForm;