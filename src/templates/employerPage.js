import Layout from "../components/layout"
import React from "react"
import SiteCard from "../components/SiteCard"
import styled from "styled-components"

const EmployerPage = ({pageContext}) => {
  console.log("pageContext: ", pageContext)

  return (
    <Layout title={pageContext.title} noContainer={false} styles={{overflow: 'hidden'}}>
      <HeadSection className="employer-page container py-8 px-4 flex flex-col">
        <span className="flex items-start md:items-end flex-col md:flex-row">
          <h1 className="text-3xl uppercase font-extrabold leading-none">{pageContext.title}</h1>
          <p className="md:mx-5">{`${pageContext.date}`}</p>
        </span>
        <p className="my-4">{pageContext.jobDescription}</p>
      </HeadSection>
       <SiteCardContainer>
          <InnerCardContainer id="card-container" >
            {pageContext.sites.map((site, i) => {
              return(
                <SiteCard key={i} src={site.imageSrc} link={site.link} url={site.url}/>
              )
            })}
          </InnerCardContainer>
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
  overflow-x: auto;
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

