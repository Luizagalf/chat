import { FC } from "react";
import { IMessage } from "./interface";
import "./message.scss";
import Avatar from "../Avatar";
import Time from "../Time";
import dayjs from "dayjs";

export const Message: FC<IMessage> = (props: IMessage) => {
  const { message, my, main } = props;
  return (
    <div className={`message ${my ? "my" : ""} ${main ? "mainMessage" : ""}`}>
      {!my && main && <Avatar src={message.user.avatar} size="sm" />}
      <div className="message-body">
        {!my && main && (
          <p className="message-body-title">
            {message.user.name} {message.user.surname}
          </p>
        )}
        <div>
          <p className="message-body-message">{message.message} </p>{" "}
          <Time time={dayjs(message.created_at).format("HH:mm")} my={my} />
        </div>
      </div>
    </div>
  );
};

export default Message;
