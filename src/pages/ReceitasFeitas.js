import React, { Component } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import HeaderLocation from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

class ReceitasFeitas extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [
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
      ],
      newRecipes: [],
      filtered: false,

    };
    this.filtersButtons = this.filtersButtons.bind(this);
    this.inputCard = this.inputCard.bind(this);
    this.share = this.share.bind(this);
    this.filters = this.filters.bind(this);
  //   this.APIbebidas = this.APIbebidas.bind(this);
  //   this.twelveCards = this.twelveCards.bind(this);
  // }
  }

  filtersButtons() {
    return (
      <div className="filters">
        <center>
          <button
            type="button"
            onClick={ () => this.filters('all') }
            data-testid="filter-by-all-btn"
          >
            All

          </button>
          <button
            type="button"
            onClick={ () => this.filters('food') }
            data-testid="filter-by-food-btn"
          >
            Food

          </button>
          <button
            type="button"
            onClick={ () => this.filters('drink') }
            data-testid="filter-by-drink-btn"
          >
            Drinks

          </button>
        </center>
      </div>
    );
  }

  filters(par) {
    const { recipes } = this.state;
    let newRecipes = [];
    console.log(par);
    if (par === 'all' || par === undefined) {
      this.setState({ filtered: false });
    }
    if (par === 'food') {
      newRecipes = recipes.filter((obj) => obj.type === 'comida');
      this.setState({ newRecipes, filtered: true });
    }
    if (par === 'drink') {
      newRecipes = recipes.filter((obj) => obj.type === 'bebida');
      this.setState({ newRecipes, filtered: true });
    }
  }

  share(obj) {
    const location = `http://localhost:3000/${obj.type}s/${obj.id}`;
    copy(location);
    const SHOW_TIME_MILISECONDS = 3000;
    this.setState({ displayShareMesage: true }, () => {
      setTimeout(() => this.setState(
        { displayShareMesage: false },
      ), SHOW_TIME_MILISECONDS);
    });
  }

  inputCard() {
    const { newRecipes, recipes, filtered } = this.state;
    let arr = [];
    if (filtered === false) {
      arr = recipes;
    }
    if (filtered === true) {
      arr = newRecipes;
    }
    return (
      <div>
        { arr.map((obj, index) => (
          <div className="card" key={ obj.id }>
            <center>
              <div className="a">
                <Link to={ `${obj.type}s/${obj.id}` }>
                  <img
                    data-testid={ `${index}-horizontal-image` }
                    alt="card"
                    src={ `${obj.image}` }
                    className="linkImage"
                  />
                </Link>

              </div>
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                {`${obj.alcoholicOrNot} ${obj.area} - ${obj.category}`}

              </p>
              <Link to={ `${obj.type}s/${obj.id}` }>
                <p data-testid={ `${index}-horizontal-name` }>{obj.name}</p>
              </Link>
              <p data-testid={ `${index}-horizontal-done-date` }>{obj.doneDate}</p>

            </center>
            <button
              type="button"
              onClick={ () => this.share(obj) }
            >
              <img
                alt="card"
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
              />
              {' '}
            </button>
            <div className="tags">
              tags:
              { obj.tags.map((tag) => (
                <p
                  key={ tag }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  {tag}
                </p>
              ))}

            </div>

          </div>))}
      </div>
    );
  }

  render() {
    const { displayShareMesage } = this.state;

    return (
      <div>
        <HeaderLocation />
        <br />
        <br />
        <br />
        {this.filtersButtons()}
        { displayShareMesage ? <p className="alert">Link copiado!</p> : <div />}
        {this.inputCard()}
      </div>
    );
  }
}

export default ReceitasFeitas;
