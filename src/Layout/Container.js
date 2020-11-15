/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const Container = (props) => {
    const theme = useTheme()
    const {
        flexDirection,
        minHeight,
        width,
        maxWidth,
        margin,
        padding,
        background,
        before,
        after,
        children,
        ...rest
    } = props

    const container = css`
        display:flex;
        flex-direction: ${flexDirection ? flexDirection : theme.container.flexDirection};
        min-height: ${minHeight ? minHeight : theme.container.minHeight};
        width: ${width ? width : theme.container.width};
        max-width: ${maxWidth ? maxWidth : theme.container.maxWidth};
        margin: ${margin ? margin : theme.container.margin};
        padding: ${padding ? padding : theme.container.padding};
        background: ${background ? background : theme.container.background };

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }
        
        ${props.css}
    `;

    return (
        <div css={container} {...rest}>
            {children}
        </div>
    )
}


export default Container