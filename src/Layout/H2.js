/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const H2 = (props) => {
    const theme = useTheme()
    const {
        letterSpacing,
        fontSize,
        lineHeight,
        padding,
        color,
        margin,
        textAlign,
        textTransform,
        fontFamily,
        fontWeight,
        before,
        after,
        children,
        ...rest
    } = props

    const h2 = css`
        letter-spacing: ${letterSpacing ? letterSpacing : theme.headingTwo.letterSpacing};
        font-size:${fontSize ? fontSize : theme.headingTwo.fontSize};
        line-height: ${lineHeight ? lineHeight : theme.headingTwo.lineHeight};
        padding:${padding ? padding : theme.headingTwo.padding};
        color: ${color ? color : theme.headingTwo.color };
        margin: ${margin ? margin : theme.headingTwo.margin};
        text-align: ${textAlign ? textAlign : theme.headingTwo.textAlign};
        text-transform: ${textTransform ? textTransform : theme.headingTwo.textTransform};
        font-family: ${fontFamily ? fontFamily : theme.text.fontFamilyHeading };
        font-weight: ${fontWeight ? fontWeight : theme.headingTwo.fontWeight};

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }
        
        ${props.css}
    `;

    return (
        <h2 css={h2} {...rest}>
            {children}
        </h2>
    )
}

export default H2