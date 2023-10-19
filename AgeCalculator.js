import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const calculateAge = () => {
    if (birthdate) {
      const birthdateDate = new Date(birthdate);
      const today = new Date();
      const ageInMilliseconds = today - birthdateDate;
      const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
      setAge(ageInYears);
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <h1 className="text-center mb-4">Age Calculator</h1>
          <Form>
            <Form.Group controlId="birthdate">
              <Form.Label>Enter your birthdate:</Form.Label>
              <Form.Control
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={calculateAge}>
              Calculate Age
            </Button>
          </Form>
          {showAlert && (
            <Alert variant="danger" className="mt-3">
              Please enter a valid birthdate.
            </Alert>
          )}
          {age !== '' && (
            <Alert variant="success" className="mt-3">
              You are {age} years old.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default AgeCalculator;
