import React from 'react';
import { Spinner } from 'react-bootstrap';
import './styles.css';

function Loading() {
  return (
    <Spinner
      animation="border"
      variant="primary"
      className="m-auto loader"
      style={ { width: '3rem', height: '3rem' } }
    />
  );
}

export default Loading;
