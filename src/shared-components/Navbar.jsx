import SignOutBtn from "./SignOutBtn";

const Navbar = () => {
  return (
    <>
      <div className="pt-8 w-full border-b border-indigo-400 p-4">
        <div className="flex justify-between">
          <i class="fa-solid text-3xl fa-wave-square flex text-amber-400">
            <div className="text-3xl font-lato ml-4 text-indigo-400">Wave</div>
          </i>
          <i className="fa-solid text-xl fa-bars text-slate-500"></i>
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
