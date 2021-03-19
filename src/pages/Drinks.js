import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import SearchIcon from '../images/searchIcon.svg';
import ProfileIcon from '../images/profileIcon.svg';
import './Drinks.css';
import { DataContext } from '../context/Context';
import Footer from '../components/Footer';

export default function Drinks() {
  const dataContext = useContext(DataContext);
  const {
    drinks,
    searchInputDrink,
    handleSearchByNameDrink,
    handleSearchByIngredientsDrink,
    handleSearchByFirstLetterDrink,
    nameSearchRadioDrink,
    ingredientSearchRadioDrink,
    firstLetterSearchRadioDrink,
    handleClickSearchDrink,
    handleChangeSearchDrink,
  } = dataContext;

  const [isVisible, setIsvisible] = useState(false);
  const history = useHistory();
  const handleClickTProfile = () => {
    history.push('/perfil');
  };
  const changeVisible = () => {
    setIsvisible(!isVisible);
  };
  const sizeOfLength = 12;
  const startOfSlice = 0;
  const endOfSlice = 12;
  // console.log(drinks.length);

  return (
    <div className="container">
      <div className="header-drinks">
        <button type="button" onClick={ handleClickTProfile }>
          <img
            data-testid="profile-top-btn"
            src={ ProfileIcon }
            alt="user-profile"
          />
        </button>
        <h2 data-testid="page-title">Bebidas</h2>
        <button type="button" onClick={ changeVisible }>
          <img data-testid="search-top-btn" src={ SearchIcon } alt="seach-icon" />
        </button>
      </div>
      {isVisible ? (
        <div className="search">
          <input
            onChange={ (e) => handleChangeSearchDrink(e.target.value) }
            className="search-input"
            data-testid="search-input"
          />
          <div className="search-radios">
            <label htmlFor="ingredient-search-radio">
              <input
                checked={ ingredientSearchRadioDrink }
                name="ingredient-search-radio"
                value={ searchInputDrink }
                onClick={ (e) => handleSearchByIngredientsDrink(e.target.value) }
                className="radio"
                id="ingredient-search-radio"
                data-testid="ingredient-search-radio"
                type="radio"
              />
              ingrediente
            </label>
            <label htmlFor="name-search-radio">
              <input
                checked={ nameSearchRadioDrink }
                name="name-search-radio"
                value={ searchInputDrink }
                onClick={ (e) => handleSearchByNameDrink(e.target.value) }
                className="radio"
                id="name-search-radio"
                data-testid="name-search-radio"
                type="radio"
              />
              Nome
            </label>
            <label htmlFor="first-letter-search-radio">
              <input
                value={ searchInputDrink }
                checked={ firstLetterSearchRadioDrink }
                name="first-letter-search-radio"
                onClick={ (e) => handleSearchByFirstLetterDrink(e.target.value) }
                className="radio"
                id="first-letter-search-radio"
                data-testid="first-letter-search-radio"
                type="radio"
              />
              Primeira letra
            </label>
          </div>
          <button
            onClick={ () => handleClickSearchDrink() }
            type="button"
            className="exec-search-btn"
            data-testid="exec-search-btn"
          >
            Buscar
          </button>
        </div>
      ) : (
        ''
      )}
      <div className="container-card-meal">
        {drinks.length > sizeOfLength
          ? drinks.slice(startOfSlice, endOfSlice).map((drink, index) => (
            <div
              data-testid={ `${index}-recipe-card` }
              className="card-meal"
              key={ drink.idDrink }
            >
              <Link to={ `/bebidas/${drink.idDrink}` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ drink.strDrinkThumb }
                  alt="thumbnails-meal"
                />
              </Link>
              <h2 data-testid={ `${index}-card-name` }>{drink.strDrink}</h2>
            </div>
          ))
          : drinks.map((drinkLess, index) => (
            <div
              data-testid={ `${index}-recipe-card` }
              className="card-meal"
              key={ drinkLess.idDrink }
            >
              <Link to={ `/bebidas/${drinkLess.idDrink}` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ drinkLess.strDrinkThumb }
                  alt="thumbnails-meal"
                />
              </Link>
              <h2 data-testid={ `${index}-card-name` }>{drinkLess.strDrink}</h2>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

/* {drinks.length > sizeOfLength
          ? drinks.slice(startOfSlice, endOfSlice).map((drink, index) => (
            <div
              data-testid={ `${index}-recipe-card` }
              className="card-meal"
              key={ drink.idDrink }
            >
              <Link to={ `/bebidas/${drink.idDrink}` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ drink.strDrinkThumb }
                  alt="thumbnails-meal"
                />
              </Link>
              <h2 data-testid={ `${index}-card-name` }>{drink.strDrink}</h2>
            </div>
          ))
          : drinks.map((drinkLess, index) => (
            <div
              data-testid={ `${index}-recipe-card` }
              className="card-meal"
              key={ drinkLess.idDrink }
            >
              <Link to={ `/bebidas/${drinkLess.idDrink}` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ drinkLess.strDrinkThumb }
                  alt="thumbnails-meal"
                />
              </Link>
              <h2 data-testid={ `${index}-card-name` }>{drinkLess.strDrink}</h2>
            </div>
          ))} */
