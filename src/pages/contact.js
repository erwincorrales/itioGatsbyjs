import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import BrowserCard from "../components/browsercard"
import { StaticImage } from "gatsby-plugin-image"
import Form from "../components/contact/form"
import { Link } from "gatsby"

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Article>
      <h1>CONTACT US</h1>
      <div>
        <p className='d-md-none'>Any questions?</p>
        <p className='d-md-none'>Just write us a message!</p>
        <p className='d-none d-md-block'>Any questions? Just write us a message!</p>
      </div>
      <ContactDataWrapper>
        <BrowserCard rounded noMenubar>
          <LeafContainer>
            <StaticImage src='../images/contact/itio-contact-leafs.png' alt='leafs'/>
          </LeafContainer>

          <InnerContactDataWrapper>
            <ContactHeader>
              <h3>Contact Information</h3>
              <p className='d-none d-md-block'>Fill up our form and our team will get back to you within 24 hours.</p>
            </ContactHeader>

            <Contactitem>
              <ContainerImage1>
                <StaticImage src='../images/contact/itio-contact-phone.png' alt='itio' />
              </ContainerImage1>
              <div>+57 321 6964575</div>
            </Contactitem>
            <Contactitem>
              <ContainerImage1>
                <StaticImage src='../images/contact/itio-contact-mail.png'  alt='itio'/>
              </ContainerImage1> 
              <div>hello@itio.co</div>
            </Contactitem>
            <Contactitem>
              <ContainerImage2>
                <StaticImage src='../images/contact/itio-contact-gps.png'  alt='itio'/>
              </ContainerImage2>
              <div>h145 Street 673</div>
            </Contactitem>
            <Social>
              <ContainerSocialImg>
                <Link to='http://facebook.com'>
                  <StaticImage src='../images/contact/itio-contact-facebook.png' alt='itio'/>
                </Link>
              </ContainerSocialImg>
              <ContainerSocialImg2>
                <Link to='http://twitter.com'>
                  <StaticImage src='../images/contact/itio-contact-twitter.png' alt='itio'/>
                </Link>
              </ContainerSocialImg2>
              <ContainerSocialImg2>
                <Link to='http://instagram.com'>
                  <StaticImage src='../images/contact/itio-contact-instagram.png' alt='itio'/>
                </Link>
              </ContainerSocialImg2>
            </Social>
            <BookContainer>
                <StaticImage src='../images/contact/itio-contact-book.png' alt='book'/>
            </BookContainer>
          </InnerContactDataWrapper>
        </BrowserCard>
      </ContactDataWrapper>
      <MessageSection>
        <StaticImage src='../images/itio-circle-background.png' className='position-absolute d-none d-md-block' style={{zIndex: -4}}/>
        <h1 className='d-none d-md-block'>MESSAGE US</h1>
        <Form />
      </MessageSection>
    </Article>
  </Layout>
)

export default Contact

const Article = styled.div`
  margin-top: 40px;
  text-align: center;

  h1{
    font-size:29px;
    font-family: junegull;
  }

  h3{
    font: 700 18px sans;
    padding-bottom: 10px;
  }

  p{
    font: 400 16px nunito;
    max-width: 305px;
    margin: 0 auto
  }

  @media (min-width: 767px){
    h1{
      margin-top: 78px;
      font-size: 50px;
    }

    div p{
      margin-bottom: 59px;
      width: 305px;
    }

    h3{
      font-size: 25px;
    }

    p{
      width: 305px;
    }
  }
`

const ContactDataWrapper = styled.div`
  position: relative;
  width: 70%;
  max-width: 263px;
  margin: 50px auto;

  @media (min-width: 767px){
    width: 463px;
    max-width: 463px;
  }
  @media (min-width: 991px){
    width: 512px;
  }
`
const InnerContactDataWrapper = styled.div`
  padding: 56px 15px;
  text-align: left;

  @media (min-width: 767px){
    padding: 60px 30px;
  }
  
`

const ContactHeader = styled.div`
  @media (min-width: 767px){
    max-width: 463px;
    margin-bottom: 60px;
    text-align: left;
  }
`

const Contactitem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 7px 0;

  div:nth-child(2){
    margin-left:10px;
  }

  @media (min-width: 767px){
    margin-bottom: 36px;
    font-size: 20px;
    div:nth-child(2){
      margin-left:54px;
    }
  }

`
const LeafContainer = styled.div`
  position: absolute;
  width: 30px;
  top: 20px;
  left: -28px;

  @media (min-width:767px){
    width: 50px;
    left: -48px;
    top: 50px;
  }
`

const Social= styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  padding-top: 10px;

  @media (min-width: 767px){
    width:130px; height: 31px;
    margin-top: 67px;
  }

  /* @media (min-width: 991px){
    width:130px; height: 31px;
    margin-top: 67px;
  } */
`
const BookContainer = styled.div`
  display: none;
  position: absolute;
  bottom: 10px;
  right: 40px;

  @media (min-width: 767px){
    display: block;
    bottom: 30px;
  }

  @media (min-width: 991px){
    bottom: 30px;
    right: -164px;
  }
`
const ContainerImage1 = styled.div`
  width: 24px;
  height: 24px;

  @media (min-width: 767px){
    width: 45px;
    height: 45px;
  }
`
const ContainerImage2 = styled.div`
  width: 20px; height: 15px; 

  @media (min-width: 767px){
    width: 45px;
    height: 45px;
  }


`
const ContainerSocialImg = styled.div`
  width: 19px;
  /* height: 29px; */

  @media (min-width: 767px){
    width: 19px; 
    /* height:28px; */
  }
  @media (min-width: 991px){
    width: 36px; 
    /* height:28px */
  }

`
const ContainerSocialImg2 = styled.div`
  width: 35px;
  /* height: 28px; */

  @media (min-width: 767px){
    width: 35px; height:29px;
  }
  @media (min-width: 991px){
    width: 36px; height:30px
  }
`
 
const MessageSection=styled.section`
  margin-top: 72px;

`