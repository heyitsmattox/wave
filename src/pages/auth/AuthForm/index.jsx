
const AuthForm = (props) => {
  const { fields, submitButtonLabel } = props;

  return <form className="font-lato m-4 p-4 bg-white border border-slate-300 rounded-lg">

     {
      fields.map((field, idx) => <div
      className="flex flex-col my-4"
      key={field.label}>
      <label htmlFor={field.label} className="pl-1 text-slate-500">{field.label}</label>
      <input id={field.label} type={field.type} className="px-1 py-1 bg-slate-50 border border-slate-300 
      rounded-lg focus:outline-blue-300 w-64"></input>
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