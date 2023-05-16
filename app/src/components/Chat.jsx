import { react } from "react";
import { useUserStore } from "../stores/useUserStore";
import { useState } from "react";
import Message from "./Message";

const Chat = () => {
    const { chats } = useUserStore((state) => state);

    const [chat, setChat] = useState("");

    const [messages, setMessages] = useState([]);

    const handleChat = (to, messages) => {
        setChat(to);
        setMessages(messages);
    }

    return (
        <>
            <div className="z-10 dropdown-content bg-neutral rounded-md h-[70vh] w-[70vh] translate-y-[1rem] border-accent border-[1px] shadow">
                <div className="flex h-full gap-4">
                    <div className="flex-none text-center items-center w-[15vh] border-r border-accent">
                        {chats.map((chat) => (
                            <div className="flex flex-col gap-4 h-[10vh] justify-center border-b border-accent" onClick={() => handleChat(chat["to"], chat["messages"])}>
                                {chat["to"]}
                            </div>
                        ))}
                    </div>
                    <div className="grow ">
                        {messages != "" ? (
                            <Message messages={messages} from={chat} />
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;
