import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import Header from '../Header';

function ContainerDefault({ title, children }) {
  return (
    <Container fluid>
      <Row className="mb-5">
        <Header title={ title } />
      </Row>
      <Container className="d-flex flex-column" fluid>
        { children }
      </Container>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

ContainerDefault.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ContainerDefault;
