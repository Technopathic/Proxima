<p align="center">
  <img width="800" height="250" src="https://storage.googleapis.com/virgil-f3dca.appspot.com/proximasocial2.png">
</p>

# Proxima 

[Documentation](#)

Proxima is my own UI System for making web and mobile interfaces easy to prototype. 

I made Proxima so I could avoid repetitively rewriting design code throughout all of my projects. My UI System utilizes EmotionJS for CSS-in-JS functionality and is compatible with both React and NextJS projects. 

Proxima is my long-term on-going project. The UI system (Layout primitives) are just the base of a collection of components I am continually adding to Proxima. My goal is to have a vast number of design components and experiments in the Proxima library, which can be imported on a need-to-use basis. 


## Getting Started
You can install Proxima into your React or NextJS project by doing the following:
```
npm install proxima --save
```

You'll need to wrap your root app in the Proxima component before using any of Proxima's components. The Proxima component also accepts props for a theme file and global style configuration.

```
import Proxima from 'proxima'

const App = () => <Proxima>{...}</Proxima>
```

You can then import any of Proxima's components right into your project and use their props to easily customize and adjust their styles.
```
import { Main, H1, P } from 'proxima'

const ExampleComponent = () => (
  <Main background="#08282c">
    <H1 color="#FFFFFF">Hello World!</H1>
    <P color="#EEEEEE" margin="10px 0px">Welcome to Proxima, a customizable UI system</P>
  </Main>
)
```

## How to Contribute?
If you'd like to contribute, you can begin by using the Proxima UI system and specifying that your components have been built by Proxima. If you'd like to have your Proxima-based project listed here, feel free to make a pull request. 

## Technologies
* ReactJS
* Emotion
* Axios
* React-Syntax-Highlighter

## License
MIT