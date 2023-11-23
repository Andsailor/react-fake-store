import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import telegram from "../../assets/telegram.png";

import "./footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <a href="" className="footer-socials">
        <img src={github} alt="github icon" />
      </a>
      <a href="" className="footer-socials">
        <img src={linkedin} alt="linkedin icon" />
      </a>
      <a href="" className="footer-socials">
        <img src={telegram} alt="telegram icon" />
      </a>
    </footer>
  );
}
