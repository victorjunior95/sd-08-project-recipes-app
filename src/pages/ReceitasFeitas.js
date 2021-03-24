import React, { Component } from 'react';
import copy from 'clipboard-copy';
import HeaderLocation from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

class ReceitasFeitas extends Component {
  constructor() {
    super();
    this.state = {

    };
    this.filters = this.filters.bind(this);
    this.inputCard = this.inputCard.bind(this);
    this.share = this.share.bind(this);

  //   this.change = this.change.bind(this);
  //   this.APIcomidas = this.APIcomidas.bind(this);
  //   this.APIbebidas = this.APIbebidas.bind(this);
  //   this.twelveCards = this.twelveCards.bind(this);
  // }
  }

  filters() {
    return (
      <div className="filters">
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>
    );
  }

  share() {
    copy(window.location);
    // const SHOW_TIME = 3000;
    // this.setState({ displayShareMesage: true }, () => {
    //   setTimeout(() => this.setState({ displayShareMesage: false }), SHOW_TIME);
    // });
  }

  inputCard() {
    const recipes = [
      {
        id: '52771',
        type: 'comida',
        area: 'Italian',
        category: 'Vegetarian',
        alcoholicOrNot: '',
        name: 'Spicy Arrabiata Penne',
        image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
        doneDate: '23/06/2020',
        tags: ['Pasta', 'Curry'],
      },
      {
        id: '178319',
        type: 'bebida',
        area: '',
        category: 'Cocktail',
        alcoholicOrNot: 'Alcoholic',
        name: 'Aquamarine',
        image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
        doneDate: '23/06/2020',
        tags: [],
      },
    ];
    return (
      <div>
        { recipes.map((obj, index) => (
          <div className="card" key={ obj.id }>
            <img data-testid={ `${index}-horizontal-image` } alt="card" src={ `${obj.image}` } />
            <p data-testid={ `${index}-horizontal-top-text` }>{`${obj.area} - ${obj.category}`}</p>
            <p data-testid={ `${index}-horizontal-name` }>{obj.name}</p>
            <p data-testid={ `${index}-horizontal-done-date` }>{obj.doneDate}</p>
            <button
              type="button"
              onClick={ () => this.share() }
              // data-testid={ `${index}-horizontal-share-btn` }
            >
              <img data-testid={ `${index}-horizontal-share-btn` } src={ shareIcon } />
            </button>
            { obj.tags.map((tag) => (
              <p
                key={ tag }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                {tag}
              </p>
            ))}

          </div>))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <HeaderLocation />
        <br />
        <br />
        <br />
        {this.filters()}
        {this.inputCard()}
      </div>
    );
  }
}

export default ReceitasFeitas;

// describe('54 - Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo', () => {
//   it('Todos os data-testids estão disponíveis', () => {
//     cy.get('[data-testid="filter-by-all-btn"]');
//     cy.get('[data-testid="filter-by-food-btn"]');
//     cy.get('[data-testid="filter-by-drink-btn"]');
//     cy.get('[data-testid="0-horizontal-image"]');
//     cy.get('[data-testid="0-horizontal-top-text"]');
//     cy.get('[data-testid="0-horizontal-name"]');
//     cy.get('[data-testid="0-horizontal-done-date"]');
//     cy.get('[data-testid="0-horizontal-share-btn"]');
//     cy.get('[data-testid="0-Pasta-horizontal-tag"]');
//     cy.get('[data-testid="0-Curry-horizontal-tag"]');
//     cy.get('[data-testid="1-horizontal-image"]');
//     cy.get('[data-testid="1-horizontal-top-text"]');
//     cy.get('[data-testid="1-horizontal-name"]');
//     cy.get('[data-testid="1-horizontal-share-btn"]');
//     cy.get('[data-testid="1-horizontal-done-date"]');
//   });
// });
