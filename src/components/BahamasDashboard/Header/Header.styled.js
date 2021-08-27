import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow:column;
    justify-content: flex-end;
    height:350px; 
    background-color:var(--color-purple);
    background-image: url("https://source.unsplash.com/KMn4VEeEPR8/");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color:white;
    position:relative;
    .container{
        margin: 0 auto;
        z-index: 1;
    }
`;

export const Overlay = styled.div`
    position:absolute;
    width:100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 0;
`;

export const Headline = styled.h1`
    font-size: var(--fontSize-8);
    font-weight: bold;
    margin-bottom: -10px;
`;

export const Date = styled.h3`
    padding-bottom: 20px;
    font-size:var(--fontSize-3);
`;