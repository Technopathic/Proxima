/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import SyntaxHighlighter from 'react-syntax-highlighter';

import { nord, githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Code = (props) => {
    const theme = useTheme()

    const code = css`
        font-size: 16px;
        white-space: pre-wrap;

        ${props.css}
    `;

    return (
        <SyntaxHighlighter
            customStyle={{padding: "0px 20px"}}
            style={props.light ? githubGist : nord}
            css={code}
            language={props.language || "auto"} 
            showLineNumbers={
                props.showLineNumbers ? props.showLineNumbers :
                process.env.SHOW_LINE_NUMBERS 
            }>
            {props.data}
        </SyntaxHighlighter>
    )
}

export default Code