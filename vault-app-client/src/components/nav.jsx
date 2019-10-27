import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import { FormInput } from "shards-react";
import { Button, ButtonGroup, Modal, ModalBody, ModalHeader } from "shards-react";
import BasicModalExample from "./Component"


export default function PlantNav(props) {
    return (
        <div>
        <Nav>
        {/* <NavItem>
          <NavLink active href="#">
            Client<span role="img">👥</span>Keeper<span role="img">🔐</span>
          </NavLink>
        </NavItem> */}
        
        <NavItem id="form-control">
          <FormInput placeholder="Search" id="search"/>
          <BasicModalExample createPlant = {props.createPlant}/>
          <Button theme="success">Watchlist</Button>
        </NavItem>
        
        <NavItem>
        
        </NavItem>
        <NavItem>
        
        </NavItem>
        
        
      </Nav>
      </div>
    );
  }