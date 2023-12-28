import errorIcon from "../../assets/error.png";
import "./errorPage.scss";

export function ErrorPage() {
  return (
    <div className="error">
      <img className="error-logo" src={errorIcon} alt="error icon" />
      <h1 className="error-message">
        Oups... something went wrong! Please, try again!
      </h1>
      <button
        onClick={() => {
          window.history.back();
        }}
        className="error-button"
      >
        Try again
      </button>
    </div>
  );
}
