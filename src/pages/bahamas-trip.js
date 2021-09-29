import * as React from "react"

import AccomodationWidget from "../components/BahamasDashboard/Widgets/AccomodationWidget/AccomodationWidget"
import Header from "../components/BahamasDashboard/Header/Header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from 'styled-components';

const BahamasDashboard = () => (
  <Layout minimalHeader noContainer>
    <Seo title="Bahamas Trip" />
    <Header />
    <Grid className="container">
      <AccomodationSection>
        <AccomodationWidget/>
      </AccomodationSection>
      <FlightTrackerSection>
        
      </FlightTrackerSection>
      <ItinerarySection>

      </ItinerarySection>
      <AnnouncementsSection>

      </AnnouncementsSection>
    </Grid>
  </Layout>
)

export default BahamasDashboard

const Grid = styled.div`
    width:100%;
    height:100vh;
    margin:0 auto;
    margin-top:4rem;
    display:grid;
    gap:2rem;
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
    padding:1rem;
`;

const AccomodationSection = styled(GridSection)`
    /* background-color:red; */
    grid-area: 🏠;
`;
const FlightTrackerSection = styled(GridSection)`
    background-color:green;
    grid-area: ✈;
`;
const ItinerarySection = styled(GridSection)`
    background-color:blue;
    grid-area: 📑;
`;
const AnnouncementsSection = styled(GridSection)`
    background-color:purple;
    grid-area: 🗣;
`;