import { FC } from "react";
import "./header.scss";
import { ReactComponent as Chat } from "../../assets/icons/chat.svg";

const Header: FC = () => {
  return (
    <header className="header">
      <Chat />
      <h5 className="header-title ">Great Project</h5>
    </header>
  );
};

export default Header;
