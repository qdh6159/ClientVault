import React from 'react';
import { Badge, Spinner, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, ButtonGroup } from 'reactstrap';

const AccountDetail = (props) => {
  return (
    <ListGroup>
      <ListGroupItem active>
      <span class="onValue">
        All Accounts
        </span>
        <h2 class ="mainValue">{props.value}</h2>
        <p class="percent">+ 1.97%  <h5 class="privateClient"> <Badge size="sm" color="secondary">Private Client</Badge></h5></p> 
        
      </ListGroupItem>
      <ListGroupItem>

      

        
        
        {/* <h3>Buttons </h3> */}
      <ListGroup>
        <ListGroup>
      <ListGroupItem >
        <ListGroupItemHeading>Recent Activity</ListGroupItemHeading>
        <ListGroupItemText>
        -Bought 500 shares of AAPL 
        </ListGroupItemText>        
        {/* <hr className="my-2" /> */}
        <ListGroupItemText>
        - Sold 400 shares of FB
        </ListGroupItemText>   
        
        
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Contact & Personal Info</ListGroupItemHeading>
        <ListGroupItemText>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Notes</ListGroupItemHeading>
        <ListGroupItemText>
        QH: 12-13-2018; Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
        
      </ListGroup>
        
      </ListGroupItem>
      <Button color="primary" size="lg" block>Edit</Button>
    <Button color="success" size="lg" block>+ New Appointment</Button>
    <Button color="secondary" size="lg" block>Correspondence</Button>
    </ListGroup>
    
  );
}

export default AccountDetail;