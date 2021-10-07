import firebase from "firebase/compat";
import { auth } from "../App";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { useState } from "react";

export default function SignIn() {
  const [authenticating, setAuthenticating] = useState(false);

  const signInWithGoogle = async () => {
    if (authenticating) return;
    setAuthenticating(true);
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth
      .signInWithPopup(provider)
      .catch((e) =>
        window.alert(
          "An error ocurred while trying to authenticate your account"
        )
      );
    setAuthenticating(false);
  };

  const signInWithGithub = async () => {
    if (authenticating) return;
    setAuthenticating(true);
    const provider = new firebase.auth.GithubAuthProvider();
    await auth
      .signInWithPopup(provider)
      .catch((e) =>
        window.alert(
          "An error ocurred while trying to authenticate your account"
        )
      );
    setAuthenticating(false);
  };

  function AuthenticationOptions() {
    return (
      <div className='flex flex-col'>
        <h1 className='text-text text-2xl font-bold mb-2'>Login: </h1>
        <div className='flex gap-2 bg-primary p-4'>
          <button
            title='Google'
            className='p-2 bg-white transition flex rounded-full'
            onClick={signInWithGoogle}
          >
            <FcGoogle size={32} />
          </button>
          <button
            title='Github'
            className='p-2 bg-white transition flex rounded-full'
            onClick={signInWithGithub}
          >
            <IoLogoGithub size={32} />
          </button>
        </div>
      </div>
    );
  }

  return authenticating ? (
    <p className='text-text text-xl'>Loading...</p>
  ) : (
    <AuthenticationOptions />
  );
}
