/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const GalaxyS8 = (props) => {

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
        width: ${landscape ? '740px' : '360px'};
        height: ${landscape ? '360px' : '740px'};
        boxShadow: ${boxShadow ? boxShadow : 'none'};
        radius: ${radius ? radius : '0px'};
    `

    return (
        <div css={style} {...rest}>
            {children}
        </div>
    )
}

export default GalaxyS8