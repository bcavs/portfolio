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
    <Layout title={pageContext.title} noContainer={false} styles={{overflow: 'hidden'}}>
      <HeadSection className="employer-page container py-8 px-4 flex flex-col">
        <span className="flex items-end">
          <h1 className="text-3xl uppercase font-extrabold leading-none">{pageContext.title}</h1>
          <p className="mx-5">{`${pageContext.date}`}</p>
        </span>
        <p className="my-4">{pageContext.jobDescription}</p>
      </HeadSection>
        {/* //Add image grid here */}
       <SiteCardContainer>
        {/* <HorizontalScroll reverseScroll> */}
            <InnerCardContainer id="card-container" >
              {pageContext.sites.map((site, i) => {
                return(
                  <SiteCard key={i}>
                    <img src={site.imageSrc} />
                  </SiteCard>
                )
              })}
            </InnerCardContainer>
        {/* </HorizontalScroll> */}
       </SiteCardContainer>

    </Layout>
  )
}

export default EmployerPage
const HeadSection = styled.div`
  display:flex;
  flex-flow: column;
  margin: 0 auto;
`

const SiteCardContainer = styled.div`
  position: relative;
  overflow-x: scroll;
  height: 250px;
  ::-webkit-scrollbar{
    height:7px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 50px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 50px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;

const InnerCardContainer = styled.div`
  display: flex;
  height: 210px;
  position: absolute;
`

const SiteCard = styled.div`
  border-radius: 6px;
  margin: 15px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.25);
  img{
    border-radius: 5px;
    max-width:350px;
    height:100%;
  }
  &:hover{
    cursor: pointer;
  }
`