import React from 'react';
import { Label, Input } from "./MovieForm.styled";

const MovieForm = ({ onQuery, queryParams, setPage }) => {
  const onSearch = event => {
    const query = event.target.value;
    const nextParams = query !== '' ? { query } : {};
    onQuery(nextParams);
    setPage(1);
  };

  return (
    <Label>
      <Input
        type="text"
        placeholder="Search movies"
        value={queryParams}
        onChange={onSearch}
      />
    </Label>
  );
};

export default MovieForm;
