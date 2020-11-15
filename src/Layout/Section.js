/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const Section = (props) => {
    const theme = useTheme()
    const {
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        display,
        flexDirection,
        margin,
        padding,
        background,
        position,
        top,
        bottom,
        left,
        right,
        zIndex,
        lineHeight,
        color,
        boxShadow,
        radius,
        before,
        after,
        children,
        ...rest
    } = props

    const section = css`
        width: ${width ? width : theme.section.width};
        height: ${height ? height : theme.section.height};
        min-width: ${minWidth ? minWidth : theme.section.minWidth};
        min-height: ${minHeight ? minHeight : theme.section.minHeight};
        max-width: ${maxWidth ? maxWidth : theme.section.maxWidth ? theme.section.maxWidth : 'none'};
        max-height: ${maxHeight ? maxHeight : theme.section.maxHeight ? theme.section.maxHeight : 'none'};
        box-sizing:border-box;
        display: ${display ? display : theme.section.display};
        flex-direction: ${flexDirection ? flexDirection : theme.section.flexDirection};
        margin: ${margin ? margin : theme.section.margin};
        padding: ${padding ? padding : theme.section.padding};
        background: ${background ? background : theme.section.background};
        position: ${position ? position : theme.section.position};
        top: ${top ? top : theme.section.top};
        bottom: ${bottom ? bottom : theme.section.bottom};
        left: ${left ? left : theme.section.left};
        right: ${right ? right : theme.section.right};
        z-index: ${zIndex ? zIndex : theme.section.zIndex};
        line-height: ${lineHeight ? lineHeight : theme.section.lineHeight};
        color: ${color ? color : theme.section.color};
        box-shadow: ${boxShadow ? boxShadow : theme.section.boxShadow};
        border-radius: ${radius ? radius : theme.section.radius};

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }

        ${props.css}
    `

    return (
        <section css={section} {...rest}>
            {children}
        </section>
    )
}

export default Section