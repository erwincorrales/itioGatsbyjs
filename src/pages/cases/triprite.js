import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Triprite = () => (
  <Layout>
    <Seo title="Triprite" />
    <Article>
      <Intro>
        <h1>TRIPRITE</h1>
        <p className="d-md-none">
          For Triprite we delivered a <br />
          product we were proud of.
        </p>
        <p className="d-md-none">
          And everyone was happy <br />
          but as you can imagine with <br /> the global pandemic the project
          <br /> came to an abrupt halt
        </p>
        <p className="d-none d-md-block">
          Triprite is a bittersweet project.
          <br />
          The triprite team wanted a beatiful flight search engine.
          <br />
          We delivered a product we were proud of.
        </p>
        <p className="d-none d-md-block">
          And everyone was happy but as you can imagine with the
          <br />
          global pandemic the project came to an abrupt halt.
        </p>

        <HeaderImageContainer className="position-relative">
          <HeaderImage>
            <StaticImage
              src="../../images/studies/triprite/itio-triprite-window.png"
              alt="img"
              className="d-md-none"
            />
            <StaticImage
              src="../../images/studies/triprite/itio-triprite-window-sm.png"
              alt="img"
              className="d-none d-md-block"
            />
          </HeaderImage>
          <PCImage className="position-absolute">
            <StaticImage
              src="../../images/studies/triprite/itio-triprite-pc.png"
              alt="img"
              className="d-none d-md-block"
            />
          </PCImage>
          <ImgCovit1 className="position-absolute">
            <StaticImage
              src="../../images/studies/triprite/itio-triprite-covit.png"
              alt="img"
            />
          </ImgCovit1>
          <ImgCovit2 className="position-absolute">
            <StaticImage
              src="../../images/studies/triprite/itio-triprite-covit.png"
              alt="img"
            />
          </ImgCovit2>
          <ImgCovit3 className="position-absolute">
            <StaticImage
              src="../../images/studies/triprite/itio-triprite-covit.png"
              alt="img"
            />
          </ImgCovit3>
        </HeaderImageContainer>
      </Intro>
      <Product>
        <h3>The product</h3>
        <p className="d-md-none">
          We built a website that could also be
          <br />
          downloaded as a mobile application.
          <br />
          It did everything you can imagine
          <br />
          from a flight search engine:
        </p>
        <p className="d-none d-md-block">
          We built a website that could also be downloaded as a mobile
          application.
          <br />
          It did everything you can imagine from a flight search engine:
        </p>
        <ProductImage1>
          <Leaf1>
            <StaticImage
              src="../../images/studies/triprite/itio-triprite-leaftop.png"
              alt="img2"
            />
          </Leaf1>
          <Leaf2>
            <StaticImage
              src="../../images/studies/triprite/itio-triprite-leafdown.png"
              alt="img2"
            />
          </Leaf2>
          <ProductWindow>
            <StaticImage
              src="../../images/studies/triprite/itio-triprite-screen.png"
              alt="img2"
            />
          </ProductWindow>
          <StaticImage
            src="../../images/studies/triprite/itio-triprite-browser.png"
            alt="img2"
            className="w-100"
          />
        </ProductImage1>
        <ProductImage12>
          <p className='d-md-none'>
            All the data is accessible
            <br /> through an admin dashboard.
          </p>
          <p className='d-none d-md-block d-lg-none'>The backend includes payment processing, an email<br/>management system, and advanced logs. All the data is<br/> accesible through an admin dashboard.</p>
          <p className='d-none d-lg-block'>The backend includes payment processing, an email management system,<br/> and advanced logs. All the data is accesible through an admin dashboard.</p>
          <StaticImage
            src="../../images/studies/triprite/itio-triprite-tail.png"
            alt="img2"
            className='d-none d-md-block'
          />
          <StaticImage
            src="../../images/studies/triprite/itio-triprite-tail-sm.png"
            alt="img2"
            className='d-md-none'
          />
        </ProductImage12>
        <CellCarrusel className='d-flex align-items-center align-content-center justify-content-between mx-auto'>
            <Arrow>
                <StaticImage src='../../images/studies/triprite/itio-triprite-arrow.png' alt='phone'/>
            </Arrow>
            <ProductImage2 className='position-relative'>
                <StaticImage src='../../images/studies/triprite/itio-triprite-phone.png' alt='phone'/>
                <PhonePad className='position-absolute'>
                    <StaticImage src='../../images/studies/triprite/itio-triprite-phonepad.png' alt='phone'/>
                </PhonePad>
            </ProductImage2>
            <Arrow1>
                <StaticImage src='../../images/studies/triprite/itio-triprite-arrow.png' alt='phone'/>
            </Arrow1>
        </CellCarrusel>
      </Product>
      <Challenge>
          <h3>Challenges</h3>
          <p className='d-md-none'>The biggest chalenge was that<br/>we had to work with an extremely<br/> poorly designed third party API.</p>
          <p className='d-md-none'>The other challenge was to have a<br/>resposive website. It was especially<br/> tricky to have all the filter features<br/>display on mobile.</p>
          <p className='d-none d-md-block'>The biggest challenge was that I had to work with an extremely poorly designed<br/>third party API (full of inconsistent naming and unexpected answers). So it was<br/> extremely important for us to write some really nice facades to interact with it<br/>seamlessly, and have reusable code.</p>
          <p className='d-none d-md-block'>The other challenge was to have a resposive website. It was especially tricky to<br/> have all the filter features display on mobile.</p>
          <ChallengeImage>
              <StaticImage src='../../images/studies/triprite/itio-triprite-challenge.png' alt='phone' className='d-md-none'/>
              <StaticImage src='../../images/studies/triprite/itio-triprite-challenge-md.png' alt='phone' className='d-none d-md-block'/>
          </ChallengeImage>
      </Challenge>
    </Article>
  </Layout>
)

export default Triprite

const Article = styled.article`
    text-align: center;
    justify-content: center;

    h3 {
        font: 700 25px sans;
    }

    p {
        font: 400 16px nunito;
        line-height: 21.82px;
        margin: 0 auto 20px;
    }
`

const Intro = styled.section`
  h1 {
    font: 400 36px junegull;
    margin: 40px auto 35px;
  }

  @media (width: 767px) {
    /* width: 500px; */
    h1 {
      margin: 117px auto 24px;
      font: 400 50px junegull;
    }

    p{
        font: 400 14px nunito;
    }
  }
  @media (width: 991px) {
    h1 {
      /* margin: 400px auto 24px; */
      padding-top: 300px;
    }
  }
`

const HeaderImageContainer = styled.div`
  margin: 35px auto 15px;
  width: 258px;
 

  @media (min-width: 767px) {
    width: 530px;
  }

  @media (min-width: 991px) {
      width: 540px;
  }
`

const HeaderImage = styled.div`
  width: 110%;
  @media (min-width: 767px) {
    width: 570px;
  }
`

const PCImage = styled.div`
  top: 300px;
  width: 113px;
  left: -30px;

  @media (min-width: 991px){
      width: 137px; top:330px; left: -60px
  }
`
const ImgCovit1 = styled.div`
  top: -35px;
  right: -10px;
  width: 32px;

  @media (min-width: 767px) {
    width: 51px;
    top: -130px;
    right: -20px;
  }
  
  @media (min-width: 991px) {
    width: 68px;
    top: -210px;
    right: -60px;
  }
`
const ImgCovit2 = styled.div`
  top: 105px;
  left: 0px;
  width: 32px;

  @media (min-width: 767px) {
    width: 51px;
    top: 100px;
    left: -70px;
  }
  
  @media (min-width: 991px) {
    width: 68px;
    top: 150px;
    left: -110px;
  }
`
const ImgCovit3 = styled.div`
  top: 136px;
  right: 20px;
  width: 28px;

  @media (min-width: 767px) {
    width: 51px;
    right: -90px;
    top: 220px;
  }
  @media (min-width: 767px) {
    width: 68px;
    right: -130px;
    top: 280px;
  }
`
const Product = styled.section`
    h3{
        font: 700 25px sans;
        margin: 0 auto 38px;
    }
    @media (width: 767px){
        h3{
            margin: 0 auto 50px;
        }
    }
    @media (width: 991px){
        h3{
            margin: 0 auto 50px;
            padding-top: 30px;
        }
    }
`

const ProductImage1 = styled.div`
  position: relative;
  width: 275px;
  margin: 40px auto 0px;

  @media (min-width: 767px){
      width: 571px;
      margin-top: 62px;
  }
  @media (min-width: 991px){
      width: 736px;
  }
`
const ProductImage12 = styled.div`
  position: relative;
  width: 292px;
  margin: -10px auto 0;
  
  p {
    position: absolute; top:39%; left: 10%;
  }

  @media (min-width: 767px){
      width: 545px;
      p{
          top: 42%;
      }
  }
  @media (min-width: 991px){
      width: 715px;
      p{
          top: 46%;
      }
  }
`

const Leaf1 = styled.div`
  position: absolute;
  width: 29px;
  top: -23px;
  right: 10px;

  @media (min-width: 767px){
      width:63px; top: -50px; right: 20px; 
  }
  @media (min-width: 991px){
      width:80px; top: -65px; right: 35px;
  }
`

const Leaf2 = styled.div`
  position: absolute;
  width: 27px;
  top: 160px;
  left: -10px;

  @media (min-width: 767px){
      width: 56px; top: 340px; left:-20px;
  }
  @media (min-width: 991px){
      width: 73px; top: 430px; left:-40px;
  }
`

const ProductWindow = styled.div`
  position: absolute;
  width: 270px;
  top: 0;
  left: 0;

  @media (min-width:767px){
      width: 550px;
  }
  @media (min-width:991px){
      width: 730px;
  }
`

const CellCarrusel = styled.div`
    width: 185px;
    margin: -30px auto 51px;

    @media (min-width:767px){
        width: 403px;
        margin: -90px auto 60px;
    }
    @media (min-width:991px){
        width: 525px;
        margin: -120px auto 85.8px;
    }
`

const ProductImage2 = styled.div`
    max-width: 118px; 

    @media (min-width: 767px){
        max-width: 255px;
    }
    
    @media (min-width: 991px){
        max-width: 330px;
    }
`

const PhonePad = styled.div`
    width: 84px; top: -10px; right:-82px;
    @media (min-width: 767px){
        width: 161px; top:10px; right: -155px;
    }
`

const Arrow = styled.div`
    width: 13px;
    transform: rotate(180deg);
    @media (min-width:767px){
        width: 28.6px;
    }
    @media (min-width:991px){
        width: 36.42px;
    }
`

const Arrow1 = styled.div`
    width: 13px; 
    @media (min-width:767px){
        width: 28.6px;
    }
    @media (min-width:991px){
        width: 36.42px;
    }
`

const Challenge =styled.section`
    h3{
        margin-bottom: 20px;
    }
    @media (min-width:767px){
        h3{
            margin-bottom: 41px;
        }
    }
`

const ChallengeImage=styled.div`
    width: 303px;
    margin: 47px auto 97px;
    @media (min-width: 767px){
        width: 658px;
        margin: 50px auto 28px;
    }
    @media (min-width: 991px){
        width: 70%;
        max-width: 1029px;
        margin: 67px auto 76px;
    }
`