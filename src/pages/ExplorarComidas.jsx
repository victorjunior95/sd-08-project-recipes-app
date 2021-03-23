import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExplorarComidas() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explorar Comidas" />
      <Button
        type="button"
        label="Por Ingredientes"
        datatestid="explore-by-ingredient"
        onClick={ () => history.push('comidas/ingredientes') }
      />
      <Button
        type="button"
        label="Por Local de Origem"
        datatestid="explore-by-area"
        onClick={ () => history.push('comidas/area') }
      />
      <Button
        type="button"
        label="Me Surpreenda!"
        datatestid="explore-surprise"
        onClick={ () => history.push('../comidas') }
      />
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
