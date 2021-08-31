import styled from 'styled-components';

export const HotelContent = styled.div`
    display: flex;
    

`;

export const HotelInformation = styled.div`
  h5{
      font-size: var(--fontSize-6);
      font-weight:bold;
  }
  p{
      font-size: var(--fontSize-2);
      line-height:var(--lineHeight-tight);
      color:var(--color-text-grey);
  }
`;

export const HotelImages = styled.div`
    display:flex;
    margin-left:1.5rem;
`;

export const Image = styled.img`
    width: 125px;
    height: 125px;
    background: green;
    border-radius:5px;
    margin: 0 10px;
`;