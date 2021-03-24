import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

function DetailTitle(props) {
  const { title, cat } = props;
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 data-testid="recipe-title">{ title }</h1>
          <p data-testid="recipe-category">{ cat }</p>
        </Col>
        <Col className="d-flex justify-content-end align-items-start">
          <Button variant="link">
            <img alt="share" data-testid="share-btn" src={ shareIcon } />
          </Button>
          <Button variant="link">
            <img alt="share" data-testid="favorite-btn" src={ whiteHeartIcon } />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

DetailTitle.propTypes = {
  title: PropTypes.string,
  cat: PropTypes.string,
};

DetailTitle.defaultProps = {
  title: '',
  cat: '',
};

export default DetailTitle;
