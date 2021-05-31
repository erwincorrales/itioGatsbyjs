import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import BrowserCard from '../browsercard';
import Button from '../button';

const Form = ()=>{
    return(
        <Container >
            <Leaf>
                <StaticImage src='../../images/contact/itio-leaf-top.png' alt='leaf'/>
            </Leaf>
            <BrowserCard rounded closebutton>
                <InnerContainer>
                    <Row>
                        <Col md={6} className='d-flex flex-column align-content-start'>
                            <label htmlFor='fname'>First Name</label>
                            <input type='text' name='fname'/>
                        </Col>
                        <Col md={6} className='d-flex flex-column text-left align-content-start'>
                            <label htmlFor='lname'>Last Name</label>
                            <input type='text' name='lname' />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className='d-flex flex-column text-left align-content-start'>
                            <label htmlFor='mail'>Mail</label>
                            <input type='email' name='mail' />
                        </Col>
                        <Col md={6} className='d-flex flex-column text-left align-content-start'>
                            <label htmlFor='phone'>Phone</label>
                            <input type='tel' name='phone' />
                        </Col>
                    </Row>
                    <Row>
                        <strong>What do you need?</strong>
                    </Row>
                    <Row className='d-md-flex flex-md-nowrap text-nowrap justify-content-lg-between w-100'>
                        <label>
                            <input type='radio' name='job'  value='Web Design'  />
                            Web Design
                            <span className></span>
                        </label>
                        <label>
                            <input type='radio'  name='job'  value='Web Development'/>
                            Web Development
                            <span></span>
                        </label>
                        <label>
                            <input type='radio'  name='job'  value='Logo Design' checked/>
                            Logo Design
                            <span></span>
                        </label>
                        <label>
                            <input type='radio' name='job'  value='Other'/>
                            Other
                            <span></span>
                        </label>
                    </Row>
                    <Row>
                        <strong>Message</strong>
                    </Row>
                    <Row>
                        <Col>
                            <textarea name='message' rows='3' cols='50' placeholder='Write Something here'/>
                        </Col>
                    </Row>
                    <Submit>
                        <div className='d-block d-lg-none'>
                            <Button label='SEND MESSAGE' pressed small/>
                        </div>
                        <div className='d-none d-lg-block'>
                            <Button label='SEND MESSAGE' small />
                        </div>
                    </Submit>
                </InnerContainer>
            </BrowserCard>
            <PhotoContainer>
                <StaticImage src='../../images/contact/itio-message-form.png' alt='form' />
            </PhotoContainer>
        </Container>
    )
}

export default Form

const Container = styled.div`
    position: relative;
    max-width: 285px;
    margin: 60px auto; 
    text-align: left;

    label{
        font: 400 16px nunito;
        color: #C7B0FF;
        position: relative;
    }

    input{
        border: 3px solid #C7B0FF;
        padding: 2px;
    }

    input[type='text'], input[type='email'],input[type='tel']{
        margin-bottom: 27px; padding:4px 15px;
        outline: none;
    }

    input[type='text']:focus , input[type='email']:focus , input[type='tel']:focus {
        border: 3px solid #9E6CFF;
    }
    
    label:hover{
        color: #9E6CFF; font-weight: bolder;
    }


    input[type='tel']:hover{
        cursor: pointer;
    }

    

    input[type='radio']{
        display: none; padding: 0;
        margin-bottom: 0px;
    }

    div:nth-child(3) strong{
        padding: 24px 0 5px 20px;
    }

    div:nth-child(5) strong{
        padding-top:48px;
    }

    textarea{
        width: 100%;
        border: 3px solid black;
        height: 197px;
        padding: 12px 15px;
    }

    textarea::placeholder{
        color: #C7B0FF;
    }

    label span{
        position: absolute;
        top: 0;
        left: 0;
        width: 22px;
        height: 22px;
        border: 3px solid #E0D4FF;
        border-radius: 50%;
        background-color: transparent;
    }

    span:after{
        position:absolute; display: none; content:'';
    }

    input:checked ~ span{
        background: #9E6CFF;
    }

    input:checked ~span:after{
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid black;
        border-width: 0 3px 3px 0;
    }


    @media (min-width:767px){
        max-width: 605px;
        
        input{
            margin-bottom: 36px;
            padding: 5px;
        }

        textarea{
            height: 62px;
            padding: 8px 10px;
        }

        div:nth-child(4) label{
            width: auto;
            font: 800 14px nunito;
            padding: 0; margin: 0;
            
            span{
                width: 16px; height: 16px; 
            }
        }

        div:nth-child(5) strong{
            padding-top:34px;
        }
    }

    @media (min-width:991px){
        max-width: 878px;

        textarea{
            height:90px
        }

        /* div:nth-child(4) label{
            width:25%;
        } */
    }
`
const Leaf = styled.div`
    display:none;
    position: absolute;
    right: 20px;
    top: -55px;
    @media (min-width: 767px){
        display: block;
    }
`

const InnerContainer = styled.div`
    padding: 22px 10px;
    border: 1px black;

    div:nth-child(4) label{
        color: black;
        padding-left: 30px;
        margin: 15px 0 15px 10px;
    }

    div:nth-child(4) label:hover{
        cursor: arrow;
    }

    @media (min-width: 767px){
        div:nth-child(4) label{
            font-size: 14px;
            display: inline-flex;
        }

        padding: 46px 46px 20px;
    }
`
const PhotoContainer = styled.div`
    display: none;
    position: absolute;
    left:-73px;
    bottom:-60px;
    width: 139px; height:162px;

    @media (min-width: 991px){
        display:flex;
    }
`

const Submit = styled.div`
    width: 160px;
    display: block;
    
    @media (min-width:767px){
        width:100%;
        display: flex;
        justify-content: flex-end;

        div{
            width: 156px;
        }
    }
`