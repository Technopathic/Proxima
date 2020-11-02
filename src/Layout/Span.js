/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

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

        ${props.css}
    `;

    return (
        <span css={span} {...rest}>
            {children}
        </span>
    )
}

export default Span