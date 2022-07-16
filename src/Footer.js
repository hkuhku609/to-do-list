import React from 'react';

const Footer = ({ itemNum }) => {
  return (
    <div className="footer">
      <div
        className="totalItem"
        style={itemNum > 0 ? { display: 'block' } : null}
      >
        {itemNum === 0
          ? ''
          : `Total: ${itemNum} ${itemNum === 1 ? 'item' : 'items'}`}
      </div>
      <div className="myName">
        Coded by{' '}
        <a href="https://stk-portfolio.netlify.app/">Shuk Ting Kwong</a>
      </div>
    </div>
  );
};

export default Footer;
