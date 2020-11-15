/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const P = (props) => {
    const theme = useTheme()
    const { 
        fontSize, 
        lineHeight, 
        margin, 
        padding, 
        fontWeight, 
        color, 
        wordBreak, 
        wordWrap, 
        textAlign, 
        textTransform, 
        before,
        after,
        children, 
        ...rest 
    } = props

    const p = css`
        font-size: ${fontSize ? fontSize : theme.p.fontSize};
        line-height:${lineHeight ? lineHeight : theme.p.lineHeight};
        margin: ${margin ? margin : theme.p.margin};
        padding: ${padding ? padding : theme.p.padding};
        font-weight: ${fontWeight ? fontWeight : theme.p.fontWeight};
        color: ${color ? color : theme.p.color};
        word-break: ${wordBreak ? wordBreak : theme.p.wordBreak};
        word-wrap: ${wordWrap ? wordWrap : theme.p.wordWrap};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased; 
        text-align: ${textAlign ? textAlign : theme.p.textAlign};
        text-transform: ${textTransform ? textTransform : theme.p.textTransform};

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }
        
        ${props.css}
    `;

    return (
        <div css={p} {...rest}>
            {children}
        </div>
    )
}

export default P