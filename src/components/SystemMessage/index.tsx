import { FC } from "react";
import "./systemMessage.scss";
import { ISistemMessage } from "./interface";

const SystemMessage: FC<ISistemMessage> = (props: ISistemMessage) => {
  const { date } = props;
  return <p className="system-message">{date}</p>;
};

export default SystemMessage;
