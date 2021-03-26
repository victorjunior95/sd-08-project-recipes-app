import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Card, Button, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';

function DetailHorizontal({ feitas }) {
  const [show, setShow] = useState(false);

  return (
    <Container>
      {feitas.length > 0 ? feitas.map((recep, i) => {
        const condi = `${recep.type === 'comida' ? 'comidas/' : 'bebidas/'}${recep.id}`;
        return (
          <Card key={ i }>
            <Row>
              <Col>
                <Link to={ condi }>
                  <Card.Img
                    src={ recep.image }
                    style={ { width: '10rem' } }
                    data-testid={ `${i}-horizontal-image` }
                  />
                </Link>
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title
                    data-testid={ `${i}-horizontal-top-text` }
                  >
                    { `${recep.type === 'comida' ? recep.area
                      : recep.alcoholicOrNot} - ${recep.category}` }
                  </Card.Title>
                  <Card.Subtitle
                    as={ Link }
                    to={ condi }
                    data-testid={ `${i}-horizontal-name` }
                  >
                    { recep.name }
                  </Card.Subtitle>
                  <Card.Text
                    data-testid={ `${i}-horizontal-done-date` }
                  >
                    Feita em:
                    { recep.doneDate }
                  </Card.Text>
                  {recep.tags.length > 0 ? recep.tags.map((tag) => (
                    <Col key={ tag }>
                      <Button
                        variant="secondary"
                        data-testid={ `${i}-${tag}-horizontal-tag` }
                      >
                        { tag }
                      </Button>
                    </Col>
                  )) : <div />}
                </Card.Body>
              </Col>
              <Col>
                <Button
                  variant="link"
                  style={ { width: '3rem' } }
                  onClick={ () => {
                    setShow(true);
                    navigator.clipboard.writeText(`http://localhost:3000/${condi}`);
                  } }
                >
                  <Card.Img
                    data-testid={ `${i}-horizontal-share-btn` }
                    src={ shareIcon }
                  />
                </Button>
              </Col>
            </Row>
            {show && (
              <Alert variant="success" onClose={ () => setShow(false) } dismissible>
                <Alert.Heading>Link copiado!</Alert.Heading>
              </Alert>
            )}
          </Card>
        );
      }) : <div />}
    </Container>
  );
}

DetailHorizontal.propTypes = {
  feitas: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default DetailHorizontal;
