import {  FormControl,Button,Container,Row,Col,InputGroup,} from 'react-bootstrap';

const SignupSection = () => {
    return <section className="bg-primary text-light p-5 ">
        <Container >
          <Row className='align-items-center'>
            <Col md={6}>
              <h3>Sign Up For Our Newsletter</h3>
            </Col>
            <Col md={6}>
              <InputGroup className="m-3" size="lg">
                <FormControl placeholder="Enter Email"/>
                <Button variant="dark" >
                  Submit
                </Button>
            </InputGroup>
            </Col>
          </Row>
        </Container>
    </section>
  }
  export default SignupSection;