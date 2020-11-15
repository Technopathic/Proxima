/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const Blockquote = (props) => {
    const theme = useTheme()
    const {
        fontFamily,
        before,
        after,
        children,
        ...rest
    } = props

    const blockquote = css`
        font-family: ${fontFamily ? fontFamily : theme.text.fontFamilyRegular };
        border-left: 3px solid rgba(0, 0, 0, 0.8);
        font-style: italic;
        font-weight: 400;
        letter-spacing: 0.16px;
        letter-spacing: 0.02rem;
        padding-left: 15px;
        margin-bottom: 20px;
        font-size: 1.2em;
        line-height: 1.9em;
        margin-top: 20px;
        box-sizing: border-box;

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }

        ${props.css}
    `

    return (
        <div css={blockquote} {...rest}>
            {children}
        </div>
    )
}

export default Blockquote