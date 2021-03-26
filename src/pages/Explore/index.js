import React from 'react';
import PropTypes from 'prop-types';
import Feed from '../../components/ExploreComponents/Feed';
// import NotFound from '../NotFound/NotFound';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Explore({ history }) {
  const { location: { pathname } } = history;

  return (
    <>
      <Header history={ history } />
      {pathname === '/explorar' && <Feed />}
      {/* {path === '/explorar/comidas' && <Meals path={ path } />} */}
      {/* {path === '/explorar/comidas/area' && <Area path={ path } />} */}
      {/* {path === '/explorar/bebidas/area' && <NotFound path={ path } />} */}
      {/* {path === '/explorar/bebidas' && <Drinks path={ path } />} */}
      {/* {path === '/explorar/comidas/ingredientes' && <Ingredients path={ path } />} */}
      {/* {path === '/explorar/bebidas/ingredientes' && <Ingredients path={ path } />} */}
      <Footer />
    </>
  );
}

Explore.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Explore;
