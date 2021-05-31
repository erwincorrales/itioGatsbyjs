import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';

const Footer = ({pAbsolute})=>{
    return(
        <FooterContainer className='position-relative'  style={pAbsolute ? {bottom: 0, zIndex:1000, marginBotom: '-100px'}: undefined} > 
                <Social className='position-absolute'>
                    <a href='http://facebook.com'>
                        <StaticImage 
                            src='../images/footer/Facebook-sm.png' 
                            width={24}
                            alt='social'/>
                        {/* <StaticImage 
                            src='../images/footer/Facebook.png' 
                            width={50}  
                            className='d-none d-md-block' 
                            alt='social'/> */}
                    </a>
                    <a href='http://twitter.com' >
                        <StaticImage src='../images/footer/Twitter-sm.png' width={50} alt='social'/>
                        {/* <StaticImage src='../images/footer/Twitter.png' width={50} className='d-none d-md-block' alt='twitter'/> */}
                    </a>
                    <a href='http://instagram.com' >
                        <StaticImage src='../images/footer/Instagram-sm.png' width={40}  alt='instagram'/>
                        {/* <StaticImage src='../images/footer/Instagram.png' width={50} className='d-none d-md-block' alt='instagram'/> */}
                    </a>
                </Social>
                <Enterprise className='position-absolute'>
                    <h1 >ITIO</h1>
                    <p className='d-none d-md-block'>Solution for your business</p>
                    <p className='d-none d-md-block'>{`ITIO ${new Date().getFullYear()}. All right reserved.`}</p>
                </Enterprise>
            <StaticImage className='d-md-none' src='../images/footer/footer-sm.png' placeholder='dominantColor' layout='fullWidth' alt='social'/>
            <StaticImage className='d-none d-md-block d-lg-none' src='../images/footer/footer-md.png' placeholder='dominantColor' layout='fullWidth' alt='social'/>
            <StaticImage className='d-none d-lg-block' src='../images/footer/footer-lg.png' placeholder='dominantColor' layout='fullWidth' alt='social'/>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
    width: 100vw;
    color: white;

    a{
        padding-right: 15px;
    }

    h1{
        font: 400 40px junegull;
        padding: 0; margin:0;
    }
    p{
        font: 400 9px nunito;
        margin:0;
    }

    @media (min-width: 991px){
        h1{
            font: 400 64px junegull;
        }
        p{
            font: 400 11px nunito;
        }
        a{
            padding-right: 26px;
        }
    }
`

const Social = styled.div`
    color: white;
    width: 200px;
    bottom: 9.6vw;
    left: 60px;
    z-index: 1;
    @media (min-width: 767px){
        bottom: 5vw;
    }
    @media (min-width: 991px){
        bottom: 4.7vw;
        left: 100px;
    }
`

const Enterprise = styled.div`
    color: 'white';
    bottom: 9.6vw;
    z-index: 2000; right: 50px;
    @media (min-width: 767px){
        bottom: 3.99vw;
    }
    @media (min-width: 991px){
        bottom: 4vw;
        right: 95px;
    }

`
