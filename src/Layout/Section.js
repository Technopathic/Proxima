/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Section = (props) => {
    const theme = useTheme()
    const {
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
        children,
        ...rest
    } = props

    const section = css`
        width:100%;
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

        ${props.css}
    `

    return (
        <section css={section} {...rest}>
            {children}
        </section>
    )
}

export default Section