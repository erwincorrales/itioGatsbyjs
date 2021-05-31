import React from 'react';
import * as st from './button.module.css';

const Button = ({label, pressed, small}) =>{

    return(
        <div 
            className={ small ? st.containerSmall :st.container}
        >
            <div className='d-flex text-nowrap' >
                <div className={small ? st.faceSmall : st.face}>{label}</div>
                <div className={ pressed ? st.hide: ''}> 
                    <div className={st.shadowright1}></div>
                    <div className={st.shadowright2}></div>
                </div>
            </div>
            <div className={pressed ? st.hide : st.shadowdown}></div>
        </div>
    )
}

export default Button