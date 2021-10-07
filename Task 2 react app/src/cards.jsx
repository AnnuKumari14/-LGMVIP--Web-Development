import React from 'react'
import { Card , Col } from 'react-bootstrap';

export const CardComp = ({imgSrc, firstName, lastName, email, userId}) => {
    return (
        <Col lg={4} md={6} sm={12}>
        <Card>
            <Card.Img  src={imgSrc} />
            <Card.Body style={{marginLeft:"5%"}}>
                <Card.Title style={{fontWeight: "700"}}>{firstName.toUpperCase()} {lastName.toUpperCase()}</Card.Title>
                <Card.Text>
                 <a href={`mailto:${email}`}>{email}</a> <br />
                 User ID: {userId}
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    )
}