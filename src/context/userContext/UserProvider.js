import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [email, setEmail] = useState('');
  const handleEmail = ({ target }) => setEmail(target.value);

  const provide = {
    values: {
      email,
    },
    functions: {
      handleEmail,
    },
  };
  return (
    <UserContext.Provider value={ provide }>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
