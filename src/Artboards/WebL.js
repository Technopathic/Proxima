/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

const WebM = (props) => {

    const {
        scale,
        background,
        boxShadow,
        radius,
        portrait,
        children,
        ...rest
    } = props

    const style = css`
        background: ${background ? background : '#DDDDDD'};
        transform: scale(${scale ? scale : '1'});
        width: ${portrait ? '900px': '1440px'};
        height: ${portrait ? '1440px': '900px'};
        boxShadow: ${boxShadow ? boxShadow : 'none'};
        radius: ${radius ? radius : '0px'};
    `

    return (
        <div css={style} {...rest}>
            {children}
        </div>
    )
}

export default WebM