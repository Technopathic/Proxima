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
        width: ${portrait ? '800px': '1280px'};
        height: ${portrait ? '1280px': '800px'};
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