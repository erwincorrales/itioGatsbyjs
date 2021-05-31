import React from 'react';
import Layout from '../../components/layout'
import Seo from '../../components/seo'

import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Oil = () =>{
    return(
        <Layout>
            <Seo title='Oil Rig Human Safety Managment'/>
            <Article>
                <Intro>
                    <h1>OIL RIG<br className='d-md-none'/> HUMAN SAFETY<br/> MANAGMENT</h1>
                    <p>4 month</p>
                    <p className='d-md-none'>This is an incredibly interesting<br/> project where analog and<br/>digital meet.</p>
                    <p className='d-md-none'>As all of our projects, our client came<br/> to us with just an idea, and we had<br/> to implement everything from design<br/> to IOT device integration</p>
                    <p className='d-none d-md-block'>We can't share much about this project for security and privacy reasons.<br/>But this is an incredibly interesting project where analog and digital meet.</p>
                    <p className='d-none d-md-block'>As all of our projects, our client came to us with just an idea, an we<br className='d-lg-none'/> had to<br className='d-none d-lg-block'/> implement everything from design to IOT devic integration.</p>
                    <div>
                        <IntroImageContainer>
                            <StaticImage src='../../images/studies/oilrig/itio-oil-rig-banner.png' alt='oil rig banner'/>
                        </IntroImageContainer>
                    </div>
                </Intro>
                <section>
                    <h2>The product</h2>
                    <p className='d-md-none'>The product is a dashboard<br/>where different levels of<br/> management can see in live the <br/>workers navigating the oil rig.</p>
                    <p className='d-none d-md-block'>The product is a dashboard where different levels of management can<br/> see in live the workers navigating the oil rig. Depending on your<br/> clearance level you can see one or multiple rigs, and aggregate data<br/> based on sites and regions. The rigs change configuration on an hourly<br/> basis depending on the current operations.</p>
                    <p className='d-none d-md-block'>These operations change all the time and do not follow a strict schedule.<br/>Depending on the rig's configuration we had to update the zones that<br/>are accessible by workers. </p>
                    <ProductImage>
                        <StaticImage src='../../images/studies/oilrig/itio-oil-rig-image-2.png'/>
                    </ProductImage>
                </section>
                <Challenges>
                    <h2>Challenges</h2>
                    <p className='d-md-none'>Cyber Security are obviously the<br/>number one priority in this project.</p>
                    <p className='d-md-none'>So we implemented multiple layers of<br/>security. This means we also had to<br/>set up different levels of networking.</p>
                    <p className='d-none d-md-block d-lg-none'>Cyber security are obviously the number one proirity in this project. You can't just have<br/>any device running around an oil rig, or have any system directly connected to the rig's<br/>network. So we implemented multiple layers of security. This means we also had to<br/>set up diferent levels of networking.</p>
                    <p className='d-none d-lg-block'>Cyber security are obviously the number one proirity in this project. You<br/> can't just have any device running around an oil rig, or have any system<br/> directly connected to the rig's network. So we implemented multiple layers<br/> of security. This means we also had to set up diferent levels of networking.</p>
                    <ChallengeAside className='d-lg-flex align-items-start justify-content-around'>
                        <Reliability>
                            <ReliabilityImg className='position-relative'>
                                <Leafup className='position-absolute'>
                                    <StaticImage src='../../images/studies/oilrig/itio-oil-rig-leafup.png' alt='reliability img' />
                                </Leafup>
                                <StaticImage src='../../images/studies/oilrig/itio-oil-rig-reliability.png' alt ='img reliability'/>
                            </ReliabilityImg>
                            <h2>Reliability</h2>
                            <p className='d-md-none'>We also included some offline<br/> solutions in case the platform<br/>got disconnected.</p>
                            <p className='d-none d-md-block'>Because some oil rigs are in remote areas the bandwidth is not reliable.<br/>So we also included some offline solutions in case the platform got<br className='d-none d-lg-block'/> disconnected. <br className='d-lg-none'/>The client actually offered to install some cell towers<br/>just for the trial! Crazy...</p>
                        </Reliability>
                        <PhySecurity>
                            <PhyImage className='position-relative'>
                                <Leafdown className='position-absolute'>
                                    <StaticImage src='../../images/studies/oilrig/itio-oil-rig-leafdown.png' alt ='img physical security'/>
                                </Leafdown>
                                <StaticImage src='../../images/studies/oilrig/itio-oil-rig-physical.png' alt ='img physical security'/>
                            </PhyImage>
                            <h2>Physical Security</h2>
                            <p>The physical challenge was also<br className='d-md-none'/> with the devices, we had to make <br className='d-md-none'/> sure to<br className='d-none d-lg-block'/> find<br className='d-none d-md-block d-lg-none'/> devices that allow<br className='d-md-none'/> workers to do their job, that is<br className='d-md-none'/> accurate, but also passes<br className='d-none d-md-block'/> multiple<br className='d-md-none'/> safety requirements.</p>
                        </PhySecurity>
                    </ChallengeAside>
                </Challenges>
            </Article>
        </Layout>
    )
};

export default Oil;

const Article = styled.article`
    text-align: center;
    h1{
        font:400 38px junegull;
    }

    p{
        font: 400 16px nunito;
        line-height: 21.82px;
        padding-bottom: 10px;
    }

    h2{
        font: 700 25px sans;
        margin-bottom: 30px;

    }

    @media (min-width: 767px){
        h1{
            padding: 40px 0 0;
        }
        p{
            font: 400 14px nunito;
        }
    }
    @media (min-width: 991px){
        p{
            font: 400 16px nunito;
            line-height: 21px;
        }
    }
`
const Intro = styled.section`
    h1{
        /* width: 250px; */
        margin: 44px auto 39px;

        @media (min-width: 767px){
            font: 400 50px junegull;
            margin: 85px auto 24px;
        }
        @media (min-width: 991px){
            margin: 81px auto 24px;
        }
    }
`
const IntroImageContainer = styled.div`
    width: 300px;
    margin: -41px auto 64px;

    @media (min-width: 767px){
        width:597px;
        margin: 0px auto 35px;
    }
`
const ProductImage = styled.div`
    width: 225px;
    margin: 0 auto 46px;

    @media (min-width: 767px){
        width: 411px;
        margin: 50px auto;
    }
`
const Challenges = styled.div``
const ChallengeAside = styled.div`
    @media (min-width: 991px){
        margin-top: 89px;
        margin-bottom: 127px;

        h2{
            margin: 0 auto 24px;
        }
    }
`
const Reliability = styled.div``
const PhySecurity = styled.div``

const ReliabilityImg = styled.div`
    width: 103px;
    margin: 59px auto 25px;
    @media (min-width: 767px){
        width: 130px;
        margin: 59px auto 47px;
    }
    @media (min-width: 991px){
        margin: 0 auto 47px;
    }
`
const Leafup = styled.div`
    width: 50px; top:-20px; left: -20px;
    @media (min-width: 767px){
        width: 80px; top:-30px; left: -40px;
    }
`

const PhyImage = styled.div`
    width: 100px;
    margin: 48px auto 26px;
    @media (min-width: 767px){
        width: 130px;
        margin: 48px auto 47px;
    }
    @media (min-width: 991px){
        margin: 0 auto 47px;
    }
`
const Leafdown = styled.div`
    width: 35px; top: 55px; left:-25px;
    @media (min-width: 767px){
        width: 73px; top: 60px; left:-42px;
    }
`