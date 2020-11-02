import React from 'react'
import Navigation from '../components/navigation'

import { 
    H1, 
    H2,
    Main, 
    Section, 
    Row, 
    Column ,
    Divider,
    P,
    Tag,
    Code
  } from 'proxima'
  

const Home = (props) => (
    <Main>
        <Row>
          <Navigation />
          <Column padding="15px">
            <Section>
              <H1>Getting Started</H1>
              <Divider />
              <P>
                Proxima is a highly customizable UI system for rapidly developing user interfaces and experiences. It utilizes the EmotionJS library for CSS-in-JS flexibility. You can include Proxima in your React projects, which utilizes ES6 imports, to include only the components you need and are actively using. Compatible with both ReactJS and NextJS.
              </P>
            </Section>
            <Section margin="32px 0px 0px 0px">
              <H2>Installation</H2>
              <Divider />
              <Code language="javascript" data={`
npm install proxima --save
              `} />
               <Code language="javascript" data={`
yarn add proxima
              `} />
            </Section>
            <Section margin="32px 0px 0px 0px">
              <H2>Usage</H2>
              <Divider />
              <P>
                You'll need to wrap your root app in the Proxima component before using any of Proxima's components. The Proxima component also accepts props for a theme file and global style configuration.
              </P>
              <Code language="javascript" data={`
import Proxima from 'proxima'

const App = () => <Proxima>{...}</Proxima>
              `} />
              <P>You can then import any of Proxima's components right into your React project and use their props to easily customize and adjust their styles.</P>
              <Code language="javascript" data={`
import { Main, H1, P } from 'proxima'

const ExampleComponent = () => (
  <Main background="#08282c">
    <H1 color="#FFFFFF">Hello World!</H1>
    <P color="#EEEEEE" margin="10px 0px">Welcome to Proxima, a customizable UI system</P>
  </Main>
)
            `} />
            </Section>
            <Section margin="32px 0px 0px 0px">
              <H2>Theme</H2>
              <Divider />
              <P>You can easily customize all of the Layout components in Proxima using a theme file. The default theme file can be found here. You can use any of the keys found in the default theme file to create your own theme file and import it into Proxima using the <Tag>theme</Tag> prop.</P>
              <Code language="javascript" data={`
import Proxima from 'proxima'
import theme from './theme'

const App = () => <Proxima theme={theme}>{...}</Proxima>
              `} />
              
            </Section>

            <Section margin="32px 0px 0px 0px">
              <H2>Globals</H2>
              <Divider />
              <P>Global styles can also be added to Proxima using the <Tag>global</Tag> prop. A default global file can be found here. Globals are useful for importing your own custom fonts. </P>
              <Code language="javascript" data={`
import Proxima from 'proxima'
import global from './global'

const App = () => <Proxima global={global}>{...}</Proxima>
              `} />
              
              <P>Below is the default global file included with Proxima.</P>
              <Code language="css" data={`
@font-face {
  font-family: NotoSans-Regular;
  src: url(./fonts/NotoSans-Regular.ttf);
  font-display:swap;
}

@font-face {
  font-family: NotoSans-Bold;
  src: url(./fonts/NotoSans-Bold.ttf);
  font-display:swap;
}

@font-face {
  font-family: FiraSans-Light;
  src: url(./fonts/FiraSans-Light.ttf);
  font-display:swap;
}

body { margin:0; padding:0; font-family: NotoSans-Regular; }

              `} />
              
            </Section>
          </Column>
        </Row>
      </Main>
)

export default Home