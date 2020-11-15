/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const H1 = (props) => {
    const theme = useTheme()
    const {
        fontSize,
        letterSpacing,
        lineHeight,
        color,
        margin,
        padding,
        textAlign,
        textTransform,
        fontFamily,
        fontWeight,
        before,
        after,
        children,
        ...rest
    } = props

    const h1 = css`
        font-size:${fontSize ? fontSize : theme.headingOne.fontSize};
        letter-spacing: ${letterSpacing ? letterSpacing : theme.headingOne.letterSpacing};
        line-height: ${lineHeight ? lineHeight : theme.headingOne.lineHeight};
        color: ${color ? color : theme.headingOne.color };
        margin: ${margin ? margin : theme.headingOne.margin};
        padding: ${padding ? padding : theme.headingOne.padding };
        text-align: ${textAlign ? textAlign : theme.headingOne.textAlign};
        text-transform: ${textTransform ? textTransform : theme.headingOne.textTransform};
        font-family: ${fontFamily ? fontFamily : theme.text.fontFamilyHeading };
        font-weight: ${fontWeight ? fontWeight : theme.headingOne.fontWeight};

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }
        
        ${props.css}
    `;

    return (
        <h1 css={h1} {...rest}>
            {children}
        </h1>
    )
}

export default H1