/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Column = (props) => {
    const theme = useTheme()
    const {
        hide,
        hideMobile,
        alignItems,
        justifyContent,
        flexGrow,
        background,
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        margin,
        padding,
        cursor,
        textAlign,
        boxShadow,
        position,
        top,
        bottom,
        left,
        right,
        zIndex,
        flexWrap,
        boxSizing,
        paddingMobile,
        marginMobile,
        children,
        ...rest
    } = props

    const column = css`
        display:${hide ? 'none' : 'flex'};
        flex-direction:column;
        align-items: ${alignItems ? alignItems : theme.column.alignItems};
        justify-content: ${justifyContent ? justifyContent : theme.column.justifyContent};
        flex-grow: ${flexGrow ? flexGrow : theme.column.flexGrow};
        background: ${background ? background : theme.column.background};
        width: ${width ? width : theme.column.width};
        height: ${height ? height : theme.column.height};
        min-width: ${minWidth ? minWidth : theme.column.minWidth};
        min-height: ${minHeight ? minHeight : theme.column.minHeight};
        max-width: ${maxWidth ? maxWidth : theme.column.maxWidth};
        max-height: ${maxHeight ? maxHeight: theme.column.maxHeight};
        margin: ${margin ? margin : theme.column.margin};
        padding: ${padding ? padding : theme.column.padding};
        cursor: ${cursor ? cursor : theme.column.cursor};
        text-align: ${textAlign ? textAlign : theme.column.textAlign};
        box-shadow: ${boxShadow ? boxShadow : theme.column.boxShadow};
        position: ${position ? position : theme.column.position};
        top: ${top ? top : theme.column.top};
        bottom: ${bottom ? bottom : theme.column.bottom};
        left: ${left ? left : theme.column.left};
        right: ${right ? right : theme.column.right};
        z-index: ${zIndex ? zIndex : theme.column.zIndex};
        flex-wrap: ${flexWrap ? 'wrap' : theme.column.flexWrap};
        box-sizing: ${boxSizing ? boxSizing : theme.column.boxSizing};

        ${maxWidth &&
            `@media(max-width: ${maxWidth}) {
                padding: ${paddingMobile ? paddingMobile : padding ? padding : theme.column.paddingMobile};
                margin: ${marginMobile ? marginMobile : margin ? margin : theme.column.marginMobile};
            }`
        }
        
        @media(max-width:425px) {
            display:${hideMobile ? 'none' : 'flex'};
        }

        ${props.css}
    `;

    return (
        <div css={column} {...rest}>
            {children}
        </div>
    )
}

export default Column