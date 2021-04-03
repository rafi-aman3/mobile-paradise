import { Button } from '@material-ui/core';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const MobileCard = (props) => {
    const {price, name, imageUrl, _id} = props.mobile;
    const history = useHistory();
    return (
        <Col md={3} >
            <Card className="mx-5 mt-5 w-75">
                <Card.Img className="rounded" variant="top" src={imageUrl}/>
                <Card.Body className="text-dark">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Button onClick={() => history.push(`/checkout/${_id}`)} variant="contained" color="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MobileCard;