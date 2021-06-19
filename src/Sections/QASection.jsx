import {Accordion, Card, Button} from 'react-bootstrap';
const QACard = ({question,answer,eventKey}) => {
    console.log(question,eventKey)
    return <Card style={{borderStyle:'none none none none'}}>
                <Card.Header  style={{padding:'3px',marginBottom:'1px',backgroundColor:"white"}}>
                    <Accordion.Toggle as={Button} variant="link" eventKey={eventKey.toString()} 
                    style={{    textAlign:'left',
                                width:'100%',
                                textDecoration:'None',
                                color:'black',
                                padding:'20px',
                                borderRadius:'0',
                               }} 
                    >
                        <span style={{fontSize:'16px'}}>{question}</span>
                    </Accordion.Toggle>
                </Card.Header>




                <Accordion.Collapse eventKey={eventKey.toString()}>
                    <Card.Body>
                        <div style={{paddingLeft:'12px'}}>{answer}</div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
}
const QASection = () => {
    const QAs=[
        {
            question:'Where exactly are you located?',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus modi explicabo accusantium consequatur, praesentium rem quisquam molestias at quos vero. Officiis ad velit doloremque at. Dignissimos praesentium necessitatibus natus corrupti cum consequatur aliquam! Minima molestias iure quam distinctio velit.',
        },
        {
            question:'How much does it cost to attend?',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus modi explicabo accusantium consequatur, praesentium rem quisquam molestias at quos vero. Officiis ad velit doloremque at. Dignissimos praesentium necessitatibus natus corrupti cum consequatur aliquam! Minima molestias iure quam distinctio velit.',
        },
        {
            question:'What do I need to Know?',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus modi explicabo accusantium consequatur, praesentium rem quisquam molestias at quos vero. Officiis ad velit doloremque at. Dignissimos praesentium necessitatibus natus corrupti cum consequatur aliquam! Minima molestias iure quam distinctio velit.',
        },
        {
            question:'How Do I sign up?',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus modi explicabo accusantium consequatur, praesentium rem quisquam molestias at quos vero. Officiis ad velit doloremque at. Dignissimos praesentium necessitatibus natus corrupti cum consequatur aliquam! Minima molestias iure quam distinctio velit.',
        },
        {
            question:'Do you help me find a job?',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus modi explicabo accusantium consequatur, praesentium rem quisquam molestias at quos vero. Officiis ad velit doloremque at. Dignissimos praesentium necessitatibus natus corrupti cum consequatur aliquam! Minima molestias iure quam distinctio velit.',
        },
    ]
    return <section id = 'questions' className='p-5'>
                <container > 
                    <h2 className='mb-4'>Frequently Asked Questions</h2>
                    <Accordion defaultActiveKey="0" style={{textAlign:"left"}}>
                        { QAs.map( (QA,idx)=> <QACard key={idx} eventKey={idx} {...QA}/> )}
                    </Accordion>
                </container>
    </section>
}
export default QASection;