import SignOutBtn from "./SignOutBtn";

const Navbar = () => {
  return (
    <>
      <div className="pt-8 w-full border-b border-gray-300 p-4">
        <div className="flex justify-between">
          <i class="fa-solid text-3xl fa-wave-square flex text-gray-400">
            <div className="text-3xl font-lato ml-4 text-emerald-400">Wave</div>
          </i>
          <i className="fa-solid text-xl fa-bars text-gray-400"></i>
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
