import React from 'react';

const MovieForm = ({ onQuery, queryParams, setPage }) => {
  const onSearch = event => {
    const query = event.target.value;
    const nextParams = query !== '' ? { query } : {};
    onQuery(nextParams);
    setPage(1);
  };

  return (
    <label>
      <input
        type="text"
        placeholder="Search movies"
        value={queryParams}
        onChange={onSearch}
      />
    </label>
  );
};

export default MovieForm;
