import SignOutBtn from "./SignOutBtn";
import { useState  } from "react";

const Navbar = () => {
  const [ isClicked, setIsClicked ] = useState(false);

  const handleMenuBtn = () => {
    setIsClicked(true);
  }

  return (
    <>
      <div className="pt-8 w-full border-b border-indigo-400 p-4">
        <div className="flex justify-between">
          <i class="fa-solid text-3xl fa-wave-square flex text-amber-400">
            <div className="text-3xl font-lato ml-4 text-indigo-400">Wave</div>
          </i>
          <button 
          onClick={handleMenuBtn}
          className="fa-solid text-xl fa-bars text-slate-500">
            {
              isClicked && (
                <div className="bg-blue-400 p-10 h-10">

                </div>
              )
            }
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <SignOutBtn 
label="sign out"
font="lato"
/> */
}
