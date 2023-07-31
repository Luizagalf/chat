import { FC, useEffect } from "react";
import "./сhatList.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "../../redux/chatSlice";
import { AnyAction } from "redux";
import { RootState } from "../../redux/store";
import ChatItemList from "../ChatItemList";

const ChatList: FC = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state: RootState) => state.chat.chats);

  useEffect(() => {
    dispatch(fetchChats() as unknown as AnyAction);
  }, [dispatch]);

  return (
    <div className="container">
      <h5 className="title">All chats</h5>
      {chats.length > 0 &&
        chats?.map((chat) => <ChatItemList key={chat.id} chat={chat} />)}
    </div>
  );
};

export default ChatList;
