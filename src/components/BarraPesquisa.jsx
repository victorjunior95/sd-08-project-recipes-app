import React, { useContext, useState } from 'react';
import ContextReceitas from '../context/ContextReceitas';

function BarraPesquisa() {
  const { setSearch } = useContext(ContextReceitas);
  const [pesquisaLocal, setPesquisaLocal] = useState({});
  function changeHandle({ target: { name, value } }) {
    setPesquisaLocal({ ...pesquisaLocal, [name]: value });
  }
  function handleClick() {
    setSearch(pesquisaLocal);
    // setPesquisaLocal({});
  }

  return (
    <form>
      <input
        className="zTry"
        type="text"
        name="search"
        data-testid="search-input"
        onChange={ changeHandle }
      />
      <label
        className="search"
        htmlFor="i"
      >
        Ingrediente
        <input
          className="zTry"
          id="i"
          type="radio"
          name="type"
          value="i"
          data-testid="ingredient-search-radio"
          onChange={ changeHandle }
        />
      </label>
      <label
        className="search"
        htmlFor="s"
      >
        Nome
        <input
          className="zTry"
          id="s"
          type="radio"
          name="type"
          value="s"
          data-testid="name-search-radio"
          onChange={ changeHandle }
        />
      </label>
      <label
        className="search"
        htmlFor="f"
      >
        Primeira Letra
        <input
          className="zTry"
          id="f"
          type="radio"
          name="type"
          value="f"
          data-testid="first-letter-search-radio"
          onChange={ changeHandle }
        />
      </label>
      <button
        className="zTry"
        type="button"
        onClick={ handleClick }
        data-testid="exec-search-btn"
      >
        {' '}
        PROCURAR
      </button>

    </form>
  );
}
export default BarraPesquisa;
