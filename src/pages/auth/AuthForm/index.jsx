
const AuthForm = (props) => {
  const { fields } = props;

  return (
    <>
     {
      fields.map((field, idx) => <div key={field.label}>
      <label>{field.label}</label>
      <input type={field.type}></input>
      </div>
      )
     }
    </>
  );
};

export default AuthForm;