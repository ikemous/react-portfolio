import React from "react";
import {Link} from "react-router-dom";
import {Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

function MobileNavBar({children,visible, setVisible})
{
    return(
        <>
            
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    onHide={setVisible}
                    inverted
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <Menu.Item as={Link} to="/about" onClick={setVisible}>
                        <Icon name='user' />
                        About
                    </Menu.Item>
                    <Menu.Item as={Link} to="/portfolio" onClick={setVisible}>
                        <Icon name='book' />
                        Games
                    </Menu.Item>
                    <Menu.Item as={Link} to="/contact" onClick={setVisible}>
                        <Icon name='camera' />
                        Channels
                    </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={visible}>
                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </>
    );
    
};

export default MobileNavBar;