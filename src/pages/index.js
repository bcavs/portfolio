import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PreviousEmployers from "../components/PreviousEmployers"
import ProjectsGroup from '../components/ProjectsGroup'


const IndexPage = () => (
  <Layout title="Home">
    <section id="personal-intro" className="flex justify-center container">
      <p className="text-lg md:text-2xl text-center leading-normal my-12 mx-8 max-w-4xl">
        Hi! I'm <span className="text-electric-purple font-bold">Ben</span>, a <span className="text-electric-purple font-bold">fullstack web developer</span> that loves working with modern web development technologies like <span className="text-electric-purple">Gatsby</span>, <span className="text-electric-purple">Svelte</span>, <span className="text-electric-purple">React</span>, and <span className="text-electric-purple">React Native</span>. With over <span className="text-electric-purple font-bold">6 years of experience</span>, I have built projects ranging from mobile apps for startups to websites for international corporations.
      </p>
    </section>
    <PreviousEmployers/>
    <hr className="my-6" style={{ maxWidth:"500px", padding:"0 30px", borderTopWidth: '2px', margin:"50px auto" }}/>
    <div id="projects-section">
      <ProjectsGroup/>
    </div>
  </Layout>
)

export default IndexPage
