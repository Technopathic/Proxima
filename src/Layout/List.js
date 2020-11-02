/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const List = (props) => {
    const theme = useTheme()
    const {
        type,
        maxWidth,
        margin,
        padding,
        flexDirection,
        justifyContent,
        alignItems,
        flexWrap,
        numbers,
        points,
        children,
        ...rest
    } = props

    const listNum = css`
        list-style-type: ${type ? type : theme.list.numbersType};
        width:100%;
        max-width: ${maxWidth ? maxWidth : theme.list.maxWidth};
        box-sizing:border-box;
        margin: ${margin ? margin : theme.list.margin};
        padding: ${padding ? padding : theme.list.padding};
        display:flex;
        flex-direction: ${flexDirection ? flexDirection : theme.list.flexDirection};
        justify-content: ${justifyContent ? justifyContent : theme.list.justifyContent};
        align-items: ${alignItems ? alignItems : theme.list.alignItems};
        flex-wrap: ${flexWrap ? flexWrap : theme.list.flexWrap};

        ${props.css}
    `

    const list = css`
        list-style-type: ${type ? type : theme.list.pointsType};
        width:100%;
        max-width: ${maxWidth ? maxWidth : theme.list.maxWidth};
        box-sizing:border-box;
        margin: ${margin ? margin : theme.list.margin};
        padding: ${padding ? padding : theme.list.padding};
        display:flex;
        flex-direction: ${flexDirection ? flexDirection : theme.list.flexDirection};
        justify-content: ${justifyContent ? justifyContent : theme.list.justifyContent};
        align-items: ${alignItems ? alignItems : theme.list.alignItems};
        flex-wrap: ${flexWrap ? flexWrap : theme.list.flexWrap};

        ${props.css}
    `

    if(numbers) {
        return (
            <ol css={listNum} {...rest}>
                {children}
            </ol>
        )
    } else if(points) {
        return (
            <ul css={list} {...rest}>
                {children}
            </ul>
        )
    } else {
        return (
            <ul css={list} {...rest}>
                {children}
            </ul>
        )
    }
}

export default List