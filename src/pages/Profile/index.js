import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Profile({ history }) {
  return (
    <>
      <Header history={ history } />
      <br />
      <h1>Profile</h1>
      <Footer />
    </>
  );
}

Profile.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Profile;
