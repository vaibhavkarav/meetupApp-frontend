import React, { useState } from "react";

function SearchFilter({ onFilter }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onFilter(query);
  };

  return (
    <div className="me-4">
      <input
        type="text"
        placeholder="Search by title or tag"
        value={searchQuery}
        onChange={handleSearch}
        className="form-control"
      />
    </div>
  );
}

export default SearchFilter;
