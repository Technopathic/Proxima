/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Divider = (props) => {
    const theme = useTheme()
    const {
        height,
        width,
        color,
        marginTop,
        marginBottom,
        ...rest
    } = props

    const divider = css`
        height:${height ? height : theme.divider.height};
        width: ${width ? width : theme.divider.width};
        background:${ color ? color : theme.divider.color};
        margin-top: ${marginTop ? marginTop : theme.divider.marginTop};
        margin-bottom: ${marginBottom ? marginBottom : theme.divider.marginBottom};

        ${props.css}
    `;

    return (
        <div css={divider} {...rest}/>
    )
}

export default Divider