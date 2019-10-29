import React, {useState} from 'react';
import { Table, Container, Card, Button, CardHeader, CardFooter, CardBody,CardTitle, Jumbotron, Row, Col, Spinner }from 'reactstrap';
import Filter from '../filters/FilterComponent'
import StockTable from '../table/TableComponent'
import StockNav from '../stockNav/StockNav'
import Accounts from '../accounts/Accounts'

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
          <Card style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardHeader tag="h3">{client.name}</CardHeader>
          {/* <CardBody>
            <CardTitle>Portfolio Value: {client.value}</CardTitle>
            <CardTitle>Last contact: 2018-05-23</CardTitle>  
          </CardBody> */}
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
            <div fluid lg="3">
            <Spinner style={{ width: '10rem', height: '10rem' }} type="grow" color="primary" />
              <p className="lead">
              <Button color="primary">Learn More</Button>
              </p>
            </div>  
  
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
  
          <Col style={{marginTop: 30}}>2 / 12
            <div fluid lg="3" class="mainJumbo">

              

              <h1 class="mainName">{name} <span class="mainSpin"><Spinner style={{ width: '3rem', height: '3rem' }} type="grow" color="success" /></span></h1> 
              <div class="accounts">
                <Accounts value = {value} />
                

              </div>
              {/* <h1 className="display-3">Name:{name} </h1>
              <h2 className="display-3">Value:{value} </h2> */}
              <p className="lead">Top Preformers</p>
              <hr className="my-2" />
              {/* <StockNav /> */}
              <StockTable />

              
              <p className="lead">
              <Button color="primary">Learn More</Button>
              {/* <Button color="danger" onClick={()=> props.deleteClient({id})}>delete</Button> */}
              </p>
            </div>  
  
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
