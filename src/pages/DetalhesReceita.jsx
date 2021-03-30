import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { buscarDetalhesComida } from '../services/fetchComidas';
import { buscarDetalhesBebidas } from '../services/fetchBebidas';
import ContextReceitas from '../context/ContextReceitas';

import CartaoDetalhesComidas from '../components/CartaoDetalhesComidas';
import CartaoDetalhesBebidas from '../components/CartaoDetalhesBebidas';

function DetalhesReceita(props) {
  const { match: { params: { id } } } = props;
  const { match: { path } } = props;
  const { setDetalhesComidas, setDetalhesBebidas } = useContext(ContextReceitas);

  useEffect(() => {
    async function funcBuscarDetalhes() {
      const detalhes = path === '/comidas/:id'? await buscarDetalhesComida(id) : await buscarDetalhesBebidas(id);
      path === '/comidas/:id' ? setDetalhesComidas(detalhes) : setDetalhesBebidas(detalhes);
    }
    funcBuscarDetalhes();
  }, []);

  if (path === '/comidas/:id') return <CartaoDetalhesComidas />;
  return <CartaoDetalhesBebidas />;
}

DetalhesReceita.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DetalhesReceita;
