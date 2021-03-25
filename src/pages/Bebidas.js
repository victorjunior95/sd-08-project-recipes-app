import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CardDeck, Card } from 'react-bootstrap';
import ContextRecipes from '../context/ContextRecipes';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MAX_CARDS = 12;

const Bebidas = () => {
  const { dataByBusca, setHeaderInfo } = useContext(ContextRecipes);
  const history = useHistory();
  const [dataBebidas, setDataBebidas] = useState([]);

  useEffect(() => {
    setHeaderInfo({ pageTitle: 'Bebidas', showSearchIcon: true });
  }, [setHeaderInfo]);

  useEffect(() => {
    if (dataByBusca.drinks !== undefined) {
      if (dataByBusca.drinks.length > 1) {
        setDataBebidas([...dataByBusca.drinks]);
      } else if (dataByBusca.drinks.length === 1) {
        history.push(`/bebidas/${dataByBusca.drinks[0].idDrink}`);
      }
    }
  }, [dataByBusca, history]);

  return (
    <section className="w-100">
      <Header />
      { dataBebidas.length > 0 ? (
        <CardDeck className="m-2 d-flex flex-row flex-wrap justify-content-center">
          {
            dataBebidas.map((bebida, index) => {
              if (index < MAX_CARDS) {
                return (
                  <Card
                    key={ bebida.idDrink }
                    data-testid={ `${index}-recipe-card` }
                    className="col-5 m-2"
                  >
                    <Card.Img
                      variant="top"
                      data-testid={ `${index}-card-img` }
                      src={ bebida.strDrinkThumb }
                    />
                    <Card.Body>
                      <Card.Title data-testid={ `${index}-card-name` }>
                        { bebida.strDrink }
                      </Card.Title>
                    </Card.Body>
                  </Card>
                );
              }
              return false;
            })
          }
        </CardDeck>
      ) : false }
      <Footer />
    </section>
  );
};

export default Bebidas;
