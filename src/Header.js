import React from 'react';

const Header = ({ title }) => {
  return (
    <header>
      <h1 className="title">
        {title}
        <i className="fa-solid fa-list-check" />
      </h1>
    </header>
  );
};

export default Header;
