import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonSearch from './ButtonSearch';
import HeaderTitle from './HeaderTitle';
import PerfilLink from './PerfilLink';

export default function Header() {
  const history = useHistory();
  const { pathname } = history.location;
  const aTitle = pathname.split('/');
  if (aTitle[3] === 'area') aTitle.splice(aTitle.length - 1, 1, 'origem');

  if (!pathname.includes('explorar') && !pathname.includes('perfil')
    && !pathname.includes('receitas')) {
    return (
      <header>
        <PerfilLink />
        <HeaderTitle title={ pathname } />
        <ButtonSearch type="search" />
      </header>
    );
  }
  if (aTitle[3] === 'origem') {
    return (
      <header>
        <PerfilLink />
        <HeaderTitle title={ pathname } />
        <ButtonSearch type="origem" />
      </header>
    );
  }
  return (
    <header>
      <PerfilLink />
      <HeaderTitle title={ pathname } />
    </header>
  );
}
