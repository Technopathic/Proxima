/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Bold = (props) => {
    const theme = useTheme()
    const {
        fontFamily,
        children,
        ...rest
    } = props

    const bold = css`
        font-weight:bold;
        font-family: ${fontFamily ? fontFamily : theme.text.fontFamilyBold };

        ${props.css}
    `

    return (
        <span css={bold} {...rest}>
            {children}
        </span>
    )
}

export default Bold