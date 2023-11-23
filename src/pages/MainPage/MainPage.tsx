import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, PopupMenu } from "../../components/components";

import "./mainPage.scss";

export function MainPage() {
  const [isPopup, setIsPopup] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.length === 0) {
      navigate("/");
    }
  });

  return (
    <div className="container">
      <Header togglePopup={setIsPopup} />
      {isPopup && <PopupMenu />}
    </div>
  );
}
