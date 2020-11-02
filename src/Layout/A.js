/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const A = (props) => {
    const theme = useTheme()
    const { 
        color,
        margin,
        padding,
        fontSize,
        textDecoration,
        alignItems,
        justifyContent,
        flexGrow,
        width,
        height,
        background,
        radius,
        hoverBackground,
        hoverColor,
        hoverOpacity,
        children,
        ...rest
    } = props

    const a = css`
        transition:all 180ms ease-out;
        cursor:pointer;
        color: ${color ? color : theme.color.linkColor};
        margin: ${margin ? margin : theme.a.margin};
        padding: ${padding ? padding : theme.a.padding};
        font-size: ${fontSize ? fontSize : theme.a.fontSize};
        text-decoration: ${textDecoration ? textDecoration : theme.a.textDecoration};
        display:flex;
        flex-direction:column;
        align-items: ${alignItems ? alignItems : theme.a.alignitems};
        justify-content: ${justifyContent ? justifyContent : theme.a.justifyContent};
        flex-grow: ${flexGrow ? flexGrow : theme.a.flexGrow};
        width: ${width ? width : theme.a.width};
        height: ${height ? height : theme.a.height};
        background: ${background ? background : theme.a.background};
        border-radius: ${radius ? radius : theme.a.radius};

        &:hover {
            background: ${hoverBackground ? hoverBackground : theme.a.hoverBackground};
            color: ${hoverColor ? hoverColor : theme.a.hoverColor};
            opacity: ${hoverOpacity ? hoverOpacity : theme.a.hoverOpacity};
        }

        ${props.css}
    `;

    return (
        <a css={a} {...rest}>
            {children}
        </a>
    )
}

export default A