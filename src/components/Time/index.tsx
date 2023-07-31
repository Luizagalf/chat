import { FC } from "react";
import { ITime } from "./interface";
import "./time.scss";
import { ReactComponent as Check } from "../../assets/icons/check.svg";

const Time: FC<ITime> = (props: ITime) => {
  const { time, my } = props;

  return (
    <div className="time">
      <p className="time-text">{time}</p>
      {my && <Check />}
    </div>
  );
};

export default Time;
