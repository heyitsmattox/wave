const ValueDisplay = ({ label, value }) => {
  return (
    <div 
    className="text-xl font-lato text-slate-400">
      {label}: ${value}
    </div>
  );
};

export default ValueDisplay;
