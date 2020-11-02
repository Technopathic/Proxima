/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

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

        ${props.css}
    `;

    return (
        <div css={container} {...rest}>
            {children}
        </div>
    )
}


export default Container