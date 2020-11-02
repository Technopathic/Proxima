/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Button = (props) => {
    const theme = useTheme()
    const {
        background,
        rounded,
        pill,
        radius,
        justifyContent,
        alignItems,
        height,
        width,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        color,
        textTransform,
        padding,
        margin,
        boxShadow,
        hoverBackground,
        hoverColor,
        hoverOpacity,
        activeOpacity,
        children,
        ...rest
    } = props

    const button = css`
        background: ${background ? background : theme.button.background};
        border-radius: ${rounded ? '5px' : pill ? '25%' : radius ? radius : theme.button.radius};
        display:flex;
        flex-direction:row;
        justify-content:${justifyContent ? justifyContent : theme.button.justifyContent};
        align-items: ${alignItems ? alignItems : theme.button.alignItems};
        height:${height ? height : theme.button.height};
        width: ${width ? width : theme.button.width};
        min-width: ${minWidth ? minWidth : theme.button.minWidth};
        min-height: ${minHeight ? minHeight : theme.button.minHeight};
        max-width: ${maxWidth ? maxWidth : theme.button.maxWidth};
        max-height: ${maxHeight ? maxHeight: theme.button.maxHeight};
        color: ${color ? color : theme.button.color};
        text-transform: ${textTransform ? textTransform : theme.button.textTransform};
        cursor:pointer;
        transition:all 150ms ease-in;
        user-select:none;
        padding: ${padding ? padding : theme.button.padding};
        margin: ${margin ? margin : theme.button.margin};
        box-sizing:border-box;
        box-shadow: ${boxShadow ? boxShadow : theme.button.boxShadow};

        &:hover {
            background: ${hoverBackground ? hoverBackground : background ? background : theme.button.hoverBackground};
            color: ${hoverColor ? hoverColor : theme.button.hoverColor};
            opacity:${hoverOpacity ? hoverOpacity : theme.button.hoverOpacity};
        }

        &:active {
            opacity:${activeOpacity ? activeOpacity : theme.button.activeOpacity};
        }

        ${props.css}
    `

    return (
        <div css={button} {...rest}>
            {children}
        </div>
    )
}

export default Button