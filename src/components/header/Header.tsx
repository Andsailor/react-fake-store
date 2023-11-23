import { Dispatch, SetStateAction } from "react";
import { useGetUserByToken } from "../../hooks/auth/useGetUserByToken.hook";

import mainLogo from "../../assets/logo.png";

import "./header.scss";

interface IProps {
  togglePopup: Dispatch<SetStateAction<boolean>>;
}

export function Header({ togglePopup }: IProps) {
  const { data } = useGetUserByToken();
  return (
    <header className="header">
      <img src={mainLogo} alt="header main logo" className="header-logo" />
      <img
        onClick={() => togglePopup((isPopup) => !isPopup)}
        className="header-avatar"
        src={data?.avatar}
        alt="user avatar"
      />
    </header>
  );
}
