import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function ExplorerFoodsRegion() {
  const [areaList, setAreaList] = useState([]);
  return (
    <div>
      <Header name="Explorar Origem" icon="true" currentPage="Foods" />
      ...
      <Footer />
    </div>
  );
}

export default ExplorerFoodsRegion;
