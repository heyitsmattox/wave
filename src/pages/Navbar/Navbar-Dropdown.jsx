import SignOutBtn from "../../shared-components/SignOutBtn";

const NavbarDropDown = () => {
  return (
    <>
      <div className="bg-indigo-200 px-10 py-6 rounded-md shadow-md">
          <ul className="text-sm flex flex-col justify-end">
            <li className="text-indigo-600">My Portfolio</li>
            <li className="m-4">
              <SignOutBtn label="sign out" font="lato" />
            </li>
          </ul>
      </div>
    </>
  );
};

export default NavbarDropDown;
