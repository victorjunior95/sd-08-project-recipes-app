import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../../services/FoodsDrinksRequests';

const Categories = ({ title }) => {
  const [categories, setCategories] = useState([2]);
  useEffect(() => {
    getCategories(title).then((response) => setCategories(response));
  }, [title]);
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
