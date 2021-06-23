import React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import BrowserCard from "../../components/browsercard"

const Koalaga = () => {
  const [carrusel, setCarrusel] = React.useState(1);

  const moveCarrusel = (action) => {
    if(action === 'left')
      carrusel > 1 ? setCarrusel(carrusel - 1) : setCarrusel(3);
    else 
      carrusel < 3 ? setCarrusel(carrusel + 1) : setCarrusel(1);
  }

return(
  <Layout>
    <Seo title="Koalaga"/>
    <Article className='text-center'>
      <section>
        <h1>KOALAQA</h1>
        <p>Time to build: 2 month and a half</p>
          <StaticImage src='../../images/studies/koalaqa/ITIO-koalaqa-1.png' alt='koalaqa'/>
      </section>
      <section>
        <h3>Requirements</h3>
        <p className='d-md-none'>The Koala team wanted to<br/> build a visual bug tracking<br/> tool for websites.</p>
        <p className='d-none d-md-block'>We built KoalaQA from the ground up.<br/> The Koala team wanted to build a visual bug tracking tool for<br/> websites. The main goal was to allow website owners to get clear<br/> feedback across all platforms ( Mobile, Chrome, Safari, desktop..).</p>
        <StaticImage src='../../images/studies/koalaqa/ITIO-koalaqa-2.png' alt='koalaqa'/>
        <p className='d-md-none'>The main goal was to<br/> allow website owners to get <br/>clear feedback across all platforms.</p>
      </section>
      <section>
        <h3>The product</h3>
        <div className='d-flex align-content-center align-items-center justify-content-center d-lg-none mt-3'>
          <CarruselArrowImg>
            <StaticImage src='../../images/studies/koalaqa/koala-left-arrow.png' alt='<' onClick={()=>moveCarrusel('left')}/>
          </CarruselArrowImg>
          <CarruselContainer>
            <Carrusel noMenubar>
              <div className={carrusel === 1 ?'' : 'd-none'}>
                <PicIconsContainer>
                  <StaticImage src='../../images/studies/koalaqa/koala-arrow.png' alt='koala-arrow' />
                </PicIconsContainer>
                <p>
                  The Koala platform allowed web developers, UI/UX designers copywriters to login to log in issues with a website.
                </p>
              </div>
              <div className={carrusel === 2 ?'' : 'd-none'}>
                <PicIconsContainer>
                  <StaticImage src='../../images/studies/koalaqa/koala-warning.png' alt='koala-warning' />
                </PicIconsContainer>
                <p>
                  Maybe there is a typo someware. Maybe a link was directed to a dead page. Maybe the layout is a little bid odd. If there is any problem, a registred user can alert the website owner.
                </p>
              </div>
              <div className={carrusel === 3 ? '': 'd-none'}>
                <PicIconsContainer>
                  <StaticImage src='../../images/studies/koalaqa/koala-check.png' alt='koala-check'/>
                </PicIconsContainer>
                <p>
                  The owners can even integrate their favorite project management tool so that the newly issued bug shows up directly in their workflow.
                </p>
              </div>
            </Carrusel>
          </CarruselContainer>
          <CarruselArrowImg>
            <StaticImage src='../../images/studies/koalaqa/koala-right-arrow.png' alt='>' onClick={()=>moveCarrusel('right')}/>
          </CarruselArrowImg>
        </div>
        <div className='d-none d-lg-flex flex-nowrap '>
          <div>
            <PicIconsContainer>
              <StaticImage src='../../images/studies/koalaqa/koala-arrow.png' alt='koala-arrow' />
            </PicIconsContainer>
            <p>
              The Koala platform allowed web developers,<br/> UI/UX designers copywriters to login<br/> to log in issues with a website.
            </p>
          </div>
          <div>
            <PicIconsContainer>
              <StaticImage src='../../images/studies/koalaqa/koala-warning.png' alt='koala-warning' />
            </PicIconsContainer>
            <p>
              Maybe there is a typo someware.<br/> Maybe a link was directed to a dead page.<br/> Maybe the layout is a little bid odd.<br/> If there is any problem, a registred<br/> user can alert the website owner.
            </p>
          </div>
          <div>
            <PicIconsContainer>
              <StaticImage src='../../images/studies/koalaqa/koala-check.png' alt='koala-check'/>
            </PicIconsContainer>
            <p>
              The owners can even integrate their favorite<br/> project management tool so that the newly<br/> issued bug shows up directly in their workflow.
            </p>
          </div>
        </div>  
      </section>
      <section>
        <h3>Challenges</h3>
        <p className='d-md-none'>The only real challenge <br/>there was to structure the <br/>organization and user access.</p>
        <p className='d-none d-md-block d-lg-none'>The main dashboard and the backend were really easy to Make.<br/> The only real challenge there was to structure the organization and user access.</p>
        <p className='d-none d-md-block d-lg-none'>The main difficulty was to have a script running on their clients website, <br/>that doesn't interfere with their regular user experience.</p>
        <p className='d-none d-lg-block'>The main dashboard and the backend were realliy easy to make.<br/> The only real challenge there was to structure the organization and user<br/> access. The main difficulty was to have a script running on their clients<br/> website, that doesn't interfere with their regular user experience.</p>
        <StaticImage src='../../images/studies/koalaqa/ITIO-koalaqa-3.png' alt='koalaga-3' className='mt-5' />
        <TopicContainer className='d-lg-flex w-100'>
          <Topic>
            <PicIconsContainer2>
              <StaticImage src='../../images/studies/koalaqa/koala-buzzer.png' alt='koalaga-3'/>
            </PicIconsContainer2>
            <div>
              <p className='d-md-none'>At the end we successfully allowed<br/> the clients who want feedback<br/> to simply drop a snippet in <br/> their website.</p>
              <p className='d-none d-md-block d-lg-none'>We also need to extract as much information as possible<br/> from the tester devices and get clear screeenshots.</p>
              <p className='d-none d-md-block d-lg-none'>The solution needed to balance: ease of use for the website<br/> owner, high quality of screenshot and tight budget requirements.</p>
              <p className='d-none d-lg-block'>We also need to extract as much information <br/>as possible from the tester devices<br/> and get clear screeenshots.</p>
              <p className='d-none d-lg-block'>The solution needed to balance: ease of use <br/>for the website owner, high quality of <br/>screenshot and tight budget requirements.</p>
            </div>
          </Topic>
          <Topic>
            <PicIconsContainer3>
              <StaticImage src='../../images/studies/koalaqa/koala-comments.png' alt='koalaga-3' />
            </PicIconsContainer3>
            <div>
              <p className='d-md-none'>If the user logged in through the<br/> Koala dashboard, it would see a <br/>new UI and be able to drop<br/> comments on the site.</p>
              <p className='d-none d-md-block'>At the end we successfully allowed the clients who want<br/> feedback to simply drop a snippet in their website.</p>
              <p className='d-none d-md-block'>The snippet would detect if the current user is <br/>logged in a tester or as a regular user.</p>
              <p className='d-none d-md-block'>If the user logged in through the  Koala<br className='d-none d-lg-block'/> dashboard, it would <br className='d-lg-none'/>see a new UI and be able<br className='d-none d-lg-block'/> to drop comments on the site.</p>
            </div>
          </Topic>
        </TopicContainer>
      </section>
    </Article>
  </Layout>
)
}

export default Koalaga

const Article = styled.div`
  padding: 30px 10px;
  section{
    padding: 0;
  }

  h1{
    font-family: junegull;
    font-weight: 400;
    font-size: 38px;
  }
  
  h3{
    font-family: sans;
    font-size: 25px;
    font-weight:700;
    margin: 36px 0;
    
  }

  p{
    text-align: center;
    font: 400 16px nunito;
    line-height: 22px;
    margin: 0 auto 28px ;
  }
 
  div + p{
    margin: 36px auto;
  }

  div p{
    width: 33vw;
  } 

  p{
    margin: 0 auto;
  }

  section:last-child{
    p{
      width: 100vw;
    }
  }

  section:nth-child(1) img:first-child{
    width: 275px;
  }

  section:nth-child(2) > div{
      margin-top: 36px;
    }

  section:nth-child(2) img:first-child{
    width: 309px;
  }
  
  section:nth-child(3) img:first-child{
    width: 48px;
  }
  
  section:nth-child(4) img:first-child{
    width: 286px;
  }
  

  @media (min-width: 767px){
    h1{
      font-size: 50px;
      margin-top: 6vw;
    }
    
    h3{
      font-size: 25px;
      margin: 40px auto
    }

    p{
      font-size: 16px;
    }
   
    section:first-child img:first-child{
      width: 608px;
    }
  
    section:nth-child(2) > div{
      margin-top: 60px;
    }

    section:nth-child(2)  img:first-child{
      width: 484px;
    }
    
    section:nth-child(3) img:first-child{
      width: 48px;
    }
    
    section:nth-child(4) img:first-child{
      width: 588px;
    }

  }

  @media (min-width: 991px){
    section:last-child{
      div p{
        width: 450px;
        margin-bottom: 0;
      }
    }

    section:nth-child(4) p:nth-child(4){
      margin-bottom: 20px;
    }
    section:nth-child(4) p:nth-child(5){
      margin-bottom: 82px;
    }
  }

`

const PicIconsContainer = styled.div`
  width: 71px;
  margin: 14px auto;

  @media (min-width: 767px){
    width: 51px;
  }

`

const PicIconsContainer2 = styled.div`
  width: 71px;
  margin: 50px auto 26px;

  @media (min-width: 767px){
    width: 92px;
  }

  @media (min-width: 991px){
    width: 71px;
    margin: 0 auto 33px;
  }
`

const PicIconsContainer3 = styled.div`
  width: 125px;
  margin: 50px auto 26px;

  @media (min-width: 767px){
    width: 163px;
    margin-top:80px;
  }
  @media (min-width: 991px){
    width: 125px;
    margin: 0 auto 33px;
  }
`

const Carrusel = styled(BrowserCard)`
`

const CarruselContainer = styled.div`
  width:70%;
  min-height: 330px;

  @media (min-width:767px){
    width: 43.22vw;
  }
`

const CarruselArrowImg = styled.div`
  width: 23px;
  margin: 0 auto;

  @media (min-width: 767px){
    width:32px;
    margin: 0 40px; 
  }
`

const Topic = styled.p`
@media (min-width: 998px){
  div:nth-child(2) p{
    padding-bottom:20px;

  }
}
  
`
const TopicContainer = styled.div`
  @media (min-width: 767px){
    margin: 111px auto 120px;
  }
  
  @media (min-width: 991px){
      margin: -50px auto 0px;
  }
`
