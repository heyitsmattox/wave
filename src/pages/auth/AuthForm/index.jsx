
const AuthForm = (props) => {
  //test
  console.log('hello world')
  const { fields } = props;

  return <form className="m-4 p-2 bg-white border border-slate-300 rounded-lg">
  <>
     {
      fields.map((field, idx) => <div
      className="flex flex-col"

      key={field.label}>
      <label htmlFor={field.label} >{field.label}</label>
      <input id={field.label} type={field.type} className="ml-2 bg-slate-50 border border-slate-300 rounded-lg"></input>
      </div>
      )
     }
    </>
  </form>
};

export default AuthForm;