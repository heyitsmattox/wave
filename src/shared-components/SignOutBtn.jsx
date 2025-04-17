import { Navigate, useNavigate } from "react-router-dom";
import supabase from "../services/supabase-client";


const SignOutBtn = ({label, font}) => {

  const navigate = useNavigate();

  async function signOut() {
    console.log("sign out button was clicked")
    await supabase.auth.signOut();
    navigate("/sign-up")
  }
 

  return (
    <div>
      <button
      onClick={signOut}
      className={`font-${font} p-2 rounded-lg bg-emerald-400 text-white`}>{label}</button>
    </div>
  )
};

export default SignOutBtn;