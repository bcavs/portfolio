import styled from 'styled-components';

export const HotelContent = styled.div`
    display: flex;
`;

export const RoomsContent = styled.div`
    display: flex;
    flex:1;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 20px 0;
    margin-top:30px;
    position: relative;
`;

export const HotelInformation = styled.div`
  h5{
      font-size: var(--fontSize-6);
      font-weight:bold;
  }
  p, a{
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

export const StyledRoomCard = styled.div`
    width: 20%;
    height: 100%;
    margin: 0 2rem 0 0; 
    padding: 1rem;
    h4{
        font-size: var(--fontSize-2);
        font-weight: bold;
    }
`;

export const RoomImage = styled.div`
  
`;
