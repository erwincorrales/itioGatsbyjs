import React from 'react' ;
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from '../components/button';

const Careers = () =>{
    return(
        <Layout>
            <Seo title="Home" />
            <Article>
                <Header>
                    <div>
                        <h1>JOIN US AT <strong>ITIO</strong></h1>
                        <p>Work at the most dynamic<br className='d-md-none'/> and sucessful agency.</p>
                    </div>
                    <HeaderImgContainer>
                        <StaticImage src ='../images/careers/itio-careers-header.png' alt='itio-career-img'/>
                    </HeaderImgContainer>
                </Header>
                <Section>
                    <BackgroundContainer>
                        <StaticImage src='../images/careers/itio-career-el-background-sm.png' alt='itio-career-bg' className='d-lg-none' objectFit='fill'/>
                        <StaticImage src='../images/careers/itio-career-el-background-lg.png' alt='itio-career-bg' className='d-none d-lg-block' objectFit='fill'/>
                    </BackgroundContainer>
                    <Element>
                        <ElImgContainer>
                            <StaticImage src='../images/careers/itio-career-el1.png' alt='itio-career-img-1'/>
                        </ElImgContainer>
                        <h3>Product Delevopment</h3>
                        <div>
                            <p>ITIO launches products with a systematic flow that benefits bussiness with solutions that have high impact on their clients</p>
                        </div>
                    </Element>
                    <Element>
                        <ElImgContainer>
                            <StaticImage src='../images/careers/itio-career-el2.png' alt='el12' />
                        </ElImgContainer>
                        <h3>Marketing</h3>
                        <div>
                            <p>ITIO launches products with a systematic flow that benefits bussiness with solutions that have high impact on their clients</p>
                        </div>
                    </Element>
                    <Element>
                        <ElImgContainer>
                            <StaticImage src='../images/careers/itio-career-el3.png' alt='el3' />
                        </ElImgContainer>
                        <h3>Product Design</h3>
                        <div>
                        <p>ITIO launches products with a systematic flow that benefits bussiness with solutions that have high impact on their clients</p>
                        </div>
                    </Element>
                </Section>
                <ApplySection>
                    <ApplyHeader>
                        <h1>WE'RE HIRING</h1>
                        <p>Work at the most dynamic and sucessful agency. We're hiring.</p>
                    </ApplyHeader>
                    <Jobs>
                        <div>
                            <aside>
                                <h2>WordPress Developer</h2>
                                <h4>Colombia / Remote</h4>
                            </aside>
                            <p>Work at the most dynamic and sucessful agency. We're hiring.</p>
                        </div>
                        <BtnContainer>
                            <div>
                                <Button label='APPLY NOW' small pressed/>
                            </div>
                            <div>
                                <Button label='APPLY NOW' small/>
                            </div>
                        </BtnContainer>
                    </Jobs>
                    <Jobs>
                        <div>
                            <aside>
                                <h2>Product Designer</h2>
                                <h4>Colombia / Remote</h4>
                            </aside>
                            <p>Work at the most dynamic and sucessful agency. We're hiring.</p>
                        </div>
                        <BtnContainer>
                            <div>
                                <Button label='APPLY NOW' small pressed/>
                            </div>
                            <div>
                                <Button label='APPLY NOW' small/>
                            </div>
                        </BtnContainer>
                    </Jobs>
                    <Jobs>
                        <div>
                            <aside>
                                <h2>Marketing Manager</h2>
                                <h4>Colombia / Remote</h4>
                            </aside>
                            <p className='d-md-none'>Work at the most dynamic<br/>and succesful agency.</p>
                            <p className='d-none d-md-block'>Work at the most dynamic and sucessful agency. We're hiring.</p>
                        </div>
                        <BtnContainer>
                            <div>
                                <Button label='APPLY NOW' small pressed/>
                            </div>
                            <div>
                                <Button label='APPLY NOW' small/>
                            </div>
                        </BtnContainer>
                    </Jobs>
                </ApplySection>
            </Article>
        </Layout>
    )
}

export default Careers;

const Article = styled.article`
    h1{
        font: 700 29px junegull;
    }

    p{
      font: 400 16px nunito; 
    }

    h3{
        font: 700 25px sans;
        padding: 23px auto ;
    }
    
    strong{
        color: #9E6CFF;
    }

    @media (min-width: 767px){
        h1{
            font:700 50px junegull;
            margin-bottom: 24px;
        }
    }
`
//header
const Header = styled.section`
    text-align: center;
    height: 490px;
    padding: 57px;
    
    @media (min-width: 767px ){
        height: 537px;
        padding-bottom: 17px;    
    }

    @media (min-width: 991px){
        height: 629.5px;
        display:flex;
        align-content: center;
        justify-content: space-around;

        div:first-child{
            align-self: center; 
            align-content:center;
            margin: 0 auto;
        }
    }
`
const BackgroundContainer = styled.div`
    position: absolute; top:0; left:0; width: 300vw; height: 100%;
`
const HeaderImgContainer = styled.div`
    width: 280px; height: 207px;
    margin: 45px auto;

    @media (min-width: 767px){
        width: 413px; height: 305px;
        margin: 45px auto 0;
    }

    @media (min-width: 991px){
        width:539px; height: 398px;
    }
`
// section 2

const Section = styled.section`
    position: relative;
    overflow: hidden;
    height: 1124.98px;
    display: flex; 
    flex-direction: column;
    align-content: space-around;
    justify-content: space-around;

    @media (min-width: 767px){
        height: 1256px;
    }

    @media (min-width: 991px){
        flex-direction: row;
        align-items: center;
        height: 720px;
    }
`
const Element = styled.div`
    margin: 0 auto;
    text-align: center;
    div:nth-child(3) {
        width: 258px;
    }

    @media (min-width: 767px){
        div:nth-child(3) {
            width: 300px;
        } 
    }
`

const ElImgContainer = styled.div`
    width: 155px; height: 128px;
    margin: 10px auto;

    @media (min-width: 767px){
        width: 184px; height: 153px;
    }
    
    @media (min-width: 991px){
        width: 184px; height: 153px;
    }
`
// section 3

const ApplySection = styled.main`
    height: 808px;
    padding: 40px;

    section:last-child{
        border:0;
    }

    @media (min-width:767px){
        height: 879px;
        padding: 40px 112px;
    }
    @media (min-width:991px){
        height: 855px;
        padding: 50px 167px;
    }
`

const ApplyHeader = styled.div`
    text-align:center;
    padding-bottom: 20px
`
const Jobs = styled.section`
    height: 203px;
    border-bottom: 1px solid #C7B0FF;
    padding: 40px 0;

    h2{
        font: 900 25px junegull;
        margin: 0;
        padding: 0;
        margin-bottom: 8px;
    }
    h4{
        font: 900 18px nunito;
        color: #00D384;
        font-weight: bolder;
        line-height: 24.55px;
        padding: 0; margin: 0;
    }

     div aside{
        display: flex;
        flex-flow: column-reverse;
    }

    p{
        display: none;
    }

    @media (min-width: 767px){
        height: 229px;

        div aside{
            flex-flow: row;
            align-items: center;
        }

        h4{
            padding-left: 40px
        }

        p{
            display: block;
            margin-top: 13px;
        }
    }
    @media (min-width: 991px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
const BtnContainer = styled.div`
    width: 135px;
    display: block;

    & > div:nth-child(2){
        display: none;
    }
    

    @media (min-width: 991px){
            width: 156px;

            & > div:nth-child(1){
                display: none;
            }
            & > div:nth-child(2){
                display: block;
            }
        }
`