import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
  return (
    <Drawer
      anchor="right" 
      open={props.open}
      onClose={() => props.onClose(true)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log('Feature')}>
          Event Starts In 
        </ListItem>
        <ListItem button onClick={() => console.log('Venue NFO')}>
          Venue NFO
        </ListItem>

      </List>
    </Drawer>
  );
};

export default SideDrawer;