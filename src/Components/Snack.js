/** @jsx jsx */

import { jsx, css, keyframes } from '@emotion/react'

import Row from '../Layout/Row'
import P from '../Layout/P'

const fadeInOut = keyframes`
    0% { opacity:0; }
    15% { opacity:1; }
    85% { opacity:1; }
    100% { opacity:0; }
`

const container = css`
    min-height:60px;
    background:#000000;
    position:fixed;
    bottom:80px;
    right:20px;
    width:100%;
    max-width:425px;
    z-index:99;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    box-shadow:0 0 15px 0 rgba(0, 0, 0, 0.7);
    color:#FFFFFF;
    padding-left:30px;
    padding-right:30px;
    animation-name:${fadeInOut};
    animation-duration:3s;
    border-radius:5px;
    box-sizing: border-box;


    @media(max-width:425px) {
        width:90%;
        bottom:80px;
        right:0;
        left:0;
        margin:0 auto;
    }
`

const Snack = ( props ) => {
    if(props.show === true) {
        return(
            <div css={container}>
                <Row alignItems="center" justifyContent="space-between" grow="1">
                    <div></div>
                    <P color="#FFFFFF" lineHeight="20px">{props.message}</P>
                    <div></div>
                </Row>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default Snack