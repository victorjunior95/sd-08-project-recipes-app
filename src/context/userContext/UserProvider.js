import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail = ({ target }) => setEmail(target.value);
  const handlePassword = ({ target }) => setPassword(target.value);

  const provide = {
    values: {
      email,
      password,
    },
    functions: {
      handleEmail,
      handlePassword,
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
