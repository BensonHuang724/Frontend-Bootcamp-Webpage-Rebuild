import {Container,Row,Col,Card,Button} from 'react-bootstrap';
const ClassInfo =({title,bg_color,btn_color,content}) => {
  return <Card >
          <Card.Body className={bg_color}>
            <div className="h1">
                <i className="bi bi-laptop"></i>   
            </div>
            <Card.Title as='h3' className='mb-0' >{title}</Card.Title>
            <Card.Text>
                {content}
            </Card.Text>
            <Button href="#" variant={btn_color}>Read More</Button>
          </Card.Body>
        </Card>
}
const ClassesSection= ()=> {
    let cardsProps =[
        {
          title:'Virtual',
          bg_color:'bg-dark',
          btn_color:'primary',
          content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?'
        },
        {
          title:'Hybrid',
          bg_color:'bg-secondary',
          btn_color:'dark',
          content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?'
        },
        {
          title:'In Person',
          bg_color:'bg-dark',
          btn_color:'primary',
          content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?'
        }
    ]
    return <section className=' py-5 text-white '>
      <Container>
        <Row className='justify-content-center'>
          {cardsProps.map( (cardsProp,idx)=>
            <Col key={idx} sm={12} md={4}>
              <ClassInfo {...cardsProp} />
            </Col>)}
        </Row>
      </Container>
    </section>
  }
  export default ClassesSection;