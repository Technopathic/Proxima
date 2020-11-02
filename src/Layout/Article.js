/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Article = (props) => {
    const theme = useTheme()
    const {
        width,
        maxWidth,
        display,
        flexDirection,
        margin,
        padding,
        color,
        background,
        position,
        top,
        bottom,
        left,
        right,
        zIndex,
        lineHeight,
        children,
        ...rest
    } = props

    const article = css`
        width: ${width ? width : theme.article.width};
        max-width: ${maxWidth ? maxWidth : theme.article.maxWidth};
        box-sizing:border-box;
        display: ${display ? display : theme.article.display};
        flex-direction: ${flexDirection ? flexDirection : theme.article.flexDirection};
        margin: ${margin ? margin : theme.article.margin};
        padding: ${padding ? padding : theme.article.padding};
        color: ${color ? color : theme.color.textColor };
        background: ${background ? background : theme.article.background};
        position: ${position ? position : theme.article.position};
        top: ${top ? top : theme.article.top};
        bottom: ${bottom ? bottom : theme.article.bottom};
        left: ${left ? left : theme.article.left};
        right: ${right ? right : theme.article.right};
        z-index: ${zIndex ? zIndex : theme.article.zIndex};
        line-height: ${lineHeight ? lineHeight : theme.article.lineHeight};

        ${props.css}
    `;

    return (
        <article css={article} {...rest}>
            {children}
        </article>
    )
}

export default Article