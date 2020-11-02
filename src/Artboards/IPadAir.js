/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const IPadAir = (props) => {

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
        width: ${landscape ? '1024px' : '768px'};
        height: ${landscape ? '768px' : '1024px'};
        boxShadow: ${boxShadow ? boxShadow : 'none'};
        radius: ${radius ? radius : '0px'};
    `

    return (
        <div css={style} {...rest}>
            {children}
        </div>
    )
}

export default IPadAir