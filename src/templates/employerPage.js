import React, { useState, useContext } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { HiMail } from "react-icons/hi";
import Layout from "../components/layout"
import HorizontalScroll from 'react-scroll-horizontal'

import { ContactFormContext } from "../context"

const EmployerPage = ({pageContext}) => {
  console.log("pageContext: ", pageContext)
  const { openContactForm } = useContext(ContactFormContext)
  return (
    <Layout title={pageContext.title} noContainer={true} styles={{overflow: 'hidden'}}>
      <div className="employer-page container py-8 flex flex-col">
        <span className="flex items-end">
          <h1 className="text-3xl uppercase font-extrabold leading-none">{pageContext.title}</h1>
          <p className="mx-5">{`${pageContext.date}`}</p>
        </span>
        <p className="my-4">{pageContext.jobDescription}</p>
      </div>
        {/* //Add image grid here */}
       <SiteCardContainer>
        <HorizontalScroll reverseScroll>
          {pageContext.sites.map((site, i) => {
            return(
              <SiteCard key={i}>
                <img src={site.imageSrc} />
              </SiteCard>
            )
          })}
        </HorizontalScroll>
       </SiteCardContainer>

    </Layout>
  )
}

export default EmployerPage

const SiteCardContainer = styled.div`
  height: 200px;
  position: relative;
`;


const SiteCard = styled.div`
  width: 350px;
  border-radius: 6px;
  height:100%;
  margin: 15px;
`