import { useEffect, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { IMessage } from "../../types";
import { firestore } from "../App";

import Message from "./Message";
import SignOut from "./SignOut";
import WriteBar from "./WriteBar";

export default function Chat() {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limitToLast(50);

  const [messages] = useCollectionData<IMessage>(query, { idField: "id" });

  const dummy = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    dummy.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section className='flex flex-col bg-primary h-full w-full min-w-max lg:w-4/12 p-4 justify-between transition shadow'>
      <header className='flex h-24 w-full mb-4 justify-between align-middle'>
        <h1 className='text-indigo-50 text-xl select-none'>chat</h1>
        <SignOut />
      </header>
      <div className='overflow-y-auto'>
        {messages?.map((message, index) => {
          const isSame = message.user.uid === messages[index - 1]?.user.uid;

          return <Message key={message.id} message={message} isSame={isSame} />;
        })}
        <div ref={dummy} />
      </div>
      <WriteBar />
    </section>
  );
}
