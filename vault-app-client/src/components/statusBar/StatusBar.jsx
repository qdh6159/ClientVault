import React from "react"
import { Table, Badge, Container, Card, Button, CardHeader, CardFooter, CardBody,CardTitle, Jumbotron, Row, Col, Spinner }from 'reactstrap';

function StatusBar(props) {



    return (
        <div class="statusBar">
            <div class="callOne"><img src="https://pbs.twimg.com/profile_images/1188847475291033600/8_ELIzfQ_400x400.jpg"></img></div>
            <div class="callTwo" >
                <div class="callName">
                    <h2 class="callName">Tim Cook</h2>
                </div>
                <div class="callType"><Badge size="sm" color="secondary">Private Client</Badge></div>
                <div class="callIncoming"><h5 class="callIn">INCOMING CALL</h5></div>
            </div>
            <div class="callThree" >
            <span class="mainSpin"><Spinner style={{ width: '4rem', height: '4rem' }} type="grow" color="success" /></span>
            <div class="callAnswer"><Button style={{ width: '6rem', height: '2rem' }} size="sm" color="success">Answer</Button></div>
            </div>
            
            

        </div>
            
        )
  }

  export default StatusBar