/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const Aside = (props) => {
    const theme = useTheme()
    const {
        background,
        flexDirection,
        margin,
        padding,
        alignItems,
        justifyContent,
        flexGrow,
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        position,
        top,
        bottom,
        left,
        right,
        zIndex,
        fontSize,
        before,
        after,
        children,
        ...rest
    } = props

    const aside = css`
        background: ${background ? background: theme.aside.background};
        display:flex;
        flex-direction:${flexDirection ? flexDirection : theme.aside.flexDirection};
        margin: ${margin ? margin : theme.aside.margin};
        padding: ${padding ? padding : theme.aside.padding};
        font-size: ${fontSize ? fontSize : theme.a.fontSize};
        align-items: ${alignItems ? alignItems : theme.aside.alignItems};
        justify-content: ${justifyContent ? justifyContent : theme.aside.justifyContent};
        flex-grow: ${flexGrow ? flexGrow : theme.aside.flexGrow};
        width: ${width ? width : theme.aside.width};
        height: ${height ? height : theme.aside.height};
        min-width: ${minWidth ? minWidth : theme.aside.minWidth};
        min-height: ${minHeight ? minHeight : theme.aside.minHeight};
        max-width: ${maxWidth ? maxWidth : theme.aside.maxWidth};
        max-height: ${maxHeight ? maxHeight: theme.aside.maxHeight};
        position: ${position ? position : theme.aside.position};
        top: ${top ? top : theme.aside.top};
        bottom: ${bottom ? bottom : theme.aside.bottom};
        left: ${left ? left : theme.aside.left};
        right: ${right ? right : theme.aside.right};
        z-index: ${zIndex ? zIndex : theme.aside.zIndex};
        overflow: auto;

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }

        ${props.css}
    `;

    return (
        <aside css={aside} {...rest}>
            {children}
        </aside>
    )
}

export default Aside