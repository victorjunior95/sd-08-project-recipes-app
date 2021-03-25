import React, { Component } from 'react';
import copy from 'clipboard-copy';
import HeaderLocation from '../components/Header';
import FilterButtons from '../components/FilterButtons';
import DoneAndFavoriteCards from '../components/DoneAndFavoriteCards';

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
    this.share = this.share.bind(this);
    this.filters = this.filters.bind(this);
  //   this.APIbebidas = this.APIbebidas.bind(this);
  //   this.twelveCards = this.twelveCards.bind(this);
  // }
  }

  filters(par) {
    const { recipes } = this.state;
    let newRecipes = [];
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

  render() {
    const { displayShareMesage, newRecipes, recipes, filtered } = this.state;

    return (
      <div>
        <HeaderLocation />
        <br />
        <br />
        <br />
        <FilterButtons filters={ this.filters } />
        { displayShareMesage ? <p className="alert">Link copiado!</p> : <div />}
        <DoneAndFavoriteCards
          newRecipes={ newRecipes }
          recipes={ recipes }
          filtered={ filtered }
          share={ this.share }
        />
      </div>
    );
  }
}

export default ReceitasFeitas;
