import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Input } from '../Components';

function SearchBar() {
  const isSearching = useSelector((state) => state.search.isSearching);
  if (isSearching) {
    return (
      <Form>
        <Input name="Pesquisar" dataId="search-input" />
      </Form>
    );
  }
  return null;
}

export default SearchBar;
