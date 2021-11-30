import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner, } from 'react-bootstrap';
import Social from '../Home/Social/Social';
import ScrollToTop from '../Shared/Scroll/Scroll';
import SingleWork from './SingleWork/SingleWork';
import './Work.css';

const Work = () => {
    useEffect(() => {
        document.title = 'Work : Monir Hossain - Personal Porfolio Website'
    }, []);
    const [works, setWork] = useState([]);
    useEffect(() => {
        fetch('./work.json')
            .then(res => res.json())
            .then(data => setWork(data))
    }, [])
    if (works.length === 0) {
        return (
            <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="success" />
            </div>
        );
    }
    return (
        <main>
            <ScrollToTop />
            <Social />
            <Container>
                <div className="mb-5 mt-5">
                    <h2 className="page-title">
                        My Works
                    </h2>
                </div>
                <div className="my-5">
                    <Row xs={1} md={3} className="g-4 works">
                        {
                            works.map(work => <SingleWork
                                key={work.key}
                                work={work}
                            />)
                        }
                    </Row>
                </div>
            </Container>
        </main >
    );
};

export default Work;