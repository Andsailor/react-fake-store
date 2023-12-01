import { Filter } from "../../features";

import "./filterModal.scss";

export function FilterModal() {
  return (
    <div className="filter-modal">
      <div className="filter-modal-filter">
        <Filter
          filterStyleParams={{
            searchFormWidth: "clamp(150px, 10vw, 300px)",
          }}
        />
      </div>
    </div>
  );
}
