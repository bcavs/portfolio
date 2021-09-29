import styled, { css } from "styled-components"

// import PropTypes from 'prop-types';
import React from 'react';

//import { Test } from './SiteCard.styles';

const SiteCard = (props) => { 
  return(
    <StyledSiteCard href={props.link} isLinked={false}>
      <img src={props.src} alt={`${props.url}`}/>
      <p>{props.url}</p>
    </StyledSiteCard>
  )
};

// SiteCard.propTypes = {
//   // bla: PropTypes.string,
// };

// SiteCard.defaultProps = {
//   // bla: 'test',
// };

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
  // If the component doesn't have a link attached to it
  ${props => props.href ? 
    (css`
      :hover{
        transform: scale(1.04)
      }
    `)
  :
    (css`
      :hover{
        cursor: not-allowed;
      }
    `)
  }
`