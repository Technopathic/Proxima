/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Tag = (props) => {
    const theme = useTheme()
    const {
        background,
        radius,
        color,
        padding,
        margin,
        fontSize,
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

        ${props.css}
    `;

    return (
        <span css={tag} {...rest}>
            {children}
        </span>
    )
}

export default Tag