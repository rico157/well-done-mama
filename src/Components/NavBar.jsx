import '../styles/NavBar.css';
import logo from '../assets/logo.png';
import React, { useState } from 'react';
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon
} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';

export default function NavBar(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="NavBar">
      <img src={logo} alt="logo" className="head-logo" />

      {/* <Button onClick={() => setOpen(!isOpen)}>
        <MenuIcon style={{ fontSize: '50px' }} />
      </Button> */}
      <Drawer anchor="right" open={isOpen}>
        <Button onClick={() => setOpen(!isOpen)}>
          Close
          {/* <CloseIcon  /> */}
        </Button>
        <Divider />

        <List component="nav" aria-label="main mailbox folders">
          <ListItem
            button
            // selected={selectedIndex === 0}
            // onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem
            button
            // selected={selectedIndex === 1}
            // onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
