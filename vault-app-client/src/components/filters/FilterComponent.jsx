import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Filter = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Dropdown
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem onClick={props.turnOffRetirementFilter}>Reset filter</DropdownItem>
        <DropdownItem onClick={props.engageRetirementFilter}>Qualified/retirement</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Filter;