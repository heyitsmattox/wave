import clsx from 'clsx';

const AddToValueBtn = ({ isAdded, handleClick }) => {
  return (
    <button 
      onClick={handleClick}
      disabled={isAdded}
      className="p-3"
      >
     <i className="flex w-6 h-6 items-center justify-center rounded-full text-lg border border-emerald-500 text-emerald-500 fa-solid fa-plus"></i>
  
      </button>
  );
}

export default AddToValueBtn;
