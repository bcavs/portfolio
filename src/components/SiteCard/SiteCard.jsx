import React from 'react';
import styled from "styled-components"
import PropTypes from 'prop-types';
//import { Test } from './SiteCard.styles';

const SiteCard = (props) => (
  <StyledSiteCard href={props.link}>
    <img src={props.src} />
    <p>{props.url}</p>
  </StyledSiteCard>
);

SiteCard.propTypes = {
  // bla: PropTypes.string,
};

SiteCard.defaultProps = {
  // bla: 'test',
};

export default SiteCard;

const StyledSiteCard = styled.a`
  border-radius: 6px;
  margin: 15px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);
  transition: all .3s;
  img{
    border-radius: 5px;
    max-width:350px;
    height:100%;
  }
  &:hover{
    cursor: pointer;
    /* transform: translateY(-50px); */
  }
  p{
    text-align: center;
    margin-top: 10px;
  }

`