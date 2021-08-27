import * as React from "react"

import Header from "../components/BahamasDashboard/Header/Header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BahamasDashboard = () => (
  <Layout minimalHeader noContainer>
    <SEO title="404: Not found" />
    <Header />
  </Layout>
)

export default BahamasDashboard
