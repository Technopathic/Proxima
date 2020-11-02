/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Pre = (props) => {
    const theme = useTheme()
    const {
        background,
        fontFamily,
        fontSize,
        margin,
        padding,
        whiteSpace,
        color,
        lineHeight,
        letterSpacing,
        children,
        ...rest
    } = props

    const pre = css`
        background: ${background ? background : theme.pre.background};
        font-family: ${fontFamily ? fontFamily : theme.text.fontFamilyRegular};
        font-size: ${fontSize ? fontSize : theme.pre.fontSize};
        margin: ${margin ? margin : theme.pre.margin};
        padding: ${padding ? padding : theme.pre.padding};
        white-space: ${whiteSpace ? whiteSpace : theme.pre.whiteSpace};
        color: ${color ? color : theme.pre.color};
        line-height: ${lineHeight ? lineHeight : theme.pre.lineHeight};
        letter-spacing: ${letterSpacing ? letterSpacing : theme.pre.letterSpacing};

        ${props.css}
    `;

    return (
        <pre css={pre} {...rest}>
            {children}
        </pre>
    )
}

export default Pre