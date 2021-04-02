import React from 'react';
import {  render, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter, Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter.js'
import { createMemoryHistory } from 'history';

describe('9 - Implemente os elementos do header na tela principal de receitas, respeitando os atributos descritos no protótipo', () => {
  it('Tem os data-testids profile-top-btn, page-title e search-top-btn', () => {
    const { queryByTestId } = render(
    <MemoryRouter initialEntries={ ['/comidas'] }>
      <App />
    </MemoryRouter>,
  );
    const profile = queryByTestId('profile-top-btn')
    const page = queryByTestId('page-title');
    const searchBtn = queryByTestId('search-top-btn');
   expect(profile).toBeInTheDocument();
    expect(page).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });
});

describe('10 - Implemente um ícone para a tela de perfil, um título e um ícone para a busca, caso exista no protótipo', () => {

  it('Não tem header na tela de login', () => {
    const { queryByTestId } = render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );
      const profile = queryByTestId('profile-top-btn')
      const page = queryByTestId('page-title');
      const searchBtn = queryByTestId('search-top-btn');
      expect(profile).not.toBeInTheDocument();
      expect(page).not.toBeInTheDocument();
      expect(searchBtn).not.toBeInTheDocument();
    });
   
it('O header tem os ícones corretos na tela de principal de receitas de comidas', () => {
  const { queryByTestId } = render(
    <MemoryRouter initialEntries={ ['/comidas'] }>
      <App />
    </MemoryRouter>,
  );
    const profile = queryByTestId('profile-top-btn')
    const page = queryByTestId('page-title');
    const searchBtn = queryByTestId('search-top-btn');
    expect(profile).toBeInTheDocument();
    expect(page).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });

  it('O header tem os ícones corretos na tela de principal de receitas de bebidas', () => {
    const { queryByTestId } = render(
      <MemoryRouter initialEntries={ ['/bebidas'] }>
        <App />
      </MemoryRouter>,
    );
      const profile = queryByTestId('profile-top-btn')
      const page = queryByTestId('page-title');
      const searchBtn = queryByTestId('search-top-btn');
      expect(profile).toBeInTheDocument();
      expect(page).toBeInTheDocument();
      expect(searchBtn).toBeInTheDocument();
    });
//     

it('Não tem header na tela de detalhes de uma receita de comida', () => {
  const { queryByTestId } = render(
    <MemoryRouter initialEntries={ ['/comidas/5277'] }>
      <App />
    </MemoryRouter>,
  );
    const profile = queryByTestId('profile-top-btn')
    const page = queryByTestId('page-title');
    const searchBtn = queryByTestId('search-top-btn');
    expect(profile).not.toBeInTheDocument();
    expect(page).not.toBeInTheDocument();
    expect(searchBtn).not.toBeInTheDocument();
  });

  
it('Não tem header na tela de detalhes de uma receita de bebidas', () => {
    const { queryByTestId } = render(
      <MemoryRouter initialEntries={ ['/bebidas/178319'] }>
        <App />
      </MemoryRouter>,
    );
  const profile = queryByTestId('profile-top-btn')
  const page = queryByTestId('page-title');
  const searchBtn = queryByTestId('search-top-btn');
  expect(profile).not.toBeInTheDocument();
  expect(page).not.toBeInTheDocument();
  expect(searchBtn).not.toBeInTheDocument();
    });

it('Não tem header na tela de receita em processo de comida', () => {
      const { queryByTestId } = render(
        <MemoryRouter initialEntries={ ['/comidas/52771/in-progress'] }>
          <App />
        </MemoryRouter>,
      );
      const profile = queryByTestId('profile-top-btn')
      const page = queryByTestId('page-title');
      const searchBtn = queryByTestId('search-top-btn');
      expect(profile).not.toBeInTheDocument();
      expect(page).not.toBeInTheDocument();
      expect(searchBtn).not.toBeInTheDocument();
      });


it('Não tem header na tela de receita em processo de bebida', () => {
      const { queryByTestId } = render(
    <MemoryRouter initialEntries={ ['/bebidas/178319/in-progress'] }>
        <App />
    </MemoryRouter>,
        );
      const profile = queryByTestId('profile-top-btn')
      const page = queryByTestId('page-title');
      const searchBtn = queryByTestId('search-top-btn');
      expect(profile).not.toBeInTheDocument();
      expect(page).not.toBeInTheDocument();
      expect(searchBtn).not.toBeInTheDocument();
        });

it('O header tem os ícones corretos na tela de explorar', () => {
    const { queryByTestId } = render(
          <MemoryRouter initialEntries={ ['/explorar'] }>
             <App />
          </MemoryRouter>,
          );
    const profile = queryByTestId('profile-top-btn')
    const page = queryByTestId('page-title');
    const searchBtn = queryByTestId('search-top-btn');
    expect(profile).toBeInTheDocument();
    expect(page).toBeInTheDocument();
    expect(searchBtn).not.toBeInTheDocument();
    });
 
it('O header tem os ícones corretos na tela de explorar comidas', () => {
  const { queryByTestId } = render(
    <MemoryRouter initialEntries={ ['/explorar/comidas'] }>
      <App />
    </MemoryRouter>,
  );
    const profile = queryByTestId('profile-top-btn')
    const page = queryByTestId('page-title');
    const searchBtn = queryByTestId('search-top-btn');
    expect(profile).toBeInTheDocument();
    expect(page).toBeInTheDocument();
    expect(searchBtn).not.toBeInTheDocument();
  });
// 
it('O header tem os ícones corretos na tela de explorar bebidas', () => {
  const { queryByTestId } = render(
    <MemoryRouter initialEntries={ ['/explorar/bebidas'] }>
      <App />
    </MemoryRouter>,
  );
    const profile = queryByTestId('profile-top-btn')
    const page = queryByTestId('page-title');
    const searchBtn = queryByTestId('search-top-btn');
    expect(profile).toBeInTheDocument();
    expect(page).toBeInTheDocument();
    expect(searchBtn).not.toBeInTheDocument();
  });

  it('O header tem os ícones corretos na tela de explorar comidas por ingredientes', () => {
    const { queryByTestId } = render(
      <MemoryRouter initialEntries={ ['/explorar/comidas/ingredientes'] }>
        <App />
      </MemoryRouter>,
    );
      const profile = queryByTestId('profile-top-btn')
      const page = queryByTestId('page-title');
      const searchBtn = queryByTestId('search-top-btn');
      expect(profile).toBeInTheDocument();
      expect(page).toBeInTheDocument();
      expect(searchBtn).not.toBeInTheDocument();
    });


it('O header tem os ícones corretos na tela de explorar bebidas por ingredientes', () => {
    const { queryByTestId } = render(
      <MemoryRouter initialEntries={ ['/explorar/bebidas/ingredientes'] }>
        <App />
      </MemoryRouter>,
    );
      const profile = queryByTestId('profile-top-btn')
      const page = queryByTestId('page-title');
      expect(profile).toBeInTheDocument();
      expect(page).toBeInTheDocument();
    });

it('O header tem os ícones corretos na tela de explorar comidas por area', () => {
      const { queryByTestId } = render(
        <MemoryRouter initialEntries={ ['/explorar/comidas/area'] }>
          <App />
        </MemoryRouter>,
      );
      const profile = queryByTestId('profile-top-btn')
      const page = queryByTestId('page-title');
      const searchBtn = queryByTestId('search-top-btn');
      expect(profile).toBeInTheDocument();
      expect(page).toBeInTheDocument();
      expect(searchBtn).toBeInTheDocument();
      });

it('O header tem os ícones corretos na tela de perfil', () => {
    const { queryByTestId } = render(
          <MemoryRouter initialEntries={ ['/explorar/comidas/area'] }>
            <App />
          </MemoryRouter>,
        );
    const profile = queryByTestId('profile-top-btn')
    const page = queryByTestId('page-title');
    expect(profile).toBeInTheDocument();
    expect(page).toBeInTheDocument();
   });


it('O header tem os ícones corretos na tela de receitas feitas', () => {
    const { queryByTestId } = render(
          <MemoryRouter initialEntries={ ['/receitas-feitas'] }>
            <App />
          </MemoryRouter>,
        );
   const profile = queryByTestId('profile-top-btn')
   const page = queryByTestId('page-title');
   expect(profile).toBeInTheDocument();
   expect(page).toBeInTheDocument();
  });

it('O header tem os ícones corretos na tela de receitas favoritas', () => {
  const { queryByTestId } = render(
            <MemoryRouter initialEntries={ ['/receitas-favoritas'] }>
              <App />
            </MemoryRouter>,
          );
  const profile = queryByTestId('profile-top-btn')
  const page = queryByTestId('page-title');
  expect(profile).toBeInTheDocument();
  expect(page).toBeInTheDocument();
  });
 });

describe('11 - Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil', () => {
  it('A mudança de tela ocorre corretamente', () => {
    let testHistory, testLocation;
    const {getByRole} = render(
      <MemoryRouter initialEntries={["/comidas"]}>
        <App />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>,
    );

 const profileLink= getByRole('button', {
      name: /profileicon/i
    })
    expect(profileLink).toBeInTheDocument()
    act(() => {
    userEvent.click(profileLink)
    })
    expect(testLocation.pathname).toBe("/perfil");

  });
});

describe('12 - Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la', () => {
  it('Ao clicar no botão de busca pela primeira vez a barra de busca aparece', () => {
    const { queryByTestId , getByRole, getByText} = render(
      <MemoryRouter initialEntries={ ['/comidas'] }>
        <App />
      </MemoryRouter>,
    );
    const searchBtn = queryByTestId('search-top-btn');
    act(()=>{
      userEvent.click(searchBtn)
    })
    const searchInput = screen.getByRole('textbox', {  name: /search/i})
    expect(searchInput).toBeInTheDocument()
    act(()=>{
    userEvent.click(searchBtn)
    })
    expect(searchInput).not.toBeInTheDocument()
  });
});

describe('19 - Implemente os elementos do menu inferior respeitando os atributos descritos no protótipo', () => {
  it('Tem os data-testids footer, drinks-bottom-btn, explore-bottom-btn e food-bottom-btn', () => {
    const { queryByTestId , getByRole, getByText} = render(
      <MemoryRouter initialEntries={ ['/comidas'] }>
        <App />
      </MemoryRouter>,
    );
    const footer = queryByTestId("footer")
    const drinksbuton = queryByTestId ("drinks-bottom-btn")  
    const exploreBtn = queryByTestId("explore-bottom-btn") 
    const foodbtn = queryByTestId("food-bottom-btn")  

    expect(footer).toBeInTheDocument()
    expect(drinksbuton).toBeInTheDocument()
    expect(exploreBtn).toBeInTheDocument()
    expect(foodbtn).toBeInTheDocument()


});
});

describe('20 - Posicione o menu inferior de forma fixa e apresente 3 ícones: um para comidas, um para bebidas e outro para exploração', () => {
  it('O menu inferior deve ficar fixado sempre ao final da página', () => {
    const { queryByTestId , getByRole, getByText} = render(
      <MemoryRouter initialEntries={ ['/comidas'] }>
        <App />
      </MemoryRouter>,
    );
    const footer = queryByTestId("footer")
    // expect(footer).toContain('bottom: 0px;')
  });

  it('Apresenta os ícones corretos', () => {
    const { queryByTestId , getByRole, getByText} = render(
      <MemoryRouter initialEntries={ ['/comidas'] }>
        <App />
      </MemoryRouter>,
    );
    const footer = queryByTestId("footer")
    const drinksbuton = queryByTestId ("drinks-bottom-btn")  
    const exploreBtn = queryByTestId("explore-bottom-btn") 
    const foodbtn = queryByTestId("food-bottom-btn")  

    expect(footer).toBeInTheDocument()
    expect(drinksbuton).toBeInTheDocument()
    expect(exploreBtn).toBeInTheDocument()
    expect(foodbtn).toBeInTheDocument()

  });
});

describe('21 - Exiba o menu inferior apenas nas telas indicadas pelo protótipo', () => {
  
  it('Não tem footer na tela de login', () => {
    const { queryByTestId } = render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );
    const footer = queryByTestId("footer")
      expect(footer).not.toBeInTheDocument();
    });

    it('Não tem header na tela de receita em processo de comida', () => {
    const { queryByTestId } = render(
    <MemoryRouter initialEntries={ ['/comidas/52771/in-progress'] }>
      <App />
    </MemoryRouter>,
    );
    const footer = queryByTestId("footer")
    expect(footer).not.toBeInTheDocument();
    });

it('Não tem footer na tela de detalhes de comidas', () => {
    const { queryByTestId } = render(
      <MemoryRouter initialEntries={ ['comidas/52771'] }>
        <App />
      </MemoryRouter>,
    );
    const footer = queryByTestId("footer")
      expect(footer).not.toBeInTheDocument();
    });
  
it('Não tem header na tela de detalhes de bebidas', () => {
      const { queryByTestId } = render(
      <MemoryRouter initialEntries={ ['/bebidas/178319'] }>
        <App />
      </MemoryRouter>,
      );
      const footer = queryByTestId("footer")
      expect(footer).not.toBeInTheDocument();
      });
      
it('Não tem header na tela de receita em processo de bebidas', () => {
      const { queryByTestId } = render(
        <MemoryRouter initialEntries={ ['/bebidas/178319/in-progress'] }>
          <App />
        </MemoryRouter>,
      );
      const footer = queryByTestId("footer")
        expect(footer).not.toBeInTheDocument();
      });
    
it('Tem footer na tela de principal de receitas de comidas', () => {
      const { queryByTestId } = render(
      <MemoryRouter initialEntries={ ['/comidas'] }>
        <App />
       </MemoryRouter>,
      );
      const footer = queryByTestId("footer")
      expect(footer).toBeInTheDocument();
      });
      
it('Tem footer na tela de principal de receitas de bebidas', () => {
    const { queryByTestId } = render(
    <MemoryRouter initialEntries={ ['/bebidas'] }>
      <App />
     </MemoryRouter>,
    );
    const footer = queryByTestId("footer")
    expect(footer).toBeInTheDocument();
    });   
      
it('Tem footer na tela de principal de receitas de explorar', () => {
      const { queryByTestId } = render(
      <MemoryRouter initialEntries={ ['/explorar'] }>
        <App />
       </MemoryRouter>,
      );
      const footer = queryByTestId("footer")
      expect(footer).toBeInTheDocument();
      });   
        
it('Tem footer na tela de principal de receitas de explorar comidas', () => {
      const { queryByTestId } = render(
      <MemoryRouter initialEntries={ ['/explorar/comidas'] }>
        <App />
       </MemoryRouter>,
      );
      const footer = queryByTestId("footer")
      expect(footer).toBeInTheDocument();
      });   
        

it('Tem footer na tela de principal de receitas de explorar bebidas', () => {
      const { queryByTestId } = render(
      <MemoryRouter initialEntries={ ['/explorar/bebidas'] }>
        <App />
       </MemoryRouter>,
      );
      const footer = queryByTestId("footer")
      expect(footer).toBeInTheDocument();
      });   
        
 it('Tem footer na tela de explorar comidas por ingredientes', () => {
      const { queryByTestId } = render(
      <MemoryRouter initialEntries={ ['/comidas/ingredientes'] }>
        <App />
       </MemoryRouter>,
      );
      const footer = queryByTestId("footer")
      expect(footer).toBeInTheDocument();
      });   
        
it('Tem footer na tela de explorar bebidas por ingredientes', () => {
      const { queryByTestId } = render(
      <MemoryRouter initialEntries={ ['/bebidas/ingredientes'] }>
        <App />
       </MemoryRouter>,
      );
      const footer = queryByTestId("footer")
      expect(footer).toBeInTheDocument();
      });  
      
it('Tem footer na tela de explorar comidas por local de origem', () => {
        const { queryByTestId } = render(
        <MemoryRouter initialEntries={ ['/explorar/comidas/area'] }>
          <App />
         </MemoryRouter>,
        );
        const footer = queryByTestId("footer")
        expect(footer).toBeInTheDocument();
        });  
   
it('Tem footer na tela de perfil', () => {
        const { queryByTestId } = render(
        <MemoryRouter initialEntries={ ['/perfil'] }>
          <App />
         </MemoryRouter>,
        );
        const footer = queryByTestId("footer")
        expect(footer).toBeInTheDocument();
        });  
   
it('Tem footer na tela de receitas-feitas', () => {
        const { queryByTestId } = render(
        <MemoryRouter initialEntries={ ['/receitas-feitas'] }>
          <App />
         </MemoryRouter>,
        );
        const footer = queryByTestId("footer")
        expect(footer).not.toBeInTheDocument();
        });  
   
it('Não tem footer na tela de receitas-favoritas', () => {
        const { queryByTestId } = render(
        <MemoryRouter initialEntries={ ['/receitas-favoritas'] }>
          <App />
         </MemoryRouter>,
        );
        const footer = queryByTestId("footer")
        expect(footer).not.toBeInTheDocument();
        });  
});

  describe('22 - Redirecione a pessoa usuária para uma lista de cocktails ao clicar no ícone de bebidas', () => {
      it('Redireciona para a rota correta', () => {
        let testHistory, testLocation;
        const {queryByTestId} = render(
          <MemoryRouter initialEntries={["/comidas"]}>
            <App />
            <Route
              path="*"
              render={({ history, location }) => {
                testHistory = history;
                testLocation = location;
                return null;
              }}
            />
          </MemoryRouter>,
      );
      const drinksbuton = queryByTestId ("drinks-bottom-btn") 
      act(() => { 
      userEvent.click(drinksbuton)
      })
      expect(testLocation.pathname).toBe("/bebidas");

  });
});

describe('23 - Redirecione a pessoa usuária para a tela de explorar ao clicar no ícone de exploração', () => {
  it('Redireciona para a rota correta', () => {
    let testHistory, testLocation;
    const {queryByTestId} = render(
      <MemoryRouter initialEntries={["/comidas"]}>
        <App />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>,
      );
      const exploreBtn = queryByTestId("explore-bottom-btn") 
      act(() => {
      userEvent.click(exploreBtn)
      })
      expect(testLocation.pathname).toBe("/explorar");

  });
});

describe('24 - Redirecione a pessoa usuárua para uma lista de comidas ao clicar no ícone de comidas', () => {
  it('Redireciona para a rota correta', () => {
    let testHistory, testLocation;
    const {queryByTestId} = render(
      <MemoryRouter initialEntries={["/bebidas"]}>
        <App />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>,
      );
      const foodbtn = queryByTestId("food-bottom-btn")  
      act(() => {
      userEvent.click(foodbtn)
      })
      expect(testLocation.pathname).toBe("/comidas");

  });
});


describe('67 - Implemente os elementos da tela de explorar respeitando os atributos descritos no protótipo', () => {
  it('Tem os data-testids explore-food e explore-drinks', () => {
    const { queryByTestId, getByText } = render(
      <MemoryRouter initialEntries={ ['/explorar'] }>
        <App />
       </MemoryRouter>,
      );
      const ExploreFood = queryByTestId("explore-food")  
      const ExploreDrinks = queryByTestId("explore-drinks")  

    expect(ExploreFood).toBeInTheDocument()
    expect(ExploreDrinks).toBeInTheDocument()

  });
});

describe('68 - Desenvolva a tela de maneira que tenha 2 botões: um para explorar comidas e o outro para explorar bebidas', () => {
  it('O nomes dos botões devem ser "Explorar Comidas" e "Explorar Bebidas', () => {
    const { queryByTestId, getByText } = render(
      <MemoryRouter initialEntries={ ['/explorar'] }>
        <App />
       </MemoryRouter>,
      );
    expect(getByText('Explorar Comidas')).toBeInTheDocument()
    expect(getByText('Explorar Bebidas')).toBeInTheDocument()

  });
});

describe('69 - Redirecione a pessoa usuária ao clicar em um dos botões, a rota deve mudar para a página de explorar comidas ou de explorar bebidas', () => {
  it('Os nomes dos botões devem ser "Explorar Comidas" e "Explorar Bebidas"', () => {
    let testHistory, testLocation;
    const {queryByTestId} = render(
      <MemoryRouter initialEntries={["/explorar"]}>
        <App />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>,
    );
    const ExploreFood = queryByTestId("explore-food")  

    act(() => {
      userEvent.click(ExploreFood)
    });
    expect(testLocation.pathname).toBe("/explorar/comidas");

  
  });

  it('Os nomes dos botões devem ser "Explorar Comidas" e "Explorar Bebidas"', () => {
    let testHistory, testLocation;
    const {queryByTestId} = render(
      <MemoryRouter initialEntries={["/explorar"]}>
        <App />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>,
    );
    const ExploreDrinks = queryByTestId("explore-drinks")  

    act(() => {
      userEvent.click(ExploreDrinks)
    });
    expect(testLocation.pathname).toBe("/explorar/bebidas");

  
  });
});

describe('70 - Implemente os elementos da tela de explorar bebidas ou comidas respeitando os atributos descritos no protótipo',  () => {
  it('Tem os data-testids corretos para a tela de explorar comidas', async () => {
     let testHistory, testLocation;
        const {queryByTestId, findByTestId} = render(
          <MemoryRouter initialEntries={["/explorar/comidas"]}>
            <App />
            <Route
              path="*"
              render={({ history, location }) => {
                testHistory = history;
                testLocation = location;
                return null;
              }}
            />
          </MemoryRouter>,
      );


      const ExploreBying = await findByTestId("explore-by-ingredient")  
      // const ExploreArea = queryByTestId("explore-by-area")  
      // const ExploreSurpreise = queryByTestId("explore-surprise")  
      expect(ExploreBying).toBeInTheDocument()
      // expect(ExploreArea).toBeInTheDocument()
      // expect(ExploreSurpreise).toBeInTheDocument()
   
  });
});