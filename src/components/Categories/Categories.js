import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getFoodsCategories } from '../../services/FoodsRequests';
import { getDrinksCategories } from '../../services/DrinksRequests';

const Categories = ({ title }) => {
  const [categories, setCategories] = useState([2]);
  useEffect(() => {
    if (title === 'Comidas') {
      getFoodsCategories().then((response) => setCategories(response));
    } else {
      getDrinksCategories().then((response) => setCategories(response));
    }
  }, []);
  return (
    <div>
      {categories.length > 0 && (
        <section>
          {categories.map((category) => (
            <button
              key={ category.strCategory }
              type="button"
              data-testid={ `${category.strCategory}-category-filter` }
            >
              {category.strCategory}
            </button>
          ))}
        </section>
      )}
    </div>
  );
};
Categories.propTypes = { title: PropTypes.string.isRequired };
export default Categories;
