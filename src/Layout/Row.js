/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const Row = (props) => {
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
        before,
        after,
        children,
        ...rest
    } = props

    const row = css`
        display:${hide ? 'none' : 'flex'};
        flex-direction:row;
        align-items: ${alignItems ? alignItems : theme.row.alignItems};
        justify-content: ${justifyContent ? justifyContent : theme.row.justifyContent};
        flex-grow: ${flexGrow ? flexGrow : theme.row.flexGrow};
        background: ${background ? background : theme.row.background};
        width: ${width ? width : theme.row.width};
        height: ${height ? height : theme.row.height};
        min-width: ${minWidth ? minWidth : theme.row.minWidth};
        min-height: ${minHeight ? minHeight : theme.row.minHeight};
        max-width: ${maxWidth ? maxWidth : theme.row.maxWidth};
        max-height: ${maxHeight ? maxHeight: theme.row.maxHeight};
        margin: ${margin ? margin : theme.row.margin};
        padding: ${padding ? padding : theme.row.padding};
        cursor: ${cursor ? cursor : theme.row.cursor};
        text-align: ${textAlign ? textAlign : theme.row.textAlign};
        box-shadow: ${boxShadow ? boxShadow : theme.row.boxShadow};
        position: ${position ? position : theme.row.position};
        top: ${top ? top : theme.row.top};
        bottom: ${bottom ? bottom : theme.row.bottom};
        left: ${left ? left : theme.row.left};
        right: ${right ? right : theme.row.right};
        z-index: ${zIndex ? zIndex : theme.row.zIndex};
        flex-wrap: ${flexWrap ? 'wrap' : theme.row.flexWrap};
        box-sizing: ${boxSizing ? boxSizing : theme.row.boxSizing};

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }
        
        ${maxWidth &&
            `@media(max-width: ${maxWidth}) {
                padding: ${paddingMobile ? paddingMobile : padding ? padding : theme.row.paddingMobile};
                margin: ${marginMobile ? marginMobile : margin ? margin : theme.row.marginMobile};
            }`
        }
        
        @media(max-width:425px) {
            display:${hideMobile ? 'none' : 'flex'};
        }

        ${props.css}
    `;

    return (
        <div css={row} {...rest}>
            {children}
        </div>
    )
}

export default Row