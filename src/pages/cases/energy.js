import { StaticImage } from 'gatsby-plugin-image'
import React from 'react' 
import styled from 'styled-components'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const Energy = () =>(
    <Layout>
        <Seo title='Energy Management Platforms'/>
        <Article>
            <Intro>
                <h1>ENERGY MANAGEMENT PLATFORMS</h1>
                <p className='d-md-none'>TimeLine: 2 weeks + 2 weeks<br/>of testing (light touches)</p>
                <p className='d-none d-md-block'> TimeLine: 2 weeks + 2 weeks of testing (light touches)</p>
                <p className='d-none d-md-block'>We created two energy management platforms.</p>
                <p className='d-none d-md-block'>The first platform Manage My Power is mostly an energy monitoring<br/>platform. Autonomy Power also includes management features such<br/> as advanced solar farm control and alert deployment systems.</p>
                <IntroImage>
                    <StaticImage src='../../images/studies/energy/itio-energy-management-intro-sm.png' alt='Energy management intro image' className='d-md-none'/>
                    <StaticImage src='../../images/studies/energy/itio-energy-management-energy.png' alt='Energy management intro image' className='d-none d-md-block'/>
                </IntroImage>
                <p className='d-md-none'>The first platform Manage<br/> My Power is mostly an energy<br/> monitoring platform.</p> 
                <p className='d-md-none'>Autonomy Power also includes<br/> advanced management features </p>
                <IntroImage2 className='d-md-none position-relative'>
                    <StaticImage src='../../images/studies/energy/itio-energy-dashboard.png' alt='energy dashboard'/>
                    <Leaf className='position-absolute'>
                        <StaticImage src='../../images/studies/energy/itio-energy-leafup.png' alt='energy dashboard'/>
                    </Leaf>
                </IntroImage2>
            </Intro>
            <PowerSection>
                <h3>Manage My Power</h3>
                <p className='d-md-none'>The data was collected, stored,<br/>catched and analyzed to then be<br/>consumed on the user's dashboard.</p>
                <p className='d-md-none'>The dashboard has multiple<br/>functionalities such as bill generation,<br/>solar calculators, identification of<br/>system optimization, live graph...</p>
                <p className='d-none d-md-block'>The data was collected from sensor on a given site. The data was stored, <br/> catched and analyzed to then be consumed on the user's dashboard.</p>
                <p className='d-none d-md-block'>The dashboard has multiple functionalities such as bill generation,<br/>solar calculators, identification of system optimization, live graph...</p>
                <PowerImage className='position-relative'>
                    <ImageBrowser>
                        <StaticImage src='../../images/studies/energy/Energy M 1.png' alt='power photo'/>
                    </ImageBrowser>
                    <ImagePlant>
                        <StaticImage src='../../images/studies/energy/Frame-3.png' alt='power photo'/>
                    </ImagePlant>
                    <Leaf1>
                        <StaticImage src='../../images/studies/energy/Frame-1.png' alt='power photo'/>
                    </Leaf1>
                    <Leaf2>
                        <StaticImage src='../../images/studies/energy/Frame.png' alt='power photo'/>
                    </Leaf2>
                    <StaticImage src='../../images/studies/energy/Frame-2.png' alt='power photo'/>
                </PowerImage>
            </PowerSection>
            <Autonomy>
                <h3>Autonomy Power</h3>
                <p className='d-md-none'>Autonomy power is a solar<br/>management platform.</p>
                <p className='d-none d-md-block'>Autonomy power is a solar management platform.</p>
                <p className='d-md-none'>We saved a solar farm<br/> over 4000k dollars a month<br/> just by controlling their output!</p>
                <p className='d-none d-md-block'>We saved a solar farm over 4000k dollars a month<br/> just by controlling their output!</p>

                <ImgAutonomy>
                <StaticImage src='../../images/studies/energy/itio-energy-autonomy.png' alt='power photo'/>
                </ImgAutonomy>
            </Autonomy>

        </Article>
    </Layout>
)

export default Energy

const Article = styled.article`
    text-align: center;
    h1{
        font: 400 34px junegull;
        max-width: 268px;
        margin: 44px auto 39px;
    }

    p{
        font: 400 16px nunito;
        margin-bottom: 25px;

    }

    h3{ 
        font: 700 25px cambria; 
    }

    @media (min-width: 767px){
        h1{
            font: 400 50px junegull;
            max-width: 600px;
            margin: 85px auto 24px;
        }
    }

`

const Intro = styled.section`
`
const IntroImage = styled.div`
    width:144px;
    margin: 40px auto 44px;
    @media (min-width: 767px){
        width:663px;
        margin: 40px auto 76px;
    }
`

const IntroImage2 = styled.div`
    width: 230px;
    margin: 32px auto 41px;
`

const Leaf = styled.div`
    width: 29px; top: -18px; right:-23px; 
`

const PowerSection = styled.div`
    h3{
        margin-bottom: 40px;
    }
`

const PowerImage = styled.div`
    width: 290px;
    margin: 30px auto 40px;

    @media (min-width: 767px){
        width: 535px;
        margin: 50px auto 33px;
    }
    @media (min-width: 991px){
        width:860px;
        margin-bottom: 50px auto 70px
    }
`

const ImageBrowser = styled.div`
    position: absolute;
    width: 280px; top: 18px;
    @media (min-width:767px){
        width: 520px; top: 33px
    }
    @media (min-width:991px){
        width: 825px; top: 50px; left: 5px;
    }
`

const ImagePlant = styled.div`
    position: absolute;
    width: 25px; 
    top: 130px; left: -12px; z-index: 20;
    
    @media (min-width:767px){
        width:45px; top:250px; left:-18px;
    }
    
    @media (min-width:991px){
        width: 86px; top:390px; left:-30px;
    }
`
const Leaf1 = styled.div`
    position: absolute;
    width: 25px;
    top: 20px; left: -20px; z-index:-1;

    @media (min-width:767px){
        width: 45px; top:40px;left:-43px;
    }
    @media (min-width:991px){
        width: 82px;top:80px;left:-75px;
}

`
const Leaf2 = styled.div`
    position: absolute;
    width: 29px;
    top: 162px; right: 10px;

    @media (min-width:767px){
        width: 49px;top:300px;right:12px;
    }
    @media (min-width:991px){
        width: 80px; top:485px; right:20px;
    }

`

const Autonomy = styled.div`
    h3{
        margin-bottom: 40px;
    }
    @media (min-width: 767px){
        h3{
            margin-top: 60px;
            margin-bottom: 50px;
        }
    }
`

const ImgAutonomy = styled.div`
    width: 256px;
    margin: 23px auto 40px;

    @media (min-width: 767px){
        width: 425px;
        margin: 32px auto 91px;
    }
    @media (min-width: 991px){
        width: 585px;
        margin: 0 auto 33px;
    }

`
