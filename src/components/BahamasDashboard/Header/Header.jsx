import { Date, Headline, Overlay, Wrapper } from './Header.styled';

import React from 'react';

// import PropTypes from 'prop-types';


const Header = (props) => (
  <Wrapper>
    <div className="container">
      <Headline>Bahamas Trip 2021</Headline>
      <Date>{`December 27, 2021 \u2014 January 3 2022`}</Date>
    </div>
    <Overlay/>
  </Wrapper>
);

// Header.propTypes = {
//   // bla: PropTypes.string,
// };

// Header.defaultProps = {
//   // bla: 'test',
// };

export default Header;
