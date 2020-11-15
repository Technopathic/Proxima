/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const Tag = (props) => {
    const theme = useTheme()
    const {
        background,
        radius,
        color,
        padding,
        margin,
        fontSize,
        before,
        after,
        children,
        ...rest
    } = props

    const tag = css`
        background:${background ? background : theme.tag.background};
        border-radius:${radius ? radius : theme.tag.radius};
        color:${color ? color : theme.tag.color};
        box-sizing:border-box;
        padding: ${padding ? padding : theme.tag.padding};
        margin: ${margin ? margin : theme.tag.margin};
        font-size:${fontSize ? fontSize : theme.tag.fontSize};

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }

        ${props.css}
    `;

    return (
        <span css={tag} {...rest}>
            {children}
        </span>
    )
}

export default Tag