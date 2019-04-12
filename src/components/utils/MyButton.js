import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';

const MyButton = (props) => {
  return (
    <div>
      <Button
        href={props.link}  
        variant="contained"
        size="small"
        style={{
          background: props.bck ? props.bck : 'red',
          color: 'white'
        }}
      >
        <img 
          src={TicketIcon}
          className="iconImage"
          alt="icon_button"
        /> 
        {props.text}
      </Button>
    </div>
  );
}

export default MyButton;
