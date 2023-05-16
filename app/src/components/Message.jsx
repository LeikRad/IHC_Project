import React from "react";

const Message = ({ messages, from }) => {
    console.log(messages);
    return (
        <>
                {messages.map((message) => {

                    return message["type"] == "schedule" ? (
                        <div className="chat flex justify-center rounded-md text-center">
                            {message["message"]}
                        </div>
                    ) : message["from"] == from ? (
                            <div class="chat chat-start">
                                <div class="chat-header">
                                    {message["from"]}
                                    <time class="text-xs opacity-50">
                                        {message["date"]}
                                    </time>
                                </div>
                                <div class="chat-bubble bg-primary">
                                    {message["message"]}
                                </div>
                                <div class="chat-footer opacity-50">Seen</div>
                            </div>
                    ) : (
                            <div class="chat chat-end">
                                <div class="chat-header">
                                    {message["from"]}
                                    <time class="text-xs opacity-50">
                                        {message["date"]}
                                    </time>
                                </div>
                                <div class="chat-bubble bg-primary">
                                    {message["message"]}
                                </div>
                                <div class="chat-footer opacity-50">
                                    Delivered
                                </div>
                            </div>
                    );
                })}
        </>
    );
};

export default Message;
