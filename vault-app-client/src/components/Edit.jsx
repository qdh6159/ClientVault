import React, {Component} from 'react'
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import { Form, FormInput, FormGroup, FormTextarea } from "shards-react";
import { Container, Col } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
      name: props.name,
      value: "",
      rating: "",
      retirement: "",
      address: "",
      birth: "",
      notes: "",
      profession: ""
  
     };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  handleChange = (e) => {
    this.setState ({
        [e.target.name] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("CLICKED new client button")
    this.props.createClient(this.state)
}

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button  color="primary" size="lg" block  onClick={this.toggle}> + Edit</Button>
        <Modal  open={open} toggle={this.toggle}>
          <ModalHeader>+ New Client 🌿</ModalHeader>
          <ModalBody>👋 </ModalBody>
            <Container>
              <Col >
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <label htmlFor="name"> Name</label>
                    <FormInput onChange={this.handleChange} name="name" id="name" FormInput={this.props.name} type="text" value={this.props.name} />
                  </FormGroup>
          
                  <FormGroup>
                    <label htmlFor="value">Value</label>
                  <FormInput onChange={this.handleChange} name="value" id="value" placeholder="value" type="text" value={this.props.value}/>                       
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="rating">Rating</label>
                  <FormInput onChange={this.handleChange} name="rating" id="rating" placeholder="rating" type="text" value={this.props.rating}/>                       
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="retirement">Retirement?</label>
                  <FormInput onChange={this.handleChange} name="retirement" id="retirement" placeholder="retirement" type="text" value={this.props.retirement}/>                       
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor= "address" >Address</label>
                    <FormInput onChange={this.handleChange} name="address" id="retirement" placeholder="address"  type="text" value={this.props.address}></FormInput>
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor= "birth" >Birth</label>
                    <FormInput onChange={this.handleChange} name="birth" id="retirement" placeholder="birth"  type="text" value={this.props.birth}></FormInput>
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor= "notes" >Notes</label>
                    <FormTextarea onChange={this.handleChange} name="notes" id="retirement" placeholder="notes" type="text" value={this.props.notes}></FormTextarea>
                    {/* <FormInput onChange={this.handleChange} name="notes" id="retirement" placeholder="notes"  ></FormInput> */}
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor= "profession" >Profession</label>
                    <FormInput onChange={this.handleChange} name="profession" id="retirement" placeholder="profession" type="text" value={this.props.profession} ></FormInput>
                  </FormGroup>
      
                    <br></br>
                    <Button block type="submit">Save</Button>
                    
                    <br></br>          
                </Form>
              </Col>
            </Container>
            </Modal>
      </div>
    );
  }
}