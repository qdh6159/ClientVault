import React, { Component} from 'react'
import ClientList from "./ClientList/ClientList"
import ClientNav from "./nav"
import {Container, Row, Col, Jumbotron, Button} from "reactstrap";



class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            clients: []
        }
    }

    componentDidMount() {
        console.log("component is mounting")
        this.getMovies();
    }
    deletePlant = async (id) => {
        console.log(id)
        try{
            const deletePlant = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/clients/${id}`, {
                method: "DELETE",
                credentials: "include",
            })
            const parsedResponse = await deletePlant.json();
            if(parsedResponse.status.code === 200) {
                this.setState({
                    clients: this.state.clients.filter(plant => plant._id !== id)
                    
                })
            }
        }catch(err){
            console.log(err)
        }
    }
    updatePlant = async (id, formData) => {
        const updatePlant = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/clients/${id}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await updatePlant.json();
        if(parsedResponse.status.code === 201){
            this.setState({
                clients: this.state.clients.map(function(plant){
                    if(plant._id === id){
                        return parsedResponse.data
                    }else{
                        return plant
                    }
                })
            })
        }
        console.log(parsedResponse)
    }
    createClient = async (formData) => {
        console.log(formData)
        try{
            const newClient = await fetch('http://localhost:9000/clients', {
                method: "POST",
                body: JSON.stringify(formData),
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    
                }
            })
            const parsedResponse = await newClient.json();
            if(parsedResponse.status.code === 201){
                console.log("Got the clients")
                this.setState({
                    clients: [...this.state.clients, parsedResponse.data]
                })
            }
            console.log("********************")
            console.log(this.state)
        }catch(err) {

        }
    }

    getMovies = async () => {
        try{
            console.log("Getting the movies*****************")
        const clients = await fetch("http://localhost:9000/clients")
        const parsedResponse = await clients.json();
        if(parsedResponse.status.code === 200){
            this.setState({
                clients: parsedResponse.data})
                console.log(parsedResponse.data)
                console.log("We got the movies")
                console.log(this.state)
            }
        }catch(err){
            console.log(err)
        }
    }
    render() {
        return(
            <div>
                <ClientNav createClient= {this.createClient} />
                <h3>.</h3>
                
                <Container fluid>
                    <Row>
                        <Col id="playList" xs="3">1 / 12
                        <ClientList updatePlant={this.updatePlant} deletePlant={this.deletePlant} clients={this.state.clients} />
                        </Col>
                        <Col style={{marginTop: 100}}>2 / 12
                        <Jumbotron fluid lg="3">
                            <h1 className="display-3">Client Detail View</h1>
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
            </div>
        )
    }
}

export default MainContainer;