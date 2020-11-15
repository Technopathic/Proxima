/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const Bold = (props) => {
    const theme = useTheme()
    const {
        fontFamily,
        before,
        after,
        children,
        ...rest
    } = props

    const bold = css`
        font-weight:bold;
        font-family: ${fontFamily ? fontFamily : theme.text.fontFamilyBold };
        
        &:before {
            ${before}
        }

        &:after {
            ${after}
        }
        
        ${props.css}
    `

    return (
        <span css={bold} {...rest}>
            {children}
        </span>
    )
}

export default Bold