import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function ContextRoute({ contextComponent, component, ...rest }) {
  const Provider = contextComponent;
  const Component = component;

  return (
    <Route { ...rest }>
      <Provider>
        <Component />
      </Provider>
    </Route>
  );
}

ContextRoute.propTypes = {
  contextComponent: PropTypes.node.isRequired,
  component: PropTypes.node.isRequired,
};

export default ContextRoute;
