/** @jsx jsx */

import { useState, useEffect } from 'react'
import { jsx, useTheme } from '@emotion/react'
import styled from "@emotion/styled"

const HeaderWrapper = styled.header`
    height:60px;
    justify-content:center;
    padding:0px 30px;
    display:flex;
    flex-direction:row;
    align-items:center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.3s ease 0s;
    transform: ${(props) => !props.show ? "translate3d(0px, -75px, 0px)" : "translate3d(0px, 0px, 0px)"};
    z-index: 99;
    background: ${(props) => props.theme.header.background}
    box-sizing:border-box;
`;

const Header = ( props ) => {
    const theme = useTheme()
    const [showHeader, setHeader] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    });
    
    const handleScroll = () => {
        if (document.body.getBoundingClientRect().top === 0) {
          setHeader(true);
          setScrollPos(0);
        } else {
          setScrollPos(document.body.getBoundingClientRect().top);
          setHeader(document.body.getBoundingClientRect().top > scrollPos);
        }
    };

    return(
        <HeaderWrapper 
            transparent={showHeader && scrollPos === 0}
            show={showHeader}
            theme={theme}
        >
            {props.children}
        </HeaderWrapper>
    )
}

export default Header
