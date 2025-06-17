import React from 'react';


const MovieForm = ({onQuery, queryParams, setPage}) => {
  const onSearch = e => {
    const query = e.target.value;
    const nextParams = query !== '' ? { query } : {};
    onQuery(nextParams);
    setPage(1);
  };

  return (
    <label>
      <input
        type="text"
        placeholder="Search"
        value={queryParams}
        onChange={onSearch}
      />
    </label>
  );
}

export default MovieForm;
