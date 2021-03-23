import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { getCategories, getFilterCategories, getAllRecipes } from '../../services/FoodsDrinksRequests';
import Context from '../../contextApi/Context';

const Categories = ({ title }) => {
  const [categories, setCategories] = useState([2]);
  const [toogle, setToggle] = useState(true);
  const [text, setText] = useState();

  const { setResults, all } = useContext(Context);

  useEffect(() => {
    getCategories(title).then((response) => setCategories(response));
  }, [title]);

  const filtro = ({ target }) => {
    setText(target.value);
    if (toogle === true || text !== target.value) {
      getFilterCategories(title, target.value).then((response) => setResults(response));
      setToggle(false);
    } else {
      getAllRecipes(title).then((response) => {
        setResults(response);
        setToggle(true);
      });
    }
  };

  const filtroALL = () => {
    setResults(all);
  };

  return (
    <div>
      {categories.length > 0 && (
        <section>
          {categories.map((category) => (
            <button
              key={ category.strCategory }
              type="button"
              data-testid={ `${category.strCategory}-category-filter` }
              value={ category.strCategory }
              onClick={ (e) => filtro(e) }
            >
              {category.strCategory}
            </button>
          ))}
          <button
            type="button"
            data-testid="All-category-filter"
            onClick={ () => filtroALL() }
          >
            All
          </button>
        </section>
      )}
    </div>
  );
};
Categories.propTypes = { title: PropTypes.string.isRequired };
export default Categories;
