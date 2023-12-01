import { Dispatch, SetStateAction } from "react";
import "./burger.scss";

interface IProps {
  toggleModal: Dispatch<SetStateAction<boolean>>;
}

export function Burger({ toggleModal }: IProps) {
  return (
    <div
      onClick={() =>
        toggleModal((isModalFilterVisible) => !isModalFilterVisible)
      }
      className="burger"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
