import React, { useState } from 'react'
import Navigation from '../components/navigation'

import { 
    H1, 
    Main, 
    Section, 
    Row, 
    Column ,
    Divider,
    P,
    Select,
    IPhoneXS,
    GalaxyS8,
    IPadAir,
    IPadPro,
    WebM,
    WebL,
    WebXL
  } from 'proxima-ui'
  

const Artboards = (props) => {
  const [artView, setArtView] = useState('iPhoneXS')

  const renderArtView = () => {
    if(artView === 'iPhoneXS') {
      return <IPhoneXS></IPhoneXS>
    } else if(artView === 'GalaxyS8') {
      return <GalaxyS8></GalaxyS8>
    } else if(artView === 'iPadAir') {
      return <IPadAir></IPadAir>
    } else if(artView === 'iPadPro') {
      return <IPadPro></IPadPro>
    } else if(artView === 'WebM') {
      return <WebM></WebM>
    } else if(artView === 'WebL') {
      return <WebL></WebL>
    } else if(artView === 'WebXL') {
      return <WebXL></WebXL>
    }
  }

  return(
    <Main>
      <Row>
        <Navigation />
        <Column padding="15px">
          <Section>
              <H1>Artboards</H1>
              <Divider />
              <P>
                  Artboards are helpful components which mimic the resolution of common desktop, tablet, and mobile devices. These make it easy to quickly prototype user interfaces for many various devices. Think of each artboard as a container for your UI components to create a visual representation of your project flow.
              </P>
          </Section>
          <Section margin="15px 0px">
            <Select onChange={setArtView} data={[
              {value: "iPhoneXS", text: "iPhoneXS"},
              {value: "GalaxyS8", text: "GalaxyS8"},
              {value: "iPadAir", text: "iPadAir"},
              {value: "iPadPro", text: "iPadPro"},
              {value: "WebM", text: "WebM"},
              {value: "WebL", text: "WebL"},
              {value: "WebXL", text: "WebXL"}
            ]} />
          </Section>
          <Column margin="15px 0px">
            {renderArtView()}
          </Column>
        </Column>
      </Row>
    </Main>
  )
}

export default Artboards