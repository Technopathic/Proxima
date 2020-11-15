/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const Italic = (props) => {
    const theme = useTheme()
    const {
        fontFamily,
        before,
        after,
        children,
        ...rest
    } = props

    const italic = css`
        font-style:italic;
        font-family: ${fontFamily ? fontFamily : theme.text.fontFamilyRegular };
        
        &:before {
            ${before}
        }

        &:after {
            ${after}
        }
        
        ${props.css}
    `

    return (
        <span css={italic} {...rest}>
            {children}
        </span>
    )
}

export default Italic