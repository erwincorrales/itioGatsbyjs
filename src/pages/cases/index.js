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
        <CaseFolder title='KOALAQA' link='/cases/koalaqa' />   
        <CaseFolder title='TRIPRITE' link='/cases/triprite' />
        <CaseFolder title='OIL RIG HUMAN SAFETY MANAGMENT' link='/cases/oilrig' />
        <CaseFolder title='ENERGY MANAGMENT' link='/cases/energy'/>
        <CaseFolder title='SWIFTSOLE' link='/cases/swiftsole' />
      </div>
    </Section>
  </Layout>
)

export default CaseStudiesDashboard

const Section = styled.section`
  position: absolute;
  background: white;
  top:0; left:0; width: 100vw;
  z-index: 10;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-content: center;
  /* flex: 1 1 0; */

  div:first-child{
      max-width: 800px;
  }

  
  @media (min-width: 767px){
    position: relative;
    height: auto;
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
