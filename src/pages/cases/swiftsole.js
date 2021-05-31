import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

import styled from 'styled-components'

const Swiftsole = () =>(
    <Layout>
        <Seo title='Swiftsole'/>
        <Article>
            <Intro>
                <h1>SWIFTSOLE</h1>
                <p>Timeline: 2 weeks + 2 weeks<br className='d-md-none'/> of testing (light touches)</p>
                <IntroImageContainer className='position-relative'>
                    <StaticImage src='../../images/studies/swiftsole/itio-swiftsole-window.png' alt='swiftsole banner'/>
                    <StaticImage src ='../../images/studies/swiftsole/itio-swiftsole-leafup.png' alt='swiftsoleliftup'/>
                    <StaticImage src ='../../images/studies/swiftsole/itio-swiftsole-leafdown.png' alt='swiftsoleliftdown'/>
                </IntroImageContainer>
                <p className='d-md-none'>We loved working with Swiftsole.</p>
                <p className='d-md-none'>After the launch of their really<br/>successful IOS app Swiftsole <br/>wanted a desktop app<br/> for Windows and Mac.</p>
                <p className='d-none d-md-block'>This is a smaller project but how cool was it!<br/>We loved working width Swiftsole. They are energetic,<br/> talented, technical and they know what they want.</p>
                <p className='d-none d-md-block'>This is one of the rare cases where this was not a complete greenfield.<br className='d-none d-lg-block'/> There was<br className='d-lg-none'/> already a design and another very similar product.<br/>After the launch of their really successful IOS app Swiftsole<br/>wanted a desktop app for Windows and Mac</p>
                
                <IntroImageContainer2 className='position-relative'>
                    <div>
                        <StaticImage src='../../images/studies/swiftsole/itio-swiftsole-window1.png' alt='swiftsole banner1'/>
                    </div>   
                    <div>
                        <StaticImage src ='../../images/studies/swiftsole/itio-swiftsole-plant.png' alt='swiftsoleplant'/>
                    </div>
                </IntroImageContainer2>
            </Intro>
            <Product>
                <h2>The product</h2>
                <p className='d-md-none'>The app allows users to<br/> order Supreme's latest<br/> products before anyone else.</p> 
                <p className='d-md-none'>We would display to our users the<br/>batch of Supreme products coming<br/> the next week. Then the user could<br/>choose the products they like, and<br/> how many they want to order.</p>
                <p className='d-none d-md-block d-lg-none'>The app allows users to order Supreme's latest products before anyone else.<br/> Before we worked on this project, we had no idea how big the luxury second hand<br/> market was! So we have a bot that fetches the data from Supreme.</p>
                <p className='d-none d-md-block d-lg-none'>We would display to our users the batch of Supreme products coming the next week.<br/>Then the user could choose the products they like, and how many they want to order.</p>
                <p className='d-none d-lg-block'>The app allows users to order Supreme's latest products before anyone<br/> else. Before we worked on this project, we had no idea how big the luxury<br/> second hand market was! So we have a bot that fetches the data from <br/> Supreme.We would display to our users the batch of Supreme products<br/> coming the next week. Then the user could chose the products they like,<br/> and how many they want to order.</p>
                <p className='d-none d-md-block'>The Swftsole app was a great great success as you<br/>can see from the reviews and the 42k follower on Twitter.</p>
                <div>
                    <StaticImage src='../../images/studies/swiftsole/itio-swiftsole-img3.png' alt='itio-swiftsole-product'  />
                </div>
            </Product>
            <Challenges>
                <h2>Challenges</h2>
                <p className='d-md-none'>No real challenge here except<br/>that the app was hard to test.</p>
                <p className='d-md-none'>We could only test the app live once<br/> a week because that's how often<br/>Supreme releases new products.</p>
                <p className='d-none d-md-block'>No real challenge here except that the app was hard to test.<br/>We could only test the app live once a week because that's how <br/>often Supreme releases new products.</p>
                    <ProductContainerImg>
                        <StaticImage src='../../images/studies/swiftsole/itio-swiftsole-challenge.png' alt='swiftsole challenge'/>
                    </ProductContainerImg>
            </Challenges>
        </Article>
    </Layout>
)

export default Swiftsole

const Article = styled.article`
    text-align: center;
    h1{
        font:400 38px junegull;
        margin: 38px auto 25px;
    }

    p{
        font: 400 16px nunito;
        line-height: 21.82px;
        padding-bottom: 10px;
    }

    h2{
        font: 700 25px sans;

    }

    @media (min-width:767px){
        h1{
            padding: 40px 0 0;
        }
        p{
            font: 400 14px nunito;
        }
    
    }
    @media (min-width:991px){
        p{
            font: 400 16px nunito;
            line-height: 21px;
        }
    }
`

const Intro = styled.section`
`

const IntroImageContainer = styled.div`
    width: 300px;
    margin: 36px auto 25px;
    div:nth-child(2){
        position:absolute;
        top:-20px; right:10px;
        width:28px;
    }
    div:nth-child(3){
        position:absolute;
        width: 28px;
        bottom:-10px; left:-20px; 
    }

    @media (min-width:767px){
        width: 587px; 
        margin: 71px auto 76px;
        div:nth-child(2){
            width:69px;
            top:-52px; right:10px;
        }
        div:nth-child(3){
            width: 63px;
            bottom:-30px; left:-50px; 
        }
    }
    @media (min-width:991px){
        width: 680px;
        margin: 71px auto 76px;
        div:nth-child(2){
            width:80px;
            top:-52px; right:45px;
        }
        div:nth-child(3){
            width: 73px;
            bottom:-30px; left:-20px; 
        } 
    }
`

const IntroImageContainer2 = styled.div`
    width: 235px;
    margin: 36px auto;
    
    div:nth-child(2){
        position: absolute;
        width: 49px;
        bottom:-10px; left:-30px; 
    }

    @media (min-width: 767px){
        width: 380px;
        margin: 50px auto 74px;

        div:nth-child(2){
            width: 78px;
            bottom: -10px; left: 20px; 
        }
    }

    @media (min-width: 991px){
        width:380px;
        margin: 54px auto 74px;
        div:nth-child(2){
            width: 49px;
            bottom:-10px; left: 40px; 
        }
    }
`

const Product = styled.section`
    margin: 20px auto 80px;
    h2{
        margin: 50px auto 40px;
    }

    div{
        width: 245px; height: 299px;
        margin: 0 auto 80px;
    }

    @media (min-width: 767px){
        div{
            width: 398px; height: 485px;
        }
    }
    
    @media (min-width: 991px){
        div{
            width: 398px; height: 485px;
            margin: 30px auto 75px
        }
    }
`

const Challenges = styled.section`
    margin: 40px auto 50px;

    h2{
        padding: 55px 0 20px;
    }

    @media (min-width: 767px){
        width: 640px;
    }
`

const ProductContainerImg = styled.div`
    width: 306px;
    margin: 0 auto;

    @media (min-width: 767px){
        width: 640px;
    }
    @media (min-width: 991px){
        width: 100%;
        max-width: 1002px;
    }
`