import React, { useState } from 'react';

const SearchBox: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="py-2 px-4 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500 text-gray-800  "
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
