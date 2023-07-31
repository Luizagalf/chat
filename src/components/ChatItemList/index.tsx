import { FC } from "react";
import { IChatItemList } from "./interface";
import "./chatItemList.scss";
import Avatar from "../Avatar";
import { RootState } from "../../redux/store";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { selectChat, fetchMessages } from "../../redux/chatSlice";
import { AnyAction } from "@reduxjs/toolkit";

export const ChatItemList: FC<IChatItemList> = (props: IChatItemList) => {
  const { chat } = props;
  const dispatch = useDispatch();
  const selectedChatId = useSelector(
    (state: RootState) => state.chat.selectedChatId
  );
  return (
    <div
      className={`card ${selectedChatId === chat.id ? "selected" : ""}`}
      onClick={() => {
        dispatch(selectChat(chat.id));
        dispatch(fetchMessages(chat.id) as unknown as AnyAction);
      }}
    >
      <Avatar src={chat?.avatar} size="md" />
      <div className="card-body">
        <div>
          <p className="card-body-title">
            {chat.last_message.user_name} {chat.last_message.user_surname}
          </p>
          <p className="card-body-time">
            {dayjs(chat.last_message.created_at).format("HH:mm")}
          </p>
        </div>
        <p className="card-body-message">{chat.last_message.message}</p>
      </div>
    </div>
  );
};

export default ChatItemList;
