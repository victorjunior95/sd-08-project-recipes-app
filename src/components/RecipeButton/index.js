import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';

function RecipeButton() {
  return (
    <Button data-testid="start-recipe-btn" variant="success" className="recipe-button">
      Iniciar Receita
    </Button>
  );
}

export default RecipeButton;
