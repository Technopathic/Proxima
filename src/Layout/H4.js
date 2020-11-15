/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const H4 = (props) => {
    const theme = useTheme()
    const {
        fontSize,
        letterSpacing,
        lineHeight,
        margin,
        padding,
        color,
        textAlign,
        textTransform,
        fontFamily,
        fontWeight,
        before,
        after,
        children,
        ...rest
    } = props

    const h4 = css`
        font-size:${fontSize ? fontSize : theme.headingFour.fontSize};
        letter-spacing: ${letterSpacing ? letterSpacing : theme.headingFour.letterSpacing};
        line-height: ${lineHeight ? lineHeight : theme.headingFour.lineHeight};
        margin: ${margin ? margin : theme.headingFour.margin};
        padding: ${padding ? padding : theme.headingFour.padding };
        color: ${color ? color : theme.headingFour.color };
        text-align: ${textAlign ? textAlign : theme.headingFour.textAlign};
        text-transform: ${textTransform ? textTransform : theme.headingFour.textTransform};
        font-family: ${fontFamily ? fontFamily : theme.text.fontFamilyHeading };
        font-weight: ${fontWeight ? fontWeight : theme.headingFour.fontWeight};
        
        &:before {
            ${before}
        }

        &:after {
            ${after}
        }

        ${props.css}
    `;

    return (
        <h4 css={h4} {...rest}>
            {children}
        </h4>
    )
}

export default H4