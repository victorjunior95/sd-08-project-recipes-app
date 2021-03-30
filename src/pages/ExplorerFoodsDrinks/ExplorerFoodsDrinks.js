import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './explorerFoodsDrinks.css';

const FoodsAndDrinks = ({ title, visible }) => {
  const history = useHistory();
  const [areaVisible, setAreaVisible] = useState(true);
  useEffect(() => {
    if (title === 'Explorar Bebidas') {
      setAreaVisible(false);
    }
  }, []);
  const redirectToIgredients = () => {
    if (title === 'Explorar Comidas') {
      history.push(`/explorar/comidas/ingredientes`);
    } else if (title === 'Explorar Bebidas') {
      history.push(`/explorar/bebidas/ingredientes`);
    }
  };
  return (
    <div className="explorer-foods-drinks">
      <Header title={title} visible={visible} />
      <button
        className="btn btn-info"
        data-testid="explore-by-ingredient"
        onClick={() => redirectToIgredients()}
      >
        Por Ingredientes
      </button>
      {areaVisible && (
        <button className="btn btn-info" data-testid="explore-by-area">
          Por Local de Origem
        </button>
      )}
      <button className="btn btn-info" data-testid="explore-surprise">
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
};
FoodsAndDrinks.defaultProps = {
  visible: true,
};
FoodsAndDrinks.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
};
export default FoodsAndDrinks;
