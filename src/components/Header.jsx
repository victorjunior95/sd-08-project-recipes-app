import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonSearch from './ButtonSearch';
import HeaderTitle from './HeaderTitle';
import PerfilLink from './PerfilLink';

export default function Header() {
  const history = useHistory();
  const title = history.location.pathname;
  const aTitle = title.split('/');
  if (aTitle[3] === 'area') aTitle.splice(aTitle.length - 1, 1, 'origem');

  if (!title.includes('explorar') && !title.includes('perfil')
    && !title.includes('receitas')) {
    return (
      <header>
        <PerfilLink />
        <HeaderTitle title={ title } />
        <ButtonSearch type="search" />
      </header>
    );
  }
  if (aTitle[3] === 'origem') {
    return (
      <header>
        <PerfilLink />
        <HeaderTitle title={ title } />
        <ButtonSearch type="origem" />
      </header>
    );
  }
  return (
    <header>
      <PerfilLink />
      <HeaderTitle title={ title } />
    </header>
  );
}
