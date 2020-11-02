/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const ListItem = (props) => {
    const theme = useTheme()
    const {
        margin,
        padding,
        color,
        background,
        rounded,
        circle,
        radius,
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        children,
        ...rest
    } = props

    const listItem = css`
        margin: ${margin ? margin : theme.listitem.margin};
        padding: ${padding ? padding : theme.listitem.padding};
        color: ${color ? color : theme.color.textColor };
        background: ${background ? background : theme.listitem.background};
        border-radius:${rounded ? '5px' : circle ? '50%' : radius ? radius : theme.listitem.radius};
        width: ${width ? width : theme.listitem.width};
        height: ${height ? height : theme.listitem.height};
        min-width: ${minWidth ? minWidth : theme.listitem.minWidth};
        min-height: ${minHeight ? minHeight : theme.listitem.minHeight};
        max-width: ${maxWidth ? maxWidth : theme.listitem.maxWidth};
        max-height: ${maxHeight ? maxHeight: theme.listitem.maxHeight};
        box-sizing: border-box;

        ${props.css}
    `

    return (
        <li css={listItem} {...rest}>
            {children}
        </li>
    )
}

export default ListItem