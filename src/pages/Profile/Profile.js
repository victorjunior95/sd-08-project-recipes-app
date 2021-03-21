import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import './profile.css';

const Profile = ({ title, visible }) => (
  <div>
    <h1>perfil</h1>
    <Header title={ title } visible={ visible } />
  </div>
);
Profile.defaultProps = {
  visible: true,
};
Profile.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
};

export default Profile;
