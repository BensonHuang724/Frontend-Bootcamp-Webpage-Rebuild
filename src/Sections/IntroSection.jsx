import {  Container, Row, Col, Button, Image,Modal,Form} from 'react-bootstrap';
import React, { useRef, useEffect, useState } from 'react';
import showcase from '../assets/showcase.svg';
const EnrollForm = () => {
    return <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>First Name:</Form.Label>
              <Form.Control type="text"  />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control type="text"  />
            </Form.Group>
          
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"  />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Phone:</Form.Label>
              <Form.Control type="text"  />
            </Form.Group>
          </Form>
}
const ModalBTN = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary mb-4" onClick={handleShow}>
          Start The Enrollment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enrollment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='h5 pb-3 font-weight-light'>Fill out this form and we will get back to you</div>
          <EnrollForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const IntroSection = () => {
    return <section id='home' className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-md-left">
        <Container >
          <Row className='align-items-center'>
            <Col md={6}>
              <h1> 
                Become a <span className="text-warning">Web Developer</span>
              </h1>
              <p className='lead my-4'>
                We focus on teaching our students the fundamentals of the latest and greatest technologies to prepare them for their first dev role
              </p>
              <ModalBTN/>
            </Col>
            <Col md={6} >
                <Image fluid className='d-none d-md-block' src={showcase} alt="ssssssssssshit"  />
            </Col>
          </Row>
        </Container >
      </section>
}
export default IntroSection;