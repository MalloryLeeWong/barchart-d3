import React from 'react';
import ChartWrapper from './ChartWrapper';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GenderDropdown from './GenderDropdown'

function App() {
  return (
    <div className="App">
      <Navbar bg="light">
        <Navbar.Brand>Barchartly</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12}><GenderDropdown/></Col>
        </Row>
        <Row>
          <Col xs={12}><ChartWrapper /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
