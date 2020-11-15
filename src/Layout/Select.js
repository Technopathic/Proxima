/** @jsx jsx */

import { useState, useEffect } from 'react'
import { jsx, css, useTheme } from '@emotion/react'

const Select = (props) => {
    const theme = useTheme()
    const [open, setOpen] = useState(false)
    const [prevActive, setPrevActive] = useState({value:"", text:"Select an option"})
    const [active, setActive] = useState({value:"", text:"Select an option"})

    const {
        background,
        color,
        width,
        height,
        padding,
        margin,
        border,
        radius,
        listBackground,
        listColor,
        listShadow,
        listOffset,
        listRadius,
        optionPadding,
        optionHoverBackground,
        optionHoverColor,
        optionHoverOpacity,
        iconColor,
        disabledOptionOpacity,
        onChange,
        data,
        before,
        after,
        children,
        ...rest
    } = props

    let dataSet = data || []


    useEffect(() => {
        if(active.value !== prevActive.value) {
            setPrevActive(active)
            if(onChange) {
                onChange(active.value)
            }
        }
    })

    const select = css`
        background: ${background ? background : theme.select.background};
        color: ${color ? color : theme.select.color};
        width: ${width ? width : theme.select.width};
        height: ${height ? height : theme.select.height};
        padding: ${padding ? padding : theme.select.padding};
        margin: ${margin ? margin : theme.select.margin};
        cursor: pointer;
        border: ${border ? border : theme.select.border};
        position:relative;
        box-sizing:border-box;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        border-radius: ${radius ? radius : theme.select.radius};

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }

        ${props.css}
    `;

    const selectContainer = css`
        display:flex;
        flex-direction:column;
        position:relative;
        user-select:none;
        z-index:999;
    `

    const selectList = css`
        background: ${listBackground ? listBackground : theme.select.listBackground };
        color: ${listColor ? listColor : theme.select.listColor };
        box-shadow ${listShadow ? listShadow : theme.select.listShadow};
        display:flex;
        flex-direction:column;
        position:absolute;
        top: ${listOffset ? listOffset : theme.select.listOffset};
        left:0;
        right:0;
        border-radius: ${listRadius ? listRadius : theme.select.listRadius}
        z-index:999;

        span{
            padding: ${optionPadding ? optionPadding : theme.select.optionPadding};
            cursor:pointer;

            &:hover {
                background: ${optionHoverBackground ? optionHoverBackground : theme.select.optionHoverBackground};
                color: ${optionHoverColor ? optionHoverColor : theme.select.optionHoverColor};
                opacity: ${optionHoverOpacity ? optionHoverOpacity : theme.select.optionHoverOpacity};
            }
        }
    `

    const selectIcon = css`
        border: solid ${iconColor ? iconColor : theme.select.iconColor};
        border-width: 0 4px 4px 0;
        display: inline-block;
        padding: 4px;
        transform: rotate(45deg);
        margin-right:4px;
    `

    const disabledOption = css`
        opacity: ${disabledOptionOpacity ? disabledOptionOpacity : theme.select.disabledOptionOpacity};
    `

    return (
        <div css={selectContainer} {...rest}>
            <div css={select} onClick={() => setOpen(!open)}>
                <span>{active.text}</span>
                <span css={selectIcon}></span>
            </div>
            {open &&
                <div css={selectList}>
                    <span onClick={() => {setActive({value:"", text:"Select an option"}); setOpen(false); }}>Select an option</span>
                    {dataSet.map((item, i) => (
                        item.disabled ? 
                            <span css={disabledOption} key={i}>{item.text}</span>
                            :
                            <span onClick={() => {setActive(item); setOpen(false) }} key={i}>{item.text}</span>
                        
                    ))}
                </div>
            }
        </div>
    )
}

export default Select