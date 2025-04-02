const ValueDisplay = ({ label, value, font, size, color }) => {
  return (
    <div 
    className={`text-${size} font-${font} text-${color}`}>
      {label} ${value}
    </div>
  );
};

export default ValueDisplay;
