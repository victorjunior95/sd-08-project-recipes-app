import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import Context from '../context/Context';

const radioSearchOptions = [
  ['ingredient', 'Ingrediente', 'i'],
  ['name', 'Nome', 's'],
  ['first-letter', 'Primeira letra', 'f'],
];

const HeaderPS = ({ title, endpoint }) => {
  const {
    inputText,
    setInputText,
    radioValue,
    setRadioValue,
    requestApiData,
  } = useContext(Context);

  const [data, setData] = useState('');
  const [open, setOpen] = useState('collapse');

  function handleClick(e) {
    e.preventDefault();
    return (radioValue === 'f' && inputText.length !== 1)
      ? alert('Sua busca deve conter somente 1 (um) caracter')
      : requestApiData(endpoint);
  }

  return (
    <div className="navbar">
      <Link to="/perfil">
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile"
        />
      </Link>
      <h1 data-testid="page-title">{ title }</h1>
      <a
        data-toggle="collapse"
        href="#collapseInput"
        role="button"
        aria-expanded="false"
        aria-controls="collapseInput"
        onClick={ () => {
          setData(data === '' ? 'search-input' : '');
          setOpen(open === 'collapse' ? 'collapse.show' : 'collapse');
        } }
      >
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="search"
        />
      </a>
      <div className={ open }>
        <input
          type="text"
          data-testid={ data }
          placeholder="Buscar Receita"
          onChange={ (e) => setInputText(e.target.value) }
          value={ inputText }
        />
        { radioSearchOptions.map((option) => (
          <label key={ option[0] } htmlFor={ option[0] }>
            <input
              checked={ radioValue === option[2] }
              data-testid={ `${option[0]}-search-radio` }
              id={ option[0] }
              name="search-radio"
              type="radio"
              onChange={ (e) => setRadioValue(e.target.value) }
              value={ option[2] }
            />
            { option[1] }
          </label>
        )) }
        <button
          data-testid="exec-search-btn"
          onClick={ handleClick }
          type="submit"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

HeaderPS.propTypes = {
  title: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
};

export default HeaderPS;
