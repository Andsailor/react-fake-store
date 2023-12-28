import spinner from "../../assets/spinner.svg";
import "./spinner.scss";

interface IProps {
  width?: string;
  height?: string;
}

export function Spinner({ width = "30px", height = "30px" }: IProps) {
  return (
    <div className="spinner">
      <img
        style={{
          width: width,
          height: height,
        }}
        className="spinner-img"
        src={spinner}
        alt="preloading spinner"
      />
    </div>
  );
}
