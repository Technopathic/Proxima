/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const Span = (props) => {
    const theme = useTheme()
    const {
        fontSize,
        color,
        lineHeight,
        margin,
        padding,
        fontWeight,
        position,
        top,
        bottom,
        left,
        right,
        zIndex,
        display,
        flexDirection,
        alignItems,
        justifyContent,
        textAlign,
        before,
        after,
        children,
        ...rest
    } = props

    const span = css`
        font-size: ${fontSize ? fontSize : theme.span.fontSize};
        color: ${color ? color : theme.span.color};
        line-height: ${lineHeight ? lineHeight : theme.span.lineHeight};
        margin: ${margin ? margin : theme.span.margin};
        padding: ${padding ? padding : theme.span.padding};
        font-weight: ${fontWeight ? fontWeight : theme.span.fontWeight};
        position: ${position ? position : theme.span.position};
        top: ${top ? top : theme.span.top};
        bottom: ${bottom ? bottom : theme.span.bottom};
        left: ${left ? left : theme.span.left};
        right: ${right ? right : theme.span.right};
        z-index: ${zIndex ? zIndex : theme.span.zIndex};
        display: ${display ? display : theme.span.display};
        flex-direction: ${flexDirection ? flexDirection : theme.span.flexDirection};
        align-items: ${alignItems ? alignItems : theme.span.alignItems};
        justify-content: ${justifyContent ? justifyContent : theme.span.justifyContent};
        text-align: ${textAlign ? textAlign : theme.span.textAlign};

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }

        ${props.css}
    `;

    return (
        <span css={span} {...rest}>
            {children}
        </span>
    )
}

export default Span