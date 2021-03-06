import React from 'react';

import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => {
  return (
    <header>
      <SearchForm search={props.search} />
      <Nav search={props.search}/>
    </header>
  );
}

export default Header;
