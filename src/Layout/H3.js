/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const H3 = (props) => {
    const theme = useTheme()
    const {
        fontSize,
        lineHeight,
        letterSpacing,
        margin,
        padding,
        color,
        textAlign,
        textTransform,
        fontFamily,
        fontWeight,
        children,
        ...rest
    } = props

    const h3 = css`
        font-size:${fontSize ? fontSize : theme.headingThree.fontSize};
        line-height: ${lineHeight ? lineHeight : theme.headingThree.lineHeight};
        letter-spacing: ${letterSpacing ? letterSpacing : theme.headingThree.letterSpacing};
        margin: ${margin ? margin : theme.headingThree.margin};
        padding: ${padding ? padding: theme.headingThree.padding};
        color: ${color ? color : theme.headingThree.color };
        text-align: ${textAlign ? textAlign : theme.headingThree.textAlign };
        text-transform: ${textTransform ? textTransform : theme.headingThree.textTransform};
        font-family: ${fontFamily ? fontFamily : theme.text.fontFamilyHeading };
        font-weight: ${fontWeight ? fontWeight : theme.headingThree.fontWeight};

        ${props.css}
    `;

        
    return (
        <h3 css={h3} {...rest}>
            {children}
        </h3>
    )
}

export default H3