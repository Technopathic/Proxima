/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

export const Table = (props) => {
    const theme = useTheme()
    const {
        border,
        borderCollapse,
        borderSpacing,
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        margin,
        padding,
        color,
        cellWidth,
        cellHeight,
        children,
        data,
        ...rest
    } = props
    
    const table = css`
        border: ${border ? border : theme.table.border};
        border-collapse: ${borderCollapse ? borderCollapse : theme.table.borderCollapse};
        border-spacing: ${borderSpacing ? borderSpacing : theme.table.borderSpacing};
        width: ${width ? width : theme.table.width};
        height: ${height ? height : theme.table.height};
        min-width: ${minWidth ? minWidth : theme.table.minWidth};
        min-height: ${minHeight ? minHeight : theme.table.minHeight};
        max-width: ${maxWidth ? maxWidth : theme.table.maxWidth};
        max-height: ${maxHeight ? maxHeight: theme.table.maxHeight};
        margin: ${margin ? margin : theme.table.margin};
        padding: ${padding ? padding : theme.table.padding};
        color ${color ? color : theme.table.color};

        thead {

        }

        tbody {

        }

        tr {
            
        }

        th {
            border: ${border ? border : theme.table.border};
            padding: ${padding ? padding : theme.table.padding};
            color ${color ? color : theme.table.color};
            width: ${cellWidth ? cellWidth : theme.table.cellWidth};
            height: ${cellHeight ? cellHeight : theme.table.cellHeight};
        }

        td {
            border: ${border ? border : theme.table.border};
            padding: ${padding ? padding : theme.table.padding};
            color: ${color ? color : theme.color.textColor};
            width: ${cellWidth ? cellWidth : theme.table.cellWidth};
            height: ${cellHeight ? cellHeight : theme.table.cellHeight};
        }
        ${props.css}
    `
    if(data) {
        return (
            <table css={table} {...rest}>
                {data.head ?
                    <thead>
                        {data.head.map((head, i) => (
                            <tr key={i}>
                                {head.row.map((item, j) => (
                                    <th>{item}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    : null
                }
                {data.body ?
                    <tbody>
                        {data.body.map((body, i) => (
                            <tr key={i}>
                                {body.row.map((item, j) => (
                                    <td>{item}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    : null
                }
            </table>
        )
    }
    
    return (
        <table css={table} {...rest}>
            {children}
        </table>
    )
}

export const Thead = (props) => {
    const theme = useTheme()
    const {
        background,
        border,
        fontWeight,
        fontSize,
        color,
        children,
        ...rest
    } = props
    
    const thead = css`
        border: ${border ? border : 'none'};
        background: ${background ? background : 'transparent'};
        fontWeight: ${fontWeight ? fontWeight : 'normal'};
        fontSize: ${fontSize ? fontSize : '18px'};
        color ${color ? color : '#000000'};

        ${props.css}
    `

    return (
        <thead css={thead} {...rest}>
            {children}
        </thead>
    )
}

export const Tbody = (props) => {
    const theme = useTheme()
    const {
        background,
        border,
        fontWeight,
        fontSize,
        color,
        children,
        ...rest
    } = props
    
    const tbody = css`
        border: ${border ? border : 'none'};
        background: ${background ? background : 'transparent'};
        fontWeight: ${fontWeight ? fontWeight : 'normal'};
        fontSize: ${fontSize ? fontSize : '18px'};
        color ${color ? color : '#000000'};

        ${props.css}
    `

    return (
        <tbody css={tbody} {...rest}>
            {children}
        </tbody>
    )
}


export const Th = (props) => {
    const theme = useTheme()
    const {
        background,
        border,
        fontWeight,
        fontSize,
        color,
        children,
        ...rest
    } = props
    
    const th = css`
        border: ${border ? border : 'none'};
        background: ${background ? background : 'transparent'};
        fontWeight: ${fontWeight ? fontWeight : 'normal'};
        fontSize: ${fontSize ? fontSize : '18px'};
        color ${color ? color : '#000000'};

        ${props.css}
    `

    return (
        <th css={th} {...rest}>
            {children}
        </th>
    )
}


export const Tr = (props) => {
    const theme = useTheme()
    const {
        background,
        border,
        fontWeight,
        fontSize,
        color,
        children,
        ...rest
    } = props
    
    const tr = css`
        border: ${border ? border : 'none'};
        background: ${background ? background : 'transparent'};
        fontWeight: ${fontWeight ? fontWeight : 'normal'};
        fontSize: ${fontSize ? fontSize : '18px'};
        color ${color ? color : '#000000'};

        ${props.css}
    `

    return (
        <tr css={tr} {...rest}>
            {children}
        </tr>
    )
}

export const Td = (props) => {
    const theme = useTheme()
    const {
        background,
        border,
        fontWeight,
        fontSize,
        color,
        children,
        ...rest
    } = props
    
    const td = css`
        border: ${border ? border : 'none'};
        background: ${background ? background : 'transparent'};
        fontWeight: ${fontWeight ? fontWeight : 'normal'};
        fontSize: ${fontSize ? fontSize : '18px'};
        color ${color ? color : '#000000'};

        ${props.css}
    `

    return (
        <td css={td} {...rest}>
            {children}
        </td>
    )
}