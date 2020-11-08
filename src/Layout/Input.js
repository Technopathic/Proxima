/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

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

        ${props.css}
    `;

    

    return (
        <input css={input} {...rest} />
    )
}

export default Input