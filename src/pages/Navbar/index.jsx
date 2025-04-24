// import SignOutBtn from "../../shared-components/SignOutBtn";
import NavbarDropDown from "./Navbar-Dropdown";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if(ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])


 const handleMenuBtn = () => {
  console.log('btn was clicked')
  setIsOpen(true)
  }

  return (
    <>
      <div className="pt-8 w-full border-b border-indigo-400 p-4">
        <div className="flex justify-between">
          <i className="fa-solid text-3xl fa-wave-square flex text-amber-400">
            <div className="text-3xl font-lato ml-4 text-indigo-400">Wave</div>
          </i>
          <button 
          onClick={handleMenuBtn}
          className="fa-solid text-xl fa-bars text-slate-500">
            {
              isOpen && (
                // <div ref={ref} className=" absolute bg-blue-400 p-10 h-10">
                <div ref={ref} className=" absolute right-14">
                  <NavbarDropDown />

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
