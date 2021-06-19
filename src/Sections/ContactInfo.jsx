import {Container,Row,Col,ListGroup} from 'react-bootstrap';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiaHN1YW4xOTk3IiwiYSI6ImNrcTB2czE1czA4cHAybm80Y2ZvbWFlNHEifQ.e25Uzf31HtKE1vO0b1iA3Q';
const Info = () => {
    return <div style={{textAlign:"left"}}>
        <h1 style={{textAlign:"center"}}>Contact Info</h1>
        <ListGroup variant="flush" className='lead'>
            <ListGroup.Item> 
                <span className="font-weight-bold">Enrollment Phone: </span>
                (555) 555-5555
            </ListGroup.Item>
            <ListGroup.Item> 
                <span className="font-weight-bold">Student Phone: </span>
                (333) 333-3333
            </ListGroup.Item>
            <ListGroup.Item> 
                <span className="font-weight-bold">Enrollment Email: </span>
                (555) enroll@frontendbc.test
            </ListGroup.Item>
            <ListGroup.Item> 
                <span className="font-weight-bold">Student Email: </span>
                student@frontendbc.test
            </ListGroup.Item>
        </ListGroup>
    </div>
}
const Map =() => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
    });
    return <div ref={mapContainer} className="map-container"  style={{width: "100%",height: "100%"}}></div>
}
const ContactInfo = () => {
    return <section className='p-5'>
        <Container >
            <Row>
                <Col md={6} sm={12}>
                    <Info/>
                </Col>
                <Col md={6} sm={12}>
                    <Map/>
                </Col>
            </Row>
        </Container>
    </section>
}
export default ContactInfo;