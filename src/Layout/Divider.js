/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const Divider = (props) => {
    const theme = useTheme()
    const {
        height,
        width,
        color,
        marginTop,
        marginBottom,
        before,
        after,
        ...rest
    } = props

    const divider = css`
        height:${height ? height : theme.divider.height};
        width: ${width ? width : theme.divider.width};
        background:${ color ? color : theme.divider.color};
        margin-top: ${marginTop ? marginTop : theme.divider.marginTop};
        margin-bottom: ${marginBottom ? marginBottom : theme.divider.marginBottom};

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }
        
        ${props.css}
    `;

    return (
        <div css={divider} {...rest}/>
    )
}

export default Divider