import styled from 'styled-components';

export const Grid = styled.div`
    width:100%;
    height:100vh;
    display:grid;
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: repeat(12,auto);
    grid-template-areas: 
        "🏠 🏠 🏠 🏠 🏠 🏠 🏠 ✈ ✈ ✈ ✈ ✈"
        "📑 📑 📑 📑 📑 🗣 🗣 🗣 🗣 🗣 🗣 🗣"
        ;
`;

const GridSection = styled.section`
    width:100%;
    height:100%;
`;

export const AccomodationSection = styled(GridSection)`
    background-color:red;
    grid-area: 🏠;
`;
export const FlightTrackerSection = styled(GridSection)`
    background-color:green;
    grid-area: ✈;
`;
export const ItinerarySection = styled(GridSection)`
    background-color:blue;
    grid-area: 📑;
`;
export const AnnouncementsSection = styled(GridSection)`
    background-color:purple;
    grid-area: 🗣;
`;