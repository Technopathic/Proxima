/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const IPadPro = (props) => {

    const {
        scale,
        background,
        boxShadow,
        radius,
        landscape,
        children,
        ...rest
    } = props

    const style = css`
        background: ${background ? background : '#DDDDDD'};
        transform: scale(${scale ? scale : '1'});
        width: ${landscape ? '1366px' : '1024px'};
        height: ${landscape ? '1024px' : '1366px'};
        boxShadow: ${boxShadow ? boxShadow : 'none'};
        radius: ${radius ? radius : '0px'};
    `

    return (
        <div css={style} {...rest}>
            {children}
        </div>
    )
}

export default IPadPro