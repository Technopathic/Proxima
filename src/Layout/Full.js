/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Full = (props) => {
    const theme = useTheme()
    const {
        background,
        padding,
        margin,
        children,
        ...rest
    } = props

    const full = css`
        background:${background ? background : theme.full.background};
        padding: ${padding ? padding : theme.full.padding};
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin: ${margin ? margin : theme.full.margin};
        margin-left: -50vw;
        margin-right: -50vw;
        flex-direction: column;
        align-items: center;
        overflow: hidden;

        ${props.css}
    `;

    return (
        <div css={full} {...rest}>
            {children}
        </div>
    )
}


export default Full