import React from 'react';
import PropTypes from 'prop-types';
import '../styles/NotFound.css';

function NotFound({ history }) {
  return (
    <div className="not-found-body">
      <div className="message">
        <h1>404</h1>
        <h2 className="not-found">Not Found</h2>
        <button type="button" onClick={ history.goBack }>voltar</button>
      </div>
    </div>
  );
}

NotFound.propTypes = {
  history: PropTypes.shape(PropTypes.any).isRequired,
};

export default NotFound;
