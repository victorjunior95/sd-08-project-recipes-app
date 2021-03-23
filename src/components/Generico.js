/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Generico extends Component {
  constructor() {
    super();
    this.state = {
      currentVideo: '',
    };
    this.video = this.video.bind(this);
  }

  componentDidMount() {
    this.video();
  }

  video() {
    const { detalhes } = this.props;
    if (detalhes && detalhes.strYoutube) {
      const youtubeVideo = detalhes.strYoutube.replace('watch?v=', 'embed/');
      this.setState({ currentVideo: youtubeVideo });
    }
  }

  render() {
    const { currentVideo } = this.state;
    return (
      <div>
        <h1>Generico</h1>
        <img src="" alt="" data-testid="recipe-photo" />
        <h1 data-testid="recipe-title">Img title</h1>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favorito</button>
        <span data-testid="recipe-category">Categoria</span>
        <h2>Ingredientes</h2>
        <ul>
          <li data-testid="${index}-ingredient-name-and-measure">Item1</li>
        </ul>
        <h2>Instruções</h2>
        <span data-testid="instructions">texto de instrução</span>
        <iframe
          width="683"
          height="384"
          title="video"
          src={ currentVideo }
          data-testid="video"
        />
        <ul>
          <li data-testid="${index}-recomendation-card">Item1</li>
        </ul>
        <button type="button" data-testid="start-recipe-btn">Iniciar receita</button>
      </div>
    );
  }
}

Generico.propTypes = {
  detalhes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  detalhes: state.routes.detalhes,
});

export default connect(mapStateToProps)(Generico);
