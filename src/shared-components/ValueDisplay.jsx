const ValueDisplay = ({ label, value, font, size, color }) => {
  return (
    <div 
    className={`text-${size} font-${font} text-${color}`}>
      {label} <span className="text-emerald-400 mr-[1px]">$</span>{value}
    </div>
  );
};

export default ValueDisplay;
