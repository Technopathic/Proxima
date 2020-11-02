/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Main = (props) => {
    const theme = useTheme()
    const {
        background,
        flexDirection,
        padding,
        margin,
        alignItems,
        justifyContent,
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        paddingMobile,
        marginMobile,
        children,
        ...rest
    } = props

    const main = css`
        background: ${background ? background : theme.main.background};
        display:flex;
        flex-direction:${flexDirection ? flexDirection : theme.main.flexDirection};
        flex-grow:1;
        padding: ${padding ? paddding : theme.main.padding};
        margin: ${margin ? margin : theme.main.margin};
        position:relative;
        align-items: ${alignItems ? alignItems : theme.main.alignItems};
        justify-content: ${justifyContent ? justifyContent : theme.main.justifyContent};
        width: ${width ? width : theme.main.width};
        height: ${height ? height : theme.main.height};
        min-width: ${minWidth ? minWidth : theme.main.minWidth};
        min-height: ${minHeight ? minHeight : theme.main.minHeight};
        max-width: ${maxWidth ? maxWidth : theme.main.maxWidth};
        max-height: ${maxHeight ? maxHeight: theme.main.maxHeight};
        box-sizing:border-box;
        
        ${maxWidth &&
            `@media(max-width: ${maxWidth}) {
                padding: ${paddingMobile ? paddingMobile : padding ? padding : theme.main.paddingMobile};
                margin: ${marginMobile ? marginMobile : margin ? margin : theme.main.marginMobile};
            }`
        }

        ${props.css}
    `;

    return (
        <main css={main} {...rest}>
            {children}
        </main>
    )
}

export default Main