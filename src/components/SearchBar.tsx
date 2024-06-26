// SearchBar.tsx
import React from "react";
import "./searchBar.scss";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (newSearchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
