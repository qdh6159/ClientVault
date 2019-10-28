import React, {useState} from 'react';
// import plantsContainer from './plantsContainer/plantsContainer'
import BasicCardExample from '../Cards/Card'
import MoreModal from '../MoreComponent'
import {  Container, Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Jumbotron, Row, Col } from 'reactstrap';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function ClientList(props){
  const [name, setName] = useState(null)



  const clients = props.clients.map(function(client, index){
      return (
        <li key={client._id}> 
          <Card >
          <CardHeader tag="h3">{client.name}</CardHeader>
          <CardBody>
            <CardTitle>Portfolio Value: {client.value}</CardTitle>
            <CardTitle>Last contact: 2018-05-23</CardTitle>  
          </CardBody>
          <CardFooter>
            <Button onClick={()=> setName(client.name)}>View Details</Button>
          </CardFooter>
        </Card>
        </li>)
    })
  
    return (
      
      

      <Container fluid>
      <Row>
          <Col id="playList" xs="3">1 / 12
          <ul class="plantList">{clients}</ul>
          </Col>

          <Col style={{marginTop: 100}}>2 / 12
          <Jumbotron fluid lg="3">
              <h1 className="display-3">Name:{name} </h1>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
              <Button color="primary">Learn More</Button>
              </p>
          </Jumbotron>

          <Jumbotron  sm="3">
              <h1 className="display-3">Market Overview</h1>
              <Button color="primary">Learn More</Button>  
          </Jumbotron>
          </Col>
          
          {/* <Col>3 / 12</Col> */}
      </Row>
      </Container>
     
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