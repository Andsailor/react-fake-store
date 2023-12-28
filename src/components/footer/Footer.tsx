import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import telegram from "../../assets/telegram.png";

import "./footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <a
        target="_blank"
        href="https://github.com/Andsailor"
        className="footer-socials"
      >
        <img src={github} alt="github icon" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/andrii-potapov-20279528a/"
        className="footer-socials"
      >
        <img src={linkedin} alt="linkedin icon" />
      </a>
      <a
        target="_blank"
        href="https://t.me/andsailor"
        className="footer-socials"
      >
        <img src={telegram} alt="telegram icon" />
      </a>
    </footer>
  );
}
