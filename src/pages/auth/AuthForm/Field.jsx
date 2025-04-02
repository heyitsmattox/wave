const Field = (props) => {
  const { label, type, onChange, fieldValues } = props;

  return (
    <div className="flex flex-col my-4" key={label}>
      <label htmlFor={label} className="pl-1 text-slate-500">
        {label}
      </label>
      <input
        id={label}
        type={type}
        className="px-1 py-1 bg-slate-50 border border-slate-300 rounded-lg focus:outline-blue-700 w-64"
        value={fieldValues}
        onChange={onChange}
      />
    </div>
  );
};

export default Field;
