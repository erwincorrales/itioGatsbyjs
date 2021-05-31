import React, { useEffect, useState } from 'react'
import BrowserCard from '../components/browsercard'
import { StaticImage } from 'gatsby-plugin-image'

import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

import styled from 'styled-components'
import Button from '../components/button'
import Loading from './loading'


const IndexPage = () => {
  const [ showLoadingPage, setShowLoadingPage ] = useState(true);
  
  const closeLoadingView = () =>{
    sessionStorage.setItem('itioFirstLoad', true);
    setShowLoadingPage(false);
  }
  
  
  useEffect(()=>{
    let firstLoad = sessionStorage.getItem('itioFirstLoad');
    if(!firstLoad) setTimeout(()=>closeLoadingView(), 650);
    else setShowLoadingPage(false);
  },[]);


  return(
    <div>
      {
      showLoadingPage ? <Loading/> :  
      <Layout footerAbsolute >
        <Seo title="Home" />    
        <Article>
          <Section>
            <BrowserContainer1>
              <BrowserCard>
                <Inner1>
                  <h1>Product to Idea</h1>
                  <p className='d-md-none'>From a simple idea o a complete website, ITIO supports your journey.</p>
                  <p className='d-md-none'>Close to our clients, our goal is to understand what works for you, then develop it into an efficient<br/> and performant website.</p>
                  <p className='d-none d-md-block d-lg-none'>From a simple idea o a complete website, ITIO<br/> supports your journey. Close to our clients, our goal<br/> is to understand what works for you, then develop it<br/> into an efficient and performant website.</p>
                  <p className='d-none d-lg-block'>From a simple idea o a complete website, ITIO supports<br/>  your journey. Close to our clients, our goal is to understand <br/> what works for you, then develop it into an efficient<br/> and performant website.</p>
                </Inner1>
              </BrowserCard>
            </BrowserContainer1>
            <ImageContainer1>
              <StaticImage src='../images/landingpage/itio-landpage-1-sm.png' alt='itio-landing1' className='d-lg-none'/>
              <StaticImage src='../images/landingpage/itio-landing-1.png' alt='itio-landing1' className='d-none d-lg-block'/>
            </ImageContainer1>
          </Section>
          <Section>
              <Background1>
                <StaticImage src='../images/itio-circle-background.png' />
              </Background1>
              <BrowserContainer2>
                <BrowserCard>
                  <Inner2>
                    <h1>Input to Output</h1>
                    <p className='d-md-none'>Through our own automation tool,<br/> we made your work faster and<br/> easier. When you can focus on<br/> your work, we already start<br/> working/fixing your future issue...</p>
                    <p className='d-none d-md-block'>Through our own automation tool, we made your<br className='d-lg-none'/> work faster<br className='d-none d-lg-block'/> and easier. When you can focus on your<br className='d-lg-none'/> work, we already<br className='d-none d-lg-block'/> start working/fixing your future<br className='d-lg-none'/> issue...</p>
                  </Inner2>
                </BrowserCard>
              </BrowserContainer2>
              <ImageContainer2>
                <StaticImage src='../images/landingpage/itio-landing-2-sm.png' alt='itio-landing1' className='d-md-none'/>
                <StaticImage src='../images/landingpage/itio-landing-2-md.png' alt='itio-landing1' className='d-none d-md-block d-lg-none'/>
                <StaticImage src='../images/landingpage/itio-landing-2.png' alt='itio-landing1' className='d-none d-lg-block'/>
              </ImageContainer2>
          </Section>
          <Section>
              <BrowserContainer3>
                <BrowserCard>
                  <Inner3>
                    <h1>Business Cycle</h1>
                    <p className='d-md-none'>With an unique and esthetic site, your page will not only attract<br/> the right visitors but engage those visitor and convert them into customers.</p>
                    <p className='d-md-none'>The ITIO team will provide<br/> a meaningful and relevant experience to your users.</p>
                    <p className='d-none d-md-block'>With an unique and esthetic site, your page will<br className='d-lg-none'/> not only attract<br className='d-none d-lg-block'/> the right visitors but engage those <br className='d-lg-none'/>visitor and convert them into customers.</p>
                    <p className='d-none d-md-block'>The ITIO team will provide a meaningful<br/> and relevant experience to your users.</p>
                  </Inner3>
                </BrowserCard>
              </BrowserContainer3>
              <ImageContainer3>
                <StaticImage src='../images/landingpage/itio-landing-3-sm.png' alt='itio-landing-3-sm.png' className='d-lg-none'/>
                <StaticImage src='../images/landingpage/itio-landing-3.png' alt='itio-landing-3-sm.png' className='d-none d-lg-block'/>
              </ImageContainer3>
          </Section>
          <Section>
              <BrowserContainer4>
                <Background2>
                  <StaticImage src='../images/itio-diamond-background.png' />
                </Background2>
                <BrowserCard>
                  <Inner4>
                    <h1>Web Analytics</h1>
                    <p>Behavior to data is a bit too restrictive, it doesn't encompass the analytical and optimization side of things.</p>
                    <p className='d-md-none'>We collect, transform and intepret all this amount of data into meaningful bussines value. We provide ongoing recommendations and carry out optimizations to improve the success of your project.</p>
                    <p className='d-none d-md-block'>We collect, transform and intepret all this amount of data<br/> into meaningful bussines value. We provide ongoing<br/> recommendations and carry out optimizations to improve<br/> the success of your project.</p>
                  </Inner4>
                </BrowserCard>
              </BrowserContainer4>
              <ImageContainer4>
                <StaticImage src='../images/landingpage/itio-landing-4.png' alt='itio-landing-4-sm.png'/>
                {/* <StaticImage src='../images/landingpage/itio-landing-3.png' alt='itio-landing-3.png'/> */}
              </ImageContainer4>
          </Section>
          <Section>
              <BrowserContainer5>
              <Background3>
                <StaticImage src='../images/itio-block-background-sm.png' className='d-md-none' layout='fullWidth' />
                <StaticImage src='../images/itio-block-background.png' layout='fullWidth'/>
              </Background3>
                <BrowserCard>
                  <Inner5>
                    <h1>Cloud Infrastructure</h1>
                    <p className='d-none'>Behavior to data is a bit too restrictive, it doesn't encompass the analytical and optimization side of things.</p>
                    <p>Making sure that all the servers<br className='d-md-none'/> and <br className='d-none d-md-block'/>functionalities are working<br className='d-md-none'/> well and fast.</p>
                  </Inner5>
                </BrowserCard>
              </BrowserContainer5>
              <ImageContainer5>
                <StaticImage src='../images/landingpage/itio-landing-5-sm.png' className='d-md-none'/>
                <StaticImage src='../images/landingpage/itio-landing-5-md.png' className='d-none d-md-block d-lg-none'/>
                <StaticImage src='../images/landingpage/itio-landing-5.png'  className='d-none d-lg-block'/>
              </ImageContainer5>
              {/* <div> */}
                <div className='d-md-flex d-none position-absolute' style={{bottom: '20px', left: '40px', zIndex:10}}>
                  <Link to= '/cases'>
                    <Button label='CASE STUDIES'/>
                  </Link>
                  <Link to='/careers'>
                    <Button label='CAREERS'/>
                  </Link>
                  <Link to='/contact' className='d-none d-lg-block'>
                    <Button label='CONTACT'/>
                  </Link>
                  <Link to='/'>
                    <Button label='HOME'/>
                  </Link>
                </div>
              {/* </div> */}
          </Section>
        </Article>
      </Layout>
    }
  </div>
  )
}

export default IndexPage


const Article = styled.article`
  
  p{
    font: 400 16px nunito;
    line-height:22px;
  }
  
  h1{
    font: 900 38px sans;
  }

  @media (min-width:767px){  
    
    section:nth-child(even){
      flex-flow: row-reverse;
      /* border: 1px solid black; */
    }
    
    h1{
      font: 700 38px sans;
    }
    
    p{
      font: 400 14px nunito;
      line-height: 19.19.px;
    }
    
    section{
      width: 100vw; 
    }
    section:first-child{
      padding: 50px 40px 80px; height: 410px;
    }
    section:nth-child(2){
      padding: 35px 40px 70px;  height: 470px; overflow:hidden;
    }
    section:nth-child(3){
      padding: 60px 40px 20px; display: flex; align-items: center;
    }
    section:nth-child(4){
      padding: 10px 40px 70px;  height: 500px; overflow: hidden; align-items: center;
    }
    section:nth-child(5){
      padding: 40px 40px 70px; height: 540px; 
      /* justify-content: center; */
    }
    section:nth-child(5) > div:last-child{
      margin-bottom: 0px;
      margin-left: 10px;
    }
    
  }

  @media (min-width: 991px){
    h1{
      font: 700 48px sans;
    }
    section:first-child{
      height: 710px; padding: 0 90px; justify-content: center; align-items: center;
    }
    section:nth-child(2){
      height: 800px; padding: 0 90px; display: flex; justify-content: center; align-items:center;
    }
    section:nth-child(3){
      display: flex; height:879px; padding: 0 90px; justify-content: center; align-items:center;
    }
    section:nth-child(4){
      display: flex; height:879px; padding: 0 80px; justify-content: center; align-items:center;
    }
    section:nth-child(5){
      display: flex; height:979px;  margin-bottom: -140px; justify-content: center; align-items:center; 
    }
    section:nth-child(5) > div:last-child{
      margin-bottom: 130px;
      margin-left: 40px;
    }
  }
`

const Section = styled.section`
  position: relative;
  @media (min-width: 767px){ 
    display: flex;
    justify-content: space-between;
  }
`

//section 1
const BrowserContainer1 = styled.div`
  width: 323px;
  margin: 0 auto;
  padding-top: 40px;

  @media (min-width: 767px){
    width: 407px; 
    margin: -20px 0;
  }

  @media (min-width: 991px){
    width:532px;
  }
`

const ImageContainer1 = styled.div`
  width: 260px;
  margin: 30px auto 100px;
  
  @media (min-width: 767px){
    width: 243px;
    margin: 0;
  }

  @media (min-width: 991px){
    display: block;
    width: 545px;
    /* padding-right: -50px; */
  }
`

const Inner1 = styled.div`
  margin: 25px 0 60px;
  @media (min-width: 767px){
    margin: 5px 5px 25px;
  }
  @media (min-width: 767px){
    margin: 10px 10px 35px;
  }
`

//section 2
const BrowserContainer2 = styled.div`  
  width: 323px;
  margin: 22px auto 0;
  
  @media (min-width: 767px){
    width: 376px; 
    margin: 0 0 0 auto;
  }
  
  @media (min-width: 991px){
    width: 531px; 
    margin: 0 0 0 -100px;
    background-color: white; z-index: 1;
  }
`

const ImageContainer2 = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  
  @media (min-width: 767px){
    position: absolute;
    left: 40px; top:45px;
    width: 390px;
    z-index: 0;
  }

  @media (min-width: 991px){
    position: relative;
    display: block;
    width: 713px;
  }
`

const Inner2 = styled.div`
  margin: 12px 0 35px;
  @media (min-width: 767px){
    margin: 0px auto 35px;
  }
  @media (min-width: 991px){
    margin: 5px 10px 38px;
  }
`

//section 3
const BrowserContainer3 = styled.div`
  width: 311px;
  margin: 60px auto;
  
  @media (min-width: 767px){
    align-self: center;
    width: 393px;
    padding-top: 0;
    padding-right: 10px;
  }
  
  @media (min-width: 991px){
    width: 603px;
    margin: 0 50px;
  }
`

const ImageContainer3 = styled.div`
  width: 282px;
  margin: 15px auto 84px;
  
  @media (min-width: 767px){
    margin:0 0 0 20px;
  }
  @media (min-width: 991px){
    margin: 0;
    width: 470px;
  }
`

const Inner3 = styled.div`
  margin: 3px 0 30px;
  h1{
    margin-bottom: 20px;
  }
  @media (min-width: 767px){
    margin: 30px 10px 60px;
  }
  @media (min-width: 991px){
    margin: 20px 10px 30px;
  }
`

//section 4
const BrowserContainer4 = styled.div`
  width: 312px;
  margin: 30px auto;
  
  @media (min-width: 767px){
    margin: 10px 0 auto; 
    width: 429px;
    padding-top: 30px;
  }

  @media (min-width: 991px){
    width: 613px;
    margin: -140px 0 0 -20px; 
  }
`

const ImageContainer4 = styled.div`
  padding-top: 40px;
  width: 285px;
  margin: 0 auto 70px;

  @media (min-width: 767px){
    position: absolute;
    bottom: -20px; left: 50px;
    width: 345px;
    padding-top: 60px;
  }

  @media (min-width: 991px){
    width: 627px;
    position:relative;
    margin: 200px 0 0;
  }
`

const Inner4 = styled.div`
  h1{
    font: 700 48px sans;
    margin-bottom: 15px;
  }
  margin: 20px 0 38px;

  @media (min-width: 767px){
    h1{
      font: 700 38px sans;
      margin-bottom: 10px;
    }

    margin: 10px 10px 20px; 
  }

`

//section 5
const BrowserContainer5 = styled.div`
  width: 312px;
  margin: 57px auto 0;

  @media (min-width: 767px){
    width: 370px; z-index:2;
    margin: 30px 350px 30px auto;
    /* position: absolute; */

  }

  @media (min-width: 991px){
    width: 583px; z-index:2;
    margin: -250px -150px 60px 50px ;
  }
`

const ImageContainer5 = styled.div`
  margin: 57px auto 50px;
  width: 225px;

  @media (min-width: 767px){
    padding-top: 0;
    margin:0;
    position: absolute;
    width: 408px;
    right: 55px; 
    top: 100px;
    z-index: -1;
  }
  @media (min-width: 991px){
    position: relative;
    width: 696px; 
    padding: 0 0 200px 60px;
    /* margin-bottom:-100px; */
  }
`

const Inner5 = styled.div`
  margin: 5px 0 20px;
  h1{
    margin-bottom: 15px;
  }

  @media (min-width: 991px){
    padding: 10px 10px 25px;
  }
`

const Background1 = styled.div`
  position: absolute; z-index: 0;
  width: 100vw; height: 10vw;
`
const Background2 = styled.div`
  position: absolute; z-index:0; width: 100%; height: 300%; top: 0;left:0;
`
const Background3 = styled.div`
  position: absolute; z-index:-1; width: 100vw; height: 1000px; left:0; top:0; margin-bottom:100px; 
`
const Inner = styled.div`
  background-color: white;
`