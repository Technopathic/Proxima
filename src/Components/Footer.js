/** @jsx jsx */

import { useState, useEffect } from 'react'
import { jsx } from '@emotion/core'
import styled from "@emotion/styled"
import { useTheme } from 'emotion-theming'

const FooterWrapper = styled.footer`
    width:100%;
    height:60px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.3s ease 0s;
    transform: ${(props) => !props.show ? "translate3d(0px, 60px, 0px)" : "translate3d(0px, 0px, 0px)"};
    z-index: 99;
    background: ${(props) => props.theme.footer.background};
`;

const Footer = ( props ) => {
    const theme = useTheme()
    const [showFooter, setFooter] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    });

    const handleScroll = () => {
        if (document.body.getBoundingClientRect().top === 0) {
          setFooter(true);
          setScrollPos(0);
        } else {
          setScrollPos(document.body.getBoundingClientRect().top);
          setFooter(document.body.getBoundingClientRect().top > scrollPos);
        }
    };

    return (
        <FooterWrapper
            transparent={showFooter && scrollPos === 0}
            show={showFooter}
            theme={theme}
        >
            {props.children}
        </FooterWrapper>
    )
}

export default Footer
