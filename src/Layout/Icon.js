/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Icon = (props) => {
    const theme = useTheme()
    const {
        background,
        rounded,
        circle,
        radius,
        flexDirection,
        justifyContent,
        alignItems,
        color,
        padding,
        margin,
        flexGrow,
        fill,
        boxShadow,
        hoverBackground,
        hoverColor,
        hoverOpacity,
        activeOpacity,
        children,
        ...rest
    } = props

    const icon = css`
        background: ${background ? background : theme.icon.background};
        border-radius:${rounded ? '5px' : circle ? '50%' : radius ? radius : theme.icon.radius};
        display:flex;
        flex-direction:${flexDirection ? flexDirection : theme.icon.flexDirection};
        justify-content:${justifyContent ? justifyContent : theme.icon.justifyContent};
        align-items:${alignItems ? alignItems : theme.icon.alignItems};
        color: ${color ? color : theme.icon.color};
        cursor:pointer;
        transition:all 150ms ease-in;
        user-select:none;
        padding:${padding ? padding : theme.icon.padding};
        margin: ${margin ? margin : theme.icon.margin};
        flex-grow:${flexGrow ? flexGrow : theme.icon.flexGrow};
        fill: ${fill ? fill : theme.icon.fill} !important;
        box-shadow: ${boxShadow ? shadow : theme.icon.shadow};

        &:hover {
            background: ${hoverBackground ? hoverBackground : background ? background : theme.icon.hoverBackground};
            color: ${hoverColor ? hoverColor : theme.icon.hoverColor};
            opacity:${hoverOpacity ? hoverOpacity : theme.icon.hoverOpacity};
        }

        &:active {
            opacity:${activeOpacity ? activeOpacity : theme.icon.activeOpacity};
        }

        ${props.css}
    `

    return (
        <div css={icon} {...rest}>
            {children}
        </div>
    )
}

export default Icon