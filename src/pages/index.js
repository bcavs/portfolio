import * as React from "react"

import ContactForm from "../components/ContactForm/ContactForm"
import Layout from "../components/layout"
import { Link } from "gatsby"
import PreviousEmployers from "../components/PreviousEmployers"
import ProjectsGroup from '../components/ProjectsGroup'
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const IndexPage = () => (
  <Layout title="Home">
    <section id="personal-intro" className="flex justify-center container">
      <p className="text-lg md:text-2xl text-center leading-normal my-12 mx-8 max-w-4xl">
        Hi! I'm <span className="text-electric-purple font-bold">Ben</span>, a <span className="text-electric-purple font-bold">front-end software engineer</span> that loves working with modern web development technologies like <span className="text-electric-purple">Next.js</span>, <span className="text-electric-purple">Svelte</span>, <span className="text-electric-purple">React</span>, and <span className="text-electric-purple">React Native</span>. With over <span className="text-electric-purple font-bold">8 years of experience</span>, I have built a variety of projects ranging from mobile apps for startups to websites for international corporations.
      </p>
    </section>
    <PreviousEmployers/>
    <hr className="my-6" style={{ maxWidth:"500px", padding:"0 30px", borderTopWidth: '2px', margin:"50px auto" }}/>
    <section id="projects-section">
      <ProjectsGroup/>
    </section>
    <PageSection >
      <ContactForm/>
    </PageSection>
  </Layout>
)

export default IndexPage


const PageSection = styled.section`
  margin-top: 75px;
`;