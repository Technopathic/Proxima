import React, {useState} from 'react'
import { 
    H2,
    Aside, 
    Column ,
    List,
    ListItem,
    A,
    Divider,
    Media,
    Drawer
} from 'proxima-ui'
  
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    const [show, setShow] = useState(true)
    
    return (
        <Drawer showFunc={setShow} show={show} sticky left maxWidth="300px" showBurger>
            <Aside background="#f4f5f7" width="300px" height="100vh" position="fixed">
                <Column padding="15px 15px 0px 15px" alignItems="center">
                    <Media src="https://storage.googleapis.com/virgil-f3dca.appspot.com/logo2.png" noWrapper outerWidth="30%" />
                    <H2>Proxima</H2>
                    <Divider/>
                </Column>
                <List padding="0px 15px" type="none">
                    <ListItem margin="10px 0px 0px 0px">
                        <Link to="/" style={{textDecoration:'none'}}>
                            <A href="/" 
                                padding="10px" 
                                hoverColor="#000000" 
                                hoverBackground="rgba(242, 68, 132, 0.2)" 
                                radius="5px"
                            >
                                Getting Started
                            </A>
                        </Link>
                    </ListItem>
                    <ListItem margin="10px 0px 0px 0px">
                        <Link to="/Layout" style={{textDecoration:'none'}}>
                            <A href="/Layout" 
                                padding="10px" 
                                hoverColor="#000000"
                                hoverBackground="rgba(242, 68, 132, 0.2)" 
                                radius="5px"
                            >
                                Layout
                            </A>
                        </Link>
                    </ListItem>
                    <ListItem margin="10px 0px 0px 0px">
                        <Link to="/Artboards" style={{textDecoration:'none'}}>
                            <A href="/Artboards" 
                                padding="10px" 
                                hoverColor="#000000" 
                                hoverBackground="rgba(242, 68, 132, 0.2)" 
                                radius="5px"
                            >
                                Artboards
                            </A>
                        </Link>
                    </ListItem>
                    <ListItem margin="10px 0px 0px 0px">
                        <A href="https://github.com/Technopathic/Proxima" 
                            padding="10px" 
                            hoverColor="#000000" 
                            hoverBackground="rgba(242, 68, 132, 0.2)" 
                            radius="5px"
                        >
                            Github
                        </A>
                    </ListItem>
                </List>
            </Aside>
        </Drawer>
    )
}

export default Navigation