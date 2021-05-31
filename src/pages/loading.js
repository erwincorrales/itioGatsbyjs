import React, {useState, useEffect } from 'react'
import styled from 'styled-components';
import Layout from '../components/layout'
import Seo from '../components/seo'

const Loading = () =>{

    const [count, setCount] = useState(0);

    const tick = () =>{
        if (count === 10) setCount(1);
        else setCount(count + 1);
    }

    useEffect(()=>{
        const timer = setInterval(() => {
            tick();
        }, 50);

        return ()=> clearInterval(timer);
    })

    return(
        <Layout noFooter nohome className='vh-100'>
            <Seo title='Loading'/>
            <Container className='d-flex align-items-center justify-content-center'>
                <div className='text-center'>
                    <h1>Loading...</h1>
                    <ProgressBar>
                        <div className ={count >= 1 ? 'bg-dark': 'bg-white'}></div>
                        <div className ={count >= 2 ? 'bg-dark': 'bg-white'}></div>
                        <div className ={count >= 3 ? 'bg-dark': 'bg-white'}></div>
                        <div className ={count >= 4 ? 'bg-dark': 'bg-white'}></div>
                        <div className ={count >= 5 ? 'bg-dark': 'bg-white'}></div>
                        <div className ={count >= 6 ? 'bg-dark': 'bg-white'}></div>
                        <div className ={count >= 7 ? 'bg-dark': 'bg-white'}></div>
                        <div className ={count >= 8 ? 'bg-dark': 'bg-white'}></div>
                        <div className ={count >= 9 ? 'bg-dark': 'bg-white'}></div>
                        <div className ={count >= 10 ? 'bg-dark': 'bg-white'}></div>
                    </ProgressBar>
                </div>
            </Container>
        </Layout>
    )
}

export default Loading;

const Container = styled.div`
    
    width: 100%;
    height: calc(100vh - 101px);

    h1{
        font: 700 30px junegull;
        margin: 0; padding: 0; margin-bottom: 17px;
    }

    @media (min-width:767px){
        height: calc(100vh - 136px);
        h1{
            font-size: 50px;
        }
    }
    
    @media (min-width: 991px){
        height: calc(100vh - 156px);
    }
`

const ProgressBar = styled.div`
    border: 3px solid black;
    width: 174px; height: 31px;
    padding: 2px;

    display: flex; 
    flex-direction: row;

    div{
        display: flex;
        width:100%;
        background-color: black;
        margin : 0 2.5px;
    }

    @media (min-width:767px){
        width: 340px; height: 62px;
            padding: 10px;

        div{
            margin: 0 5px;
        }
    }
    
    @media (min-width:991px){
        width: 340px; height: 62px;
    }


`