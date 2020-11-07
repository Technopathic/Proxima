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
        display,
        flexDirection,
        justifyContent,
        alignItems,
        children,
        ...rest
    } = props

    const listItem = css`
        margin: ${margin ? margin : theme.listItem.margin};
        padding: ${padding ? padding : theme.listItem.padding};
        color: ${color ? color : theme.color.textColor };
        background: ${background ? background : theme.listItem.background};
        border-radius:${rounded ? '5px' : circle ? '50%' : radius ? radius : theme.listItem.radius};
        width: ${width ? width : theme.listItem.width};
        height: ${height ? height : theme.listItem.height};
        min-width: ${minWidth ? minWidth : theme.listItem.minWidth};
        min-height: ${minHeight ? minHeight : theme.listItem.minHeight};
        max-width: ${maxWidth ? maxWidth : theme.listItem.maxWidth};
        max-height: ${maxHeight ? maxHeight: theme.listItem.maxHeight};
        box-sizing: border-box;
        display:${display ? display : theme.listItem.display};
        flex-direction: ${flexDirection ? flexDirection : theme.listItem.flexDirection};
        justify-content: ${justifyContent ? justifyContent : theme.listItem.justifyContent};
        align-items: ${alignItems ? alignItems : theme.listItem.alignItems};

        ${props.css}
    `

    return (
        <li css={listItem} {...rest}>
            {children}
        </li>
    )
}

export default ListItem