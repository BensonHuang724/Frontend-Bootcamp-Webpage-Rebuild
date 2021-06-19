import {Container,Row,Col,Card} from 'react-bootstrap'; 

const Intructor=({imgSrc,instName,insIntro}) => {
    return <Col md={6} lg={3}>
                    <Card className='mb-3' >
                        <Card.Body>
                            <img src={imgSrc} className='rounded-circle mb-3' width='128' height='128' alt="whutttttttt" />
                            <Card.Title>{instName}</Card.Title>
                            <Card.Text>
                                {insIntro}
                            </Card.Text>
                            <a href="#"><i className="bi bi-twitter mx-1 text-dark"></i></a>
                            <a href="#"><i className="bi bi-facebook mx-1 text-dark"></i></a>
                            <a href="#"><i className="bi bi-linkedin mx-1 text-dark"></i></a>
                            <a href="#"><i className="bi bi-instagram mx-1 text-dark"></i></a>
                        </Card.Body>
                    </Card>
                </Col>
}
const InstructorsSection = () => {
    let inssInfo = [
        {   
            imgSrc: 'https://scontent.frmq4-1.fna.fbcdn.net/v/t1.6435-9/55508160_2547811081913673_1875695746687172608_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=wfeVDEfvGv8AX-GWyNy&tn=K5zmp99UlrJIAzuH&_nc_ht=scontent.frmq4-1.fna&oh=09a66bb4f8b8235a08813e35ff6a65cc&oe=60CF518C',
            instName : 'Austin Tsai',
            insIntro : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.',
        },
        {   
            imgSrc: 'https://scontent.frmq4-1.fna.fbcdn.net/v/t1.6435-9/32966563_2127711763922826_8591830351909748736_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UUs6-fuxcRIAX_JqKNn&tn=K5zmp99UlrJIAzuH&_nc_ht=scontent.frmq4-1.fna&oh=4a4c94b779bf00ffde2d7b2a3c4f0c12&oe=60CF1581',
            instName : 'KY Lung',
            insIntro : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.',
        },
        {   
            imgSrc: 'https://scontent.frmq4-2.fna.fbcdn.net/v/t31.18172-8/14115502_1049060055129810_1124135847241923166_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=RoEyvtFByHIAX_YRT0S&_nc_ht=scontent.frmq4-2.fna&oh=7ea393149d0975088cbe71a99e2da29d&oe=60F02518',
            instName : 'LC Ouy',
            insIntro : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.',
        },
        {   
            imgSrc: 'https://randomuser.me/api/portraits/women/26.jpg',
            instName : 'Sara Smith',
            insIntro : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.',
        },
    ]
    return <section id='instructors' className="p-5 bg-primary">
        
        <div className="h2 text-white">
            Our Instructors
        </div>
        <p className="lead mb-5 text-white">
            Our instructors all have 5+ years working as a web developer in the industry
        </p>
        <Container>
            <Row>
             {inssInfo.map( (insInfo,idx) => <Intructor key={idx} {...insInfo}/>)}
            </Row>
        </Container>

    </section>
}
export default InstructorsSection;