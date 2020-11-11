/** @jsx jsx */

import React from 'react'
import { Global, CacheProvider, css, jsx } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { cache } from "emotion"

import theme from './theme'
import global from './global'

class Proxima extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  isObject = (item) => {
      return (item && typeof item === 'object' && !Array.isArray(item));
  }
    
  mergeDeep = (target, ...sources) => {
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
  
  render() {
    let themeObject = theme
    if(this.props.theme) {
      themeObject = mergeDeep(themeObject, this.props.theme)
    }

    return(
      <CacheProvider value={cache}>
          <ThemeProvider theme={themeObject}>
          <Global styles={css`${this.props.global || global}`}/>
              {this.props.children}
          </ThemeProvider>
      </CacheProvider>
    )
  }
}

export default Proxima