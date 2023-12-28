import { useGetUserByToken } from "../../../hooks/auth/useGetUserByToken.hook";

import logoutIcon from "../../../assets/logout.png";
import userIcon from "../../../assets/user.png";
import emailIcon from "../../../assets/email.png";

import "./popup.scss";

export function PopupMenu() {
  const { data } = useGetUserByToken();
  const userEmail =
    data?.email && window.innerWidth < 600 && data?.email.length > 30
      ? data?.email.slice(0, 27) + "..."
      : data?.email;
  const userName = data?.name;

  return (
    <div className="popup">
      <div className="popup-text">
        <img className="popup-text-img" src={userIcon} alt="user icon" />{" "}
        {userName}
      </div>
      <div className="popup-text">
        <img className="popup-text-img" src={emailIcon} alt="email icon" />{" "}
        {userEmail}
      </div>
      <hr />
      <div className="popup-logout">
        <img
          className="popup-logout-img"
          src={logoutIcon}
          alt="logout button icon"
        />
        <div
          onClick={() => {
            localStorage.clear();
            location.reload();
          }}
          className="popup-logout-text"
        >
          Logout
        </div>
      </div>
    </div>
  );
}
