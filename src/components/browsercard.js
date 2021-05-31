import React from 'react';
import * as st from './browsercard.module.css';

const BrowserCard = ({noMenubar, closebutton, rounded, slimInnerPadding, children}) =>{
    
    return(
        <div className={rounded ? st.containerRounded : st.container}>
            <div className ={noMenubar ? 'd-none' : rounded ? st.titleRounded: st.title} >
                <div className='d-flex flex-nowrap flex-shrink-0 align-content-center'>
                    <div className={rounded ? st.buttonsRounded : st.buttons}></div>
                    <div className={rounded ? st.buttonsRounded : st.buttons}></div>
                    <div className={rounded ? st.buttonsRounded : st.buttons}></div>
                </div>
                <div className={ closebutton ? 'font-weight-bold' : 'd-none'} style={{fontSize: '30px'}}>x</div>
            </div>
            <div className={ slimInnerPadding ? 'pt-3': 'px-4 pt-3 '}>
                {children}
                {/* <div className={st.h1}>{title}</div>
                <p className={st.paragraph}>{text}</p> */}
            </div>
        </div>
    )
}

export default BrowserCard;