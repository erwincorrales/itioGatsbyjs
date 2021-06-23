import React, {useState} from 'react';
import * as st from './button.module.css';

const Button = ({label, pressed, small}) =>{

    const [pressedState, setPressedState] = useState(false);

    return(
        <div 
            onMouseDown ={()=>setPressedState(true)}
            onMouseUp={()=>setPressedState(false)}
            className={ small ? st.containerSmall :st.container}
        >
            <div className='d-flex text-nowrap' >
                <div className={small ? st.faceSmall : st.face}>{label}</div>
                <div className={ (pressed || pressedState) ? st.hide: ''}> 
                    <div className={st.shadowright1}></div>
                    <div className={st.shadowright2}></div>
                </div>
            </div>
            <div className={(pressed || pressedState) ? st.hide : st.shadowdown}></div>
        </div>
    )
}

export default Button