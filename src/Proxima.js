/** @jsx jsx */

import { Global, CacheProvider, css, jsx } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { cache } from "emotion"

import theme from './theme'
import global from './global'

function Proxima(props) {

    let themeObject = theme;

    const isObject = (item) => {
        return (item && typeof item === 'object' && !Array.isArray(item));
    }
      
    const mergeDeep = (target, ...sources) => {
        if (!sources.length) return target;
        const source = sources.shift();
      
        if (isObject(target) && isObject(source)) {
          for (const key in source) {
            if (isObject(source[key])) {
              if (!target[key]) Object.assign(target, { [key]: {} });
              mergeDeep(target[key], source[key]);
            } else {
              Object.assign(target, { [key]: source[key] });
            }
          }
        }
      
        return mergeDeep(target, ...sources);
    }

    if(props.theme) {
        themeObject = mergeDeep(themeObject, props.theme)
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