/** @jsx jsx */

import { useEffect, useState } from 'react'

const Progress = ( props ) => {
    const [ data, setData ] = useState(props.data)

    const progressContainer = {
        background:'transparent',
        height:'3px',
        width:'100%',
        position:'fixed',
        top:0,
        left:0,
        zIndex:99
    }

    const progressFill = {
        width:`${data}%`, 
        maxWidth:'100%', 
        background:'#000000',
        height:'3px', 
        transition:'all .4s ease',
        opacity:1
    }

    const progressHide = {
        opacity:'0'
    }

    useEffect((prevProps) => {
        if(props.data === 0 || props.show === false) {
            setTimeout(() => {
                setData(props.data)
            }, 400)
        } else {
            setData(props.data)
        }
    })

    return (
        <div style={progressContainer}>
            {props.show ? 
                <div style={progressFill}></div>
                : <div style={{...progressFill, ...progressHide}}></div>
            }
        </div>
    )
}

export default Progress