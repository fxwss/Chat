import { auth } from "../App";
import { IoExit } from "react-icons/io5";

export default function SignOut() {
  return (
    <button
      className='py-2 px-4 bg-red-600 hover:bg-red-500 text-text hover:text-gray-900 transition'
      onClick={() => auth.signOut()}
    >
      <IoExit />
    </button>
  );
}
