/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const Input = (props) => {
    const theme = useTheme()
    const {
        height,
        border,
        background,
        margin,
        padding,
        radius,
        color,
        fontSize,
        width,
        before,
        after,
        children,
        ...rest
    } = props

    const input = css`
        height:${height ? height : theme.input.height};
        border: ${border ? border : theme.input.border};
        outline:none;
        background:${background ? background : theme.input.background};
        margin ${margin ? margin : theme.input.margin};
        padding: ${padding ? padding : theme.input.padding};
        border-radius:${radius ? radius : theme.input.radius};
        color:${color ? color : theme.input.color};
        font-size:${fontSize ? fontSize : theme.a.fontSize};
        width:${width ? width : theme.input.width}; 
        box-sizing:border-box;

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }
        
        ${props.css}
    `;

    

    return (
        <input css={input} {...rest} />
    )
}

export default Input