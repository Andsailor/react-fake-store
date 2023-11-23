import spinner from "../../assets/spinner.svg";
import "./spinner.scss";

export function Spinner() {
  return (
    <div className="spinner">
      <img className="spinner-img" src={spinner} alt="preloading spinner" />
    </div>
  );
}
