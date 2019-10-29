import React, {useState} from 'react';
import {  Container, Card, Button, CardHeader, CardFooter, CardBody,CardTitle, Jumbotron, Row, Col, Spinner }from 'reactstrap';
import Filter from '../filters/FilterComponent'

function ClientList(props){
  const [name, setName] = useState(null)
  const [value, setValue] = useState(null)
  const [id, setId] = useState(null)
  const [loading, setLoading] = useState(false)

  

  const clients = props.clients.map(function(client, index){
    const click = function(){
      console.log("click button")
      setLoading(true)
      setName(client.name)
      setValue(client.value)
      setId(client._id)
      setTimeout(() => {
        setLoading(false)
        console.log('loading');
      }, 750);

    }

    

      return (
        <li key={client._id}> 
          <Card >
          <CardHeader tag="h3">{client.name}</CardHeader>
          <CardBody>
            <CardTitle>Portfolio Value: {client.value}</CardTitle>
            <CardTitle>Last contact: 2018-05-23</CardTitle>  
          </CardBody>
          <CardFooter>
            <Button onClick={()=> click()}>View Details</Button>
            <Button color="danger" onClick={()=> props.deleteClient(client._id)}>delete</Button>
          </CardFooter>
        </Card>
        </li>)
    })
  

    if (loading){
      return (
      
        <Container fluid>
        <Row>
          <Col id="playList" xs="3">1 / 12
          <ul class="plantList">{clients}</ul>
          </Col>
  
          <Col style={{marginTop: 100}}>2 / 12
            <Jumbotron fluid lg="3">
            <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" color="primary" />
              <p className="lead">
              <Button color="primary">Learn More</Button>
              </p>
            </Jumbotron>  
  
            <Jumbotron  sm="3">
                <h1 className="display-3">Market Overview</h1>
                <Button color="primary">Learn More</Button>  
            </Jumbotron>
          </Col>
        </Row>
        </Container>
       
        )
    }else{
      // const deleteClient = (id) => {
      //   console.log("Deleting client")
      //   props.deleteClient(id)
      let clientId = {id}
      console.log({id})
      return (
      
        <Container fluid>
        <Row>
          <Col id="playList" xs="3">1 / 12
          <Filter turnOffRetirementFilter={props.turnOffRetirementFilter} engageRetirementFilter= {props.engageRetirementFilter} />
          <ul class="plantList">{clients}</ul>
          </Col>
  
          <Col style={{marginTop: 100}}>2 / 12
            <Jumbotron fluid lg="3">
            
              <h1 className="display-3">Name:{name} </h1>
              <h2 className="display-3">Value:{value} </h2>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
              <Button color="primary">Learn More</Button>
              {/* <Button color="danger" onClick={()=> props.deleteClient({id})}>delete</Button> */}
              </p>
            </Jumbotron>  
  
            <Jumbotron  sm="3">
                <h1 className="display-3">Market Overview</h1>
                <Button color="primary">Learn More</Button>  
            </Jumbotron>
          </Col>
        </Row>
        </Container>
       
        )
    }
    
}

export default ClientList
