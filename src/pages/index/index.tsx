import { FC, useEffect, useState } from "react";
import { IPage } from "../../interface/page";
import Input from "../../components/Input";
import ChatList from "../../components/ChatList";
import NewMessage from "../../components/NewMessage";
import Header from "../../components/Header";
import Message from "../../components/Message";
import SystemMessage from "../../components/SystemMessage";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import "./index.scss";
import React from "react";
import dayjs from "dayjs";

export const PageIndex: FC<IPage> = (props: IPage) => {
  const messages = useSelector((state: RootState) => state.chat.messages);
  const [isNew, setIsNew] = useState("");

  useEffect(() => {
    setIsNew("");
    messages.forEach((message) => {
      if (!isNew && message.is_new) {
        setIsNew(message.id);
      }
    });
  }, [messages]);

  return (
    <div className="main">
      <ChatList />
      <div className="main-body">
        <Header />
        <div className="main-messages">
          {messages.length > 0 &&
            messages.map((message, index) => {
              return (
                <React.Fragment key={message.id}>
                  {isNew === message.id && (
                    <SystemMessage date={dayjs().format("D.MM.YYYY")} />
                  )}

                  {isNew === message.id && <NewMessage />}
                  <Message
                    message={message}
                    my={message.user.you}
                    main={
                      index === 0 ||
                      message.user.id !== messages[index - 1].user.id
                    }
                  />
                </React.Fragment>
              );
            })}
        </div>
        <Input id="userId" />
      </div>
    </div>
  );
};
