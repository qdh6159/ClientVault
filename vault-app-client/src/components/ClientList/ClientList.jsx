import React from 'react';
// import plantsContainer from './plantsContainer/plantsContainer'
import BasicCardExample from '../Cards/Card'
import MoreModal from '../MoreComponent'
import {  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


  
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardImg,
//   CardBody,
//   CardFooter,
//   Button,
//   Container
// } from "shards-react";

function ClientList(props){

  const clients = props.clients.map(function(client){
      return (
        <li key={client._id}> 
          <Card >
          <CardHeader tag="h3">{client.name}</CardHeader>
          <CardBody>
            <CardTitle>Portfolio Value: {client.value}</CardTitle>
            <CardTitle>Last contact: 2018-05-23</CardTitle>  
          </CardBody>
          <CardFooter>
            <Button>View Details</Button>
          </CardFooter>
        </Card>
        </li>)
    })
  
    return (
      
      <ul class="plantList">
        {clients}
        {/* <Card >
          <CardHeader tag="h3">Jane Low</CardHeader>
          <CardBody>
            <CardTitle>Portfolio Value: $50,740.23</CardTitle>
            <CardTitle>Last contact: 2018-05-23</CardTitle>  
          </CardBody>
          <CardFooter>
            <Button>View Details</Button>
          </CardFooter>
        </Card>

      <Card>
        <CardHeader tag="h3">Bobby Jones</CardHeader>
        <CardBody>
          <CardTitle>Portfolio Value: $50,740.23</CardTitle>
          <CardTitle>Last contact: 2018-05-23</CardTitle>
          
          
        </CardBody>
        <CardFooter>
          <Button>View Details</Button>
        </CardFooter>
      </Card>

      <Card>
      <CardHeader tag="h3">Billy West</CardHeader>
        <CardBody>
          <CardTitle>Portfolio Value: $50,740.23</CardTitle>
          <CardTitle>Last contact: 2018-05-23</CardTitle>
          
          
        </CardBody>
        <CardFooter>
          <Button>View Details</Button>
        </CardFooter>
      </Card>

      <Card>
      <CardHeader tag="h3">Brandon Livingston</CardHeader>
        <CardBody>
          <CardTitle>Portfolio Value: $50,740.23</CardTitle>
          <CardTitle>Last contact: 2018-05-23</CardTitle>
          
          
        </CardBody>
        <CardFooter>
          <Button>View Details</Button>
        </CardFooter>
      </Card> */}
      </ul>
     
      )
}


export default ClientList

{/* <li key={plant._id}>
<Card small={true} style={{ maxWidth: "250px" }}>
<CardHeader></CardHeader>
<CardImg src={plant.imageOne} />
<CardBody>
<CardTitle>{plant.name}</CardTitle>
<p>uploaded by: {plant.user.username}</p>


<MoreModal updatePlant={props.updatePlant} deletePlant={props.deletePlant} id={plant._id}name={plant.name} scientificName={plant.scientificName} water={plant.water} sun={plant.sun} description={plant.description}
imageOne={plant.imageOne} imageTwo={plant.imageTwo}
/>
</CardBody>

</Card> */}