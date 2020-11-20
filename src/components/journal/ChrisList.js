import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getAll } from './../../modules/APICalls';

export const ChrisList = () => {

    const [journalArray, setJournalArray] = useState([])

    useEffect(() => {
        getAll()
            .then(data => {
                setJournalArray(data)
            })
    }, [])


    return (
        <>
            <h4>Christmas List</h4>
            <Container fluid>
                <Row>
                {
                    journalArray.map(item => {
                        return (
                            <Col key={item.id} className="bgcolor" xs={12} md={6} lg={4} xl={2}>
                                <h5>{item.title}</h5>
                            </Col>
                        )
                    })
                }
                </Row>
            </Container>
        </>
    )
}