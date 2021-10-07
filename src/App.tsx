import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./Components/SignIn";
import Chat from "./Components/Chat";
import getFirebaseConfig from "./utils/getFirebaseConfig";

const app = firebase.initializeApp(getFirebaseConfig());

export const firestore = app.firestore();
export const auth = app.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <main className='w-screen h-screen flex flex-col justify-center place-items-center bg-bg'>
      {user ? <Chat /> : <SignIn />}
    </main>
  );
}

export default App;
