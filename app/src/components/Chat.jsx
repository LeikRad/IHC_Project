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
            <div className="z-10 dropdown-content bg-neutral rounded-md h-[70vh] w-[70vh] translate-y-[1rem] border-primary border-[1px] shadow">
                <div className="flex h-full gap-4">
                    <div className="flex-none text-center items-center w-[30vh] border-r border-primary" >
                        {chats.map((chat) => (
                            <div className="flex flex-col gap-4 h-[10vh] justify-center border-b border-primary hover:bg-primary/50" onClick={() => handleChat(chat["to"], chat["messages"])}>
                                <a class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out cursor-pointer">
                                <img class="object-cover w-10 h-10 rounded-full"
                                    src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
                                <div class="w-full flex flex-col pb-2">
                                    <div class="flex justify-between">
                                        <span class="block ml-2 justify-center text-gray-600 font-bold">{chat["to"]}</span>
                                        
                                    </div>
                                    <br />
                                    <span class="block ml-2 justify-end text-sm text-gray-600 flex">{chat["time"]}</span>
                                    {/* <span class="block ml-2 text-sm text-gray-600">bye</span> */}
                                </div>
                            </a>
                            </div>
                            
                        ))}
                </div>
                <div className="grow  flex  flex-col ">
                    {messages != "" ? (
                        <Message messages={messages} from={chat} />
                    ) : null}

                    {/* Area de escrever mensagem */}
                    <div class="flex items-center justify-between w-full mt-auto p-3 border-t border-primary">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                        </button>

                        <input type="text" placeholder="Message"
                            class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                            name="message" required />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                        </button>
                        <button type="submit">
                            <svg class="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div >
        </>
    );
};

export default Chat;
