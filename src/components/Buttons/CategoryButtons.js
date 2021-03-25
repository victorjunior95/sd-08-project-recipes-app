import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { showCompleteList } from '../../services/api';

const CategoryButtons = ({ label }) => {
  const [fullList, setFullList] = useState([]);
  const [firstFive, setFirstFive] = useState([]);
  useEffect(() => {
    async function getList() {
      const fetchList = await showCompleteList('categories', label);
      setFullList(label === 'drinks' ? fetchList.drinks : fetchList.meals);
    }
    getList();
  }, [label]);

  useEffect(() => {
    const STOP_ON_FIVE = 5;
    const checkFullList = () => {
      if (fullList.length > 0) {
        const mapping = fullList
          .filter((element, index) => index <= STOP_ON_FIVE).map((element) => element);
        setFirstFive(mapping);
      }
    }; checkFullList();
  }, [fullList]);
  const renderButtons = firstFive.map(({ strCategory }) => (
    <button
      style={ { boxSizing: 'content-box', margin: '10px', padding: '5px' } }
      key={ strCategory }
      type="button"
    >
      {strCategory}
    </button>));

  return (renderButtons);
};

CategoryButtons.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CategoryButtons;
