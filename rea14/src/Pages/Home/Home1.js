import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card2 } from '../../components/Card'

import Slides2 from '../../components/Slides/Slides2'

import { Top1 } from '../../components/Topheader'

function Home1() {
    return (
        <>
           <Container>
             <Row>
             <Col>
             <Top1/>
             </Col>
             </Row>
             <br/>
             <Row>
             <Col>
            <Slides2/>
                   </Col>
             </Row>
             <br/> 
             <Row>
             <Col>
             <Card2></Card2>
            </Col>
            <Col>
             <Card2/>
            </Col>
            <Col>
             <Card2></Card2>
            </Col>
             </Row>
             <br/>
                  
               
               </Container> 
        </>
    )
}

export default Home1
