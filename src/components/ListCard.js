import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from './Card';

class ListCard extends Component {
  render() {
    const { result, infos } = this.props;
    console.log(result);
    return (
      <section>
        <ul className="card-list">
          {result && result.map((item, index) => {
            const TOTAL_ITEMS = 12;
            if (index >= TOTAL_ITEMS) {
              return;
            }
            return (<Card
              infos={ infos }
              key={ item[infos.id] }
              value={ item }
              index={ index }
            />);
          })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (({ search: { result } }) => ({
  result: result.meals || result.drinks,
}));

export default connect(mapStateToProps)(ListCard);

ListCard.propTypes = {
  result: PropTypes.arrayOf(PropTypes.object),
  infos: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    thumb: PropTypes.string,
    linkRedirect: PropTypes.string,
  }),
};

ListCard.defaultProps = {
  result: [],
  infos: {
    id: '',
    name: '',
    thumb: '',
    linkRedirect: '',
  },
};
