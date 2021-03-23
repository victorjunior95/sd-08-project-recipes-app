import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Input } from '../Components';

function SearchBar() {
  const isSearching = useSelector((state) => state.search.isSearching);
  if (isSearching) {
    return (
      <Form>
        <Input name="Pesquisar" dataId="search-input" />
        <Form.Check
          type="radio"
          id="ingredient-search-radio"
          data-testid="ingredient-search-radio"
          label="Ingredientes"
          inline
        />
        <Form.Check
          type="radio"
          id="name-search-radio"
          data-testid="name-search-radio"
          label="Nome"
          inline
        />
        <Form.Check
          type="radio"
          id="first-letter-search-radio"
          data-testid="first-letter-search-radio"
          label="Primeira Letra"
          inline
        />
        <Button variant="primary" data-testid="exec-search-btn">Pesquisar</Button>
      </Form>
    );
  }
  return null;
}

export default SearchBar;
