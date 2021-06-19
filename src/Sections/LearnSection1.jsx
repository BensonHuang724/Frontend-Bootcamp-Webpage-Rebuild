import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import fundamentals from '../assets/fundamentals.svg';
const LearnSection1 = () => {
    return <section id='learn' className="p-5 text-start " style={{textAlign:"left"}}>
        <Container>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
            <Row className='align-items-center'>
                <Col md={6}>
                    <Image fluid className='d-none d-md-block' src={fundamentals} alt="ssssssssssshit"  />
                </Col>
                <Col md={6} className='pl-5'>
                    <div className="h2">
                        Learn The Fundamentals
                    </div>
                    <p className="lead">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Similique deleniti possimus magnam corporis ratione facere!
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Cumque reiciendis eius autem eveniet mollitia, 
                        at asperiores suscipit quae similique laboriosam iste minus placeat odit velit quos,
                        nulla architecto amet voluptates?
                    </p>
                    <Button className='mt-3' href="#" variant='light' size="lg">
                        <i className="bi bi-chevron-right"></i>
                        Read More
                    </Button>
                </Col>
            </Row>
        </Container>
    </section>
}
export default LearnSection1;