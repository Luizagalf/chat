import { FC } from "react";
import { IAvatar } from "./interface";
import "./avatar.scss";

const Avatar: FC<IAvatar> = (props: IAvatar) => {
  const { src, size = "sm" } = props;

  const className = `component-avatar component-avatar--${size}`;

  return <img src={src} alt="avatar" className={className} />;
};

export default Avatar;
