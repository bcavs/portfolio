import * as React from "react"

import { AccomodationSection, AnnouncementsSection, FlightTrackerSection, Grid, ItinerarySection } from "./bahamas-trip.styled"

import AccomodationWidget from "../../components/BahamasDashboard/Widgets/AccomodationWidget/AccomodationWidget"
import Header from "../../components/BahamasDashboard/Header/Header"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BahamasDashboard = () => (
  <Layout minimalHeader noContainer>
    <SEO title="Bahamas Trip" />
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
