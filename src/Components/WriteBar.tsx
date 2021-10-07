import firebase from "firebase/compat";
import { useForm } from "react-hook-form";
import { ISimpleUser } from "../../types";
import { auth, firestore } from "../App";
import { IoSend } from "react-icons/io5";

interface IFormValues {
  text: string;
}

function extractPublicData(): ISimpleUser {
  const user = auth.currentUser!;
  return {
    displayName: user.displayName!,
    email: user.email!,
    uid: user.uid!,
    photoURL: user.photoURL!,
  };
}

export default function WriteBar() {
  const { register, handleSubmit, setValue, formState } =
    useForm<IFormValues>();
  const { isSubmitting } = formState;
  const messagesRef = firestore.collection("messages");

  const onSubmit = async (values: IFormValues) => {
    const { text } = values;

    setValue("text", "");

    await messagesRef.add({
      text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      user: extractPublicData(),
    });
  };

  return (
    <form className='flex mt-2 w-full' onSubmit={handleSubmit(onSubmit)}>
      <input
        className='flex h-12 px-4 py-2 w-full place-items-center justify-center bg-secoundary text-text'
        {...register("text")}
        placeholder=''
        required
        disabled={isSubmitting}
        autoComplete='off'
        autoCorrect='off'
      />
      <button
        className='px-8 py-2 bg-purple-500 hover:bg-purple-400 text-text transition grid place-items-center'
        type='submit'
        disabled={isSubmitting}
      >
        <IoSend />
      </button>
    </form>
  );
}
