import search from "../../../assets/search.png";
import "./filterSearch.scss";

interface IProps {
  formWidth?: string;
}

export function FilterSearch({ formWidth }: IProps) {
  return (
    <form className="search">
      <input
        style={{
          width: formWidth,
        }}
        type="text"
      />
      <button type="submit">
        <img src={search} alt="search icon" />
      </button>
    </form>
  );
}
