import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchRecipes } from '../actions/recipes';

function ExploreMain({ location: { pathname } }) {
  const type = pathname.split('/')[2];
  const { mealsToken, cocktailsToken } = useSelector((state) => state.login);
  const { list } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const prevList = useRef(list);

  const handleClick = () => {
    const token = type === 'comidas' ? mealsToken : cocktailsToken;
    dispatch(fetchRecipes(token, type, { request: 'random', key: '' }));
  };

  useEffect(() => {
    if (list !== prevList.current) {
      setId(list[0].id);
    }
    return () => setId('');
  }, [list]);

  return (
    <>
      <Header />
      <Link
        data-testid="explore-by-ingredient"
        style={ { display: 'block' } }
        to={ `${pathname}/ingredientes` }
      >
        Por Ingredientes
      </Link>
      { (type === 'comidas') && (
        <Link
          data-testid="explore-by-area"
          style={ { display: 'block' } }
          to={ `${pathname}/area` }
        >
          Por Local de Origem
        </Link>) }
      <button
        data-testid="explore-surprise"
        style={ { display: 'block' } }
        onClick={ handleClick }
        type="button"
      >
        Me Surpreenda!
      </button>
      { id && <Redirect to={ `../${type}/${id}` } /> }
      <Footer />
    </>
  );
}
ExploreMain.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExploreMain;
