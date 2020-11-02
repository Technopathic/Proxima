/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const IPhoneXS = (props) => {

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
        width: ${landscape ? '812px': '375px'};
        height: ${landscape ? '375px': '812px'};
        boxShadow: ${boxShadow ? boxShadow : 'none'};
        radius: ${radius ? radius : '0px'};
    `

    return (
        <div css={style} {...rest}>
            {children}
        </div>
    )
}

export default IPhoneXS