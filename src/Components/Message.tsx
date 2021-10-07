import { IMessage } from "../../types";
import { auth } from "../App";
import titlefy from "../utils/titlefy";

interface IChatMessageProps {
  message: IMessage;
  isSame: boolean;
}

interface ISimpleMessageProps {
  sent: boolean;
  text: string;
}

function SimpleMessage(props: ISimpleMessageProps) {
  const { sent, text } = props;

  return (
    <p
      className={`flex mb-2 place-items-center py-2 px-4 max-w-full rounded-xl ${
        sent
          ? "bg-blue-600 text-text ml-14 place-items-start w-max"
          : "bg-blue-100 text-black ml-auto mr-14 place-items-end w-max"
      } ${text.includes(" ") ? "break-word" : "break-all"}`}
    >
      {text}
    </p>
  );
}

export default function Message(props: IChatMessageProps) {
  const { text, user } = props.message;
  const { isSame } = props;
  const sent = user.uid === auth.currentUser?.uid;

  if (isSame) return <SimpleMessage text={text} sent={sent} />;

  return (
    <div
      className={`flex w-full ${sent ? "flex" : "flex-row-reverse"} gap-2 mb-2`}
    >
      <img
        title='test'
        className='w-12 h-12 select-none my-auto rounded-full'
        alt='Profile'
        src={user.photoURL}
      />
      <div
        className={`flex min-h-12 flex-col w-full ${
          sent ? "place-items-start" : "place-items-end"
        }`}
      >
        <p className='box-content w-max pb-1 text-xs text-text font-bold'>
          {titlefy(user.displayName)}
        </p>
        <p
          className={`flex place-items-center py-2 px-4 max-w-full rounded-xl ${
            sent ? "bg-blue-600 text-text" : "bg-blue-100 text-black"
          } ${text.includes(" ") ? "break-word" : "break-all"}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
