import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const GenderDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Please select gender
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Men</Dropdown.Item>
        <Dropdown.Item>Women</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default GenderDropdown;
