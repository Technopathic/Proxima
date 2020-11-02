/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Italic = (props) => {
    const theme = useTheme()
    const {
        fontFamily,
        children,
        ...rest
    } = props

    const italic = css`
        font-style:italic;
        font-family: ${fontFamily ? fontFamily : theme.text.fontFamilyRegular };

        ${props.css}
    `

    return (
        <span css={italic} {...rest}>
            {children}
        </span>
    )
}

export default Italic