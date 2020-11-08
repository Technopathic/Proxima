/** @jsx jsx */

import React, { useState, useEffect } from 'react'
import { css, jsx } from '@emotion/core'

const Drawer = ( props ) => {
    const [isMobile, setIsMobile] = useState(false)
    const [resolution, setResolution] = useState(1280)

    useEffect(() => {
        if(props.sticky) {
            if(document.body.clientWidth < 1280) {
                props.showFunc(false)
                setIsMobile(true)
            } else {
                props.showFunc(true)
                setIsMobile(false)
            }
        }
    }, [])

    const drawerBackground = css`
        height:100vh;
        width:100%;
        background:rgba(0, 0, 0, 0.8);
        position:fixed;
        top:0;
        left:0;
        z-index:97;
        cursor:pointer;
        opacity:1;
        transition: all 0.2s ease-in;
    `

    const drawerHide = css`
        opacity:0;
        z-index:-99999;
    `

    const drawerContainer = css`
        height:${props.top || props.bottom ? 'auto' : '100vh'};
        width:${props.show && !isMobile ? '100%' : '0px'};
        max-width:${props.maxWidth ? props.maxWidth : 'none'};
        background:#FFFFFF;
        position: ${props.sticky ? 'relative' : 'fixed'};
        top:${props.top ? props.top : 'auto'};
        bottom: ${props.bottom ? props.bottom : 'auto'};
        right: ${props.right ? props.right : 'auto'};
        left: ${props.left  ? props.left : 'auto'};
        box-shadow:${props.boxShadow ? props.boxShadow : 'none'};
        z-index:98;
        padding:${props.bottom ? '15px 15px 80px 15px' : '0px'};
        transition: all 0.2s ease-in;
        display:flex;
        flex-direction:column;
        box-sizing:border-box;
    `

    let drawerSlide = css`       
        left:${props.left ? '-480px' : props.left};
        z-index:98;
    `
    if(props.slideUp) {
        drawerSlide = css`
            top:${props.top ? '-110vh' : props.top};
            z-index:98;
        `
    } else if(props.slideDown) {
        drawerSlide = css`
            bottom:${props.bottom ? '-110vh' : props.bottom};
            z-index:98;
        `
    } else if(props.slideRight) {
        drawerSlide = css`
            right:${props.right ? '-480px' : props.right};
            z-index:98;
        `
    }

    const drawerIcon = css`
        display:flex;
        flex-direction:column;
        position:fixed;
        top:15px;
        right:20px;
        z-index: 97;

        span {
            width: 20px;
            height: 3px;
            background: #000000;
            margin: 2px 0;
        }
    `

    if(isMobile) {
        return (
            <React.Fragment>
                <div css={props.show ? drawerBackground : [drawerBackground, drawerHide]} onClick={() => props.showFunc(false)}></div>
                <div css={drawerIcon} onClick={() => props.showFunc(true)}>
                    <span />
                    <span />
                    <span />
                </div>
                <aside css={props.show ? [drawerContainer] : [drawerContainer, drawerSlide]}>
                    {props.children}
                </aside>
            </React.Fragment>
        )
    }
    
    if(props.sticky) {
        return (
            <React.Fragment>
                <aside css={props.show ? [drawerContainer] : [drawerContainer, drawerSlide]}>
                    {props.children}
                </aside>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div css={props.show ? drawerBackground : [drawerBackground, drawerHide]} onClick={() => props.showFunc(false)}></div>
                <aside css={props.show ? [drawerContainer] : [drawerContainer, drawerSlide]}>
                    {props.children}
                </aside>
            </React.Fragment>
        )
    }
    
}


export default Drawer