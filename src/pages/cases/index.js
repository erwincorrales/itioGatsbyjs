import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import CaseFolder from '../../components/cases/CaseFolder'
import styled from "styled-components"

const CaseStudiesDashboard = () => (
  <Layout vh nohome>
    <Seo title="Case Studies"/>
    <Section>
      <div className='d-flex flex-wrap align-content-around align-items-baseline justify-content-around p-0 p-md-4 mx-1' >
        <CaseFolder link='/cases/koalaqa'>KOALAQA</CaseFolder>   
        <CaseFolder link='/cases/triprite'>TRIPRITE</CaseFolder>
        <CaseFolder link='/cases/oilrig'><p>OIL RIG<br/>HUMAN SAFETY<br/>MANAGMENT</p></CaseFolder>
        <CaseFolder link='/cases/energy'>ENERGY MANAGMENT</CaseFolder>
        <CaseFolder link='/cases/swiftsole'>SWIFTSOLE</CaseFolder>
      </div>
    </Section>
  </Layout>
)

export default CaseStudiesDashboard

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  background: white;
  width: 100vw;
  z-index: 10;
  height: calc(100vh - 100px);

  &>div{
      max-width: 800px;
  }

  
  @media (min-width: 767px){
    position: relative;
    height: auto;
    min-height: 500px;
    div > div:nth-child(1){
      order: 1;
    }
    div > div:nth-child(2){
      order: 2;
    }
    div > div:nth-child(3){
      order: 4
    }
    div > div:nth-child(4){
      order: 5
    }
    div > div:nth-child(5){
      order: 3;
    }
  }
`
