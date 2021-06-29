import React from 'react';
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';

const CaseFolder = ( { title, link }) =>{
    const [open, setOpen] = React.useState(false);
    return(
        <Container 
            onMouseOver={()=>setOpen(true)} 
            onMouseLeave={()=>setOpen(false)}
        >
            <Link to={link}>
                <CaseImgContainer>
                    <StaticImage 
                        src='../../images/studies/ITIOcasesfolder.png' 
                        className={!open ? 'd-block mx-auto' : 'd-none'}
                    />
                    <StaticImage 
                        src='../../images/studies/ITIOcasesOpenFolder.png' 
                        className={open ? 'd-block mx-auto' : 'd-none'}
                    />
                </CaseImgContainer>
                <Legend>{title}</Legend> 
            </Link>
        </Container>
    )
}

export default CaseFolder

const Container = styled.div`
    width: 50%;
    margin: 0 auto;
    text-align: center;

    @media (min-width: 767px){
        width: 33%;
        /* max-width: 33%; */
    }
`

const Legend = styled.div`
    width: 132px;
    font: 400 18px junegull;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
    max-width: 200px;

    @media (min-width:767px){
        max-width: 320px;
        font: 400 24px junegull;
    }
`

const CaseImgContainer = styled.div`
    width: 60px;
    height: 80px;
    margin: 0 auto;
    position: relative;

    & > div{
        position: absolute;
        bottom: 0;
    }

    @media (min-width: 767px){
    }
`