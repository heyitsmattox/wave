import SignOutBtn from "../../shared-components/SignOutBtn.tsx"

const NavbarDropDown = () => {
  return (
    <>
      <div className="bg-slate-800 px-10 py-6 rounded-xl shadow-md">
          <ul className="text-sm flex flex-col justify-end">
            <li className="text-gray-400">
            <i className="text-xl text-indigo-400 fa-regular fa-chart-bar mr-1"></i>
              Portfolio</li>
            <li className="m-4">
              <SignOutBtn label="sign out" font="lato" />
            </li>
          </ul>
      </div>
    </>
  );
};

export default NavbarDropDown;
