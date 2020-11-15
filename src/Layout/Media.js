/** @jsx jsx */

import { jsx, css, useTheme } from '@emotion/react'

import Full from './Full'

const Media = (props) => {
    const theme = useTheme()

    const {
        image,
        src,
        children,
        background,
        padding,
        margin,
        outerWidth,
        outerHeight,
        cssWrapper,
        backgroundColor,
        imagePlaceholder,
        blur,
        hardEdges,
        width,
        maxWidth,
        height,
        noWrapper,
        isLoading,
        wrapperStyle,
        iframeHeight,
        iframeWidth,
        before,
        after,
        ...rest
    } = props

    const imageItem = image || src || children

    const media = css`
        display:flex;
        flex-direction:column;
        width:${outerWidth ? outerWidth: '100%'};
        height: ${outerHeight ? outerHeight: 'auto'};
        max-width: ${maxWidth ? maxWidth : theme.media.maxWidth };
        overflow:hidden;
        margin:${margin ? margin : theme.media.margin};

        img {
            height:auto;
            width:100%;
            max-width:100%;
        }

        iframe {
            height:${iframeHeight ? iframeHeight : theme.media.iframeHeight };
            width:${iframeWidth ? iframeWidth : theme.media.iframeWidth};
        }

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }

        ${cssWrapper}
    `

    const imageLoading = css`
        width:${width ? width : '100%'};
        height:${height ? height : 'auto'};
        background-color:${backgroundColor ? backgroundColor : 'transparent'};
        background-image:url(${imagePlaceholder});
        background-size:cover;
        background-repeat: no-repeat;
        background-position:center center;
        filter: blur(${blur ? blur : '0px'});
        opacity: 1;
        transition: opacity linear 400ms;
        transform: scale(${hardEdges ? '1.1' : '1'});
        

        position:absolute;
        top:0px;
        left:0;
        z-index:2;
    `

    const imageStyle = css`
        width:${width ? width : '100%'};
        height:${height ? height : 'auto'};
        background-color:${backgroundColor ? backgroundColor : 'transparent'};
        background-image:url(${image});
        background-size:cover;
        background-repeat: no-repeat;
        background-position:center center;
        filter: blur(${blur ? blur : '0px'});
        transition: filter linear 300ms;

        &:before {
            ${before}
        }

        &:after {
            ${after}
        }
        
        ${props.css}
    `
    
    const removeBlur = css`
        filter: blur(0px);
    `

    const removeImage = css`
        opacity: 0;
    `

    const imageLayer = css`
        position:relative;
    `

    const hardEdgesStyle = css`
        width: ${width ? width : 'none'};
        height: ${height ? height: 'none'};
        overflow:hidden;
    `

    if(noWrapper) {
        if(image || imagePlaceholder) {
            return (
                <div css={hardEdges ? [imageLayer, hardEdgesStyle] : imageLayer }>
                    <div css={isLoading ? imageLoading : [imageLoading, removeImage]} {...rest} />
                    <div css={isLoading ? imageStyle : [imageStyle, removeBlur]} {...rest} />
                </div>
            )
        } else if(src) {
            return (
                <div css={media}>
                    <img src={imageItem} {...rest} />
                </div>
            )
        } else {
            return (
                <div css={media}>
                    {imageItem}
                </div>
            )
        }
    } else {
        if(image) {
            return (
                <Full style={wrapperStyle}>
                    <div css={media}>
                        <div css={imageStyle} {...rest} />
                    </div>
                </Full>
            )
        } else if(src) {
            return (
                <Full style={wrapperStyle}>
                    <div css={media}>
                        <img src={imageItem} {...rest} />
                    </div>
                </Full>
            )
        } else {
            return (
                <Full {...rest}>
                    <div css={media}>
                        {imageItem}
                    </div>
                </Full>
            )
        }
    }
}

export default Media