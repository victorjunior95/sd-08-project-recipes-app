import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { showCompleteLists } from '../../services/api';

function ExplorerFoodsRegion() {
  const [areaList, setAreaList] = useState([]);
  useEffect(() => {
    async function setTheList() {
      const requestList = await showCompleteLists('area', 'Foods');
      setAreaList(requestList.meals);
    } setTheList();
  }, []);
  const areaOptions = areaList.map(({ strArea }) => (
    <option
      key={ strArea }
      data-testid={ `${strArea}-option` }
      value={ strArea }
    >
      {strArea}
    </option>));
  return (
    <div>
      <Header name="Explorar Origem" icon="true" currentPage="Foods" />
      <select data-testid="explore-by-area-dropdown">
        {areaOptions}
      </select>
      <Footer />
    </div>
  );
}

export default ExplorerFoodsRegion;
