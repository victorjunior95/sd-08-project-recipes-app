import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showHeaderAction } from '../store/actions/showHeaderAction';
import { Header, SearchBar } from '../components';

class Foods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Comidas',
      showButtonSearch: true,
    };
  }

  render() {
    const { setShowHeaderAction } = this.props;
    const { title, showButtonSearch } = this.state;
    setShowHeaderAction(title, showButtonSearch);
    return (
      <div>
        <Header />
        <SearchBar />
      </div>
    );
  }
}

Foods.propTypes = {
  setShowHeaderAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setShowHeaderAction: (titleHeader, showButtonSearch) => {
    dispatch(showHeaderAction(titleHeader, showButtonSearch));
  },
});

export default connect(null, mapDispatchToProps)(Foods);
