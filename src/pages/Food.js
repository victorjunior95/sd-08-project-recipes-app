import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Food.css';
import SearchIcon from '../images/searchIcon.svg';
import ProfileIcon from '../images/profileIcon.svg';
import { DataContext } from '../context/Context';
import Footer from '../components/Footer';

function Food() {
  const dataContext = useContext(DataContext);
  const {
    meals,
    categoriesMeals,
    searchInputMeal,
    handleChangeSearch,
    handleSearchByName,
    handleSearchByIngredients,
    handleSearchByFirstLetter,
    nameSearchRadio,
    ingredientSearchRadio,
    firstLetterSearchRadio,
    handleClickSearch,
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
  const endOfSliceOfCategories = 5;
  const startOfSlice = 0;
  const endOfSlice = 12;
  console.log(meals);
  return (
    <div className="container">
      <div className="header-food">
        <button type="button" onClick={ handleClickTProfile }>
          <img
            data-testid="profile-top-btn"
            src={ ProfileIcon }
            alt="user-profile"
          />
        </button>
        <h2 data-testid="page-title">Comidas</h2>
        <button type="button" onClick={ changeVisible }>
          <img data-testid="search-top-btn" src={ SearchIcon } alt="seach-icon" />
        </button>
      </div>
      {isVisible ? (
        <div className="search">
          <input
            onChange={ (e) => handleChangeSearch(e.target.value) }
            className="search-input"
            data-testid="search-input"
          />
          <div className="search-radios">
            <label htmlFor="ingredient-search-radio">
              <input
                checked={ ingredientSearchRadio }
                name="ingredient-search-radio"
                value={ searchInputMeal }
                onClick={ (e) => handleSearchByIngredients(e.target.value) }
                className="radio"
                id="ingredient-search-radio"
                data-testid="ingredient-search-radio"
                type="radio"
              />
              ingrediente
            </label>
            <label htmlFor="name-search-radio">
              <input
                checked={ nameSearchRadio }
                name="name-search-radio"
                value={ searchInputMeal }
                onClick={ (e) => handleSearchByName(e.target.value) }
                className="radio"
                id="name-search-radio"
                data-testid="name-search-radio"
                type="radio"
              />
              Nome
            </label>
            <label htmlFor="first-letter-search-radio">
              <input
                value={ searchInputMeal }
                checked={ firstLetterSearchRadio }
                name="first-letter-search-radio"
                onClick={ (e) => handleSearchByFirstLetter(e.target.value) }
                className="radio"
                id="first-letter-search-radio"
                data-testid="first-letter-search-radio"
                type="radio"
              />
              Primeira letra
            </label>
          </div>
          <button
            onClick={ () => handleClickSearch() }
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
      <div className="category-filter">
        <button type="button">all</button>
        {categoriesMeals.slice(startOfSlice, endOfSliceOfCategories).map((category) => (
          <button
            data-testid={ `${category.strCategory}-category-filter` }
            type="button"
            key={ category.strCategory }
          >
            {category.strCategory}
          </button>
        ))}
      </div>
      <div className="container-card-meal">
        {meals.length > sizeOfLength
          ? meals.slice(startOfSlice, endOfSlice).map((meal, index) => (
            <div
              data-testid={ `${index}-recipe-card` }
              className="card-meal"
              key={ meal.idMeal }
            >
              <Link to={ `/comidas/${meal.idMeal}` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ meal.strMealThumb }
                  alt="thumbnails-meal"
                />
              </Link>
              <h2 data-testid={ `${index}-card-name` }>{meal.strMeal}</h2>
            </div>
          ))
          : meals.map((mealLess, index) => (
            <div
              data-testid={ `${index}-recipe-card` }
              className="card-meal"
              key={ mealLess.idMeal }
            >
              <Link to={ `/comidas/${mealLess.idMeal}` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ mealLess.strMealThumb }
                  alt="thumbnails-meal"
                />
              </Link>
              <h2 data-testid={ `${index}-card-name` }>{mealLess.strMeal}</h2>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Food;
