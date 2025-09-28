import React from 'react';

const SearchAndSort = ({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="flex gap-5 mb-5 p-4 border border-gray-300 rounded-lg bg-gray-100">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Filter ideas by text..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />

      {/* Sort Selector */}
      <label htmlFor="sort-select" className="flex items-center gap-2">
        Sort By:
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="default">Default (Newest)</option>
          <option value="upvotes">Upvotes (Highest)</option>
          <option value="downvotes">Downvotes (Highest)</option>
        </select>
      </label>
    </div>
  );
};

export default SearchAndSort;
