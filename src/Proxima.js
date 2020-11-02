/** @jsx jsx */

import { Global, CacheProvider, css, jsx } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { cache } from "emotion"

import theme from './theme'
import global from './global'

const Proxima = (props) => {

    let themeObject = theme;
    if(props.theme) {
        themeObject = {...themeObject, ...props.theme}
    }
    
    return(
        <CacheProvider value={cache}>
            <ThemeProvider theme={themeObject}>
            <Global styles={css`${props.global || global}`}/>
                {props.children}
            </ThemeProvider>
        </CacheProvider>
    )
}

export default Proxima