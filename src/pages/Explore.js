import React from 'react';
import { useHistory } from "react-router-dom";

function Explore() {
    const history = useHistory();
  return (
    <div >
        <button onClick={() => history.push("/explore-foods")} data-testid="explore-food" type="button">Explorar Comidas</button>
        <button onClick={() => history.push("/explore-drinks")} data-testid="explore-drinks" type="button">Explorar Bebidas</button>
    </div>
  );
}

export default Explore;
