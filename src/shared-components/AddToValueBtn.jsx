import clsx from 'clsx';

const AddToValueBtn = ({ isAdded, handleClick }) => {
  return (
    <button 
      onClick={handleClick}
      disabled={isAdded}
      className={clsx(
        " relativepx-4 py-2 rounded-md",
        !isAdded && "bg-blue-500 text-white p-2 mt-2"
      )}
      >
        {isAdded ? (
          <i className="absolute left-0bg-none text-xl text-green-500 fa-solid fa-check-to-slot"></i>
        ) : (
          'Add to Portfolio'
        )}
      </button>
  );
}

export default AddToValueBtn;