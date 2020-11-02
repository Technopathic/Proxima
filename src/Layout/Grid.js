/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

const Grid = (props) => {
    const theme = useTheme()
    const {
        width,
        columns,
        gap,
        padding,
        margin,
        minHeight,
        maxWidth,
        paddingMobile,
        marginMobile,
        columnsTablet,
        columnsMobile,
        children,
        ...rest
    } = props

    const grid = css`
        width: ${width ? width : theme.grid.width};
        max-width:${maxWidth ? maxWidth : theme.grid.maxWidth};
        display: grid;
        grid-template-columns: ${columns ? columns : theme.grid.columns};
        grid-gap: ${gap ? gap : theme.grid.gap};
        padding: ${padding ? padding : theme.grid.padding};
        margin:${margin ? margin : theme.grid.margin};
        box-sizing: border-box;
        min-height:${minHeight ? minHeight : theme.grid.minHeight};

        ${maxWidth &&
            `@media(max-width: ${maxWidth}) {
                padding: ${paddingMobile ? paddingMobile : padding ? padding : theme.grid.paddingMobile};
                margin: ${marginMobile ? marginMobile : margin ? margin : theme.grid.marginMobile};
            }`
        }
        
        @media(max-width:768px) {
            grid-template-columns: ${columnsTablet ? columnsTablet : columns ? columns : theme.grid.columnsTablet};
        }

        @media(max-width:425px) {
            grid-template-columns: ${columnsMobile ? columnsMobile : columns ? columns : theme.grid.columnsMobile};
        }

        ${props.css}
    `;

    return (
        <main css={grid} {...rest}>
            {children}
        </main>
    )
}

export default Grid