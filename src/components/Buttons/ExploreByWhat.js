import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const ExploreByWhat = ({ label, path }) => {
  const history = useHistory();
  return (
    <div>
      <button
        style={ { boxSizing: 'content-box', margin: '10px', padding: '5px' } }
        type="button"
        onClick={ () => history.push(`${label}/${path}`) }
      >
        {`Explorar ${label}`}
      </button>
    </div>
  );
};

ExploreByWhat.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ExploreByWhat;
