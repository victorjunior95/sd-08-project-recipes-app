import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/components/ExploreContainer.module.css';

const ExploreContainer = ({ children }) => (
  <div className={ styles.exploreContainer }>
    { children }
  </div>
);

ExploreContainer.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ExploreContainer;
