import { Dispatch, SetStateAction } from "react";
import { Filter } from "../../features";

import "./filterModal.scss";

interface IProps {
  setIsModalFilterVisible: Dispatch<SetStateAction<boolean>>;
}

export function FilterModal({ setIsModalFilterVisible }: IProps) {
  return (
    <div className="filter-modal">
      <div className="filter-modal-filter">
        <Filter
          setIsModalFilterVisible={setIsModalFilterVisible}
          filterStyleParams={{
            searchFormWidth: "clamp(150px, 10vw, 300px)",
          }}
        />
      </div>
    </div>
  );
}
