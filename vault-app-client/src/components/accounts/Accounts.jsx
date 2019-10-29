import React from 'react';
import { Spinner, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, ButtonGroup } from 'reactstrap';

const Accounts = (props) => {
  return (
    <ListGroup>
      <ListGroupItem active>
      <span class="onValue">
        All Accounts
        </span>
        <h2 class ="mainValue">{props.value}</h2>
        <p class="percent">+ 1.97%</p>
        
      </ListGroupItem>
      <ListGroupItem>

      

        
        
        {/* <h3>Buttons </h3> */}
      <ListGroup>
        <ListGroupItem active tag="button" action>Summary</ListGroupItem>
        <ListGroupItem tag="button" action>+ New Work Order</ListGroupItem>
        <ListGroupItem tag="button" action>Documents</ListGroupItem>
        
      </ListGroup>
        
      </ListGroupItem>
      
    </ListGroup>
  );
}

export default Accounts;