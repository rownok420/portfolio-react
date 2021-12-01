import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BestBlog.css';
import Fade from 'react-reveal/Fade';

const BestBlog = () => {
    return (
        <section className="pt-5">
            <Container>
                <Row>
                    <Fade right>
                        <div className="col-md-7">
                            <div className="section-title">
                                <h1 className="some-work-title abril-font">
                                    <span className="text-green">Some of</span>
                                    {" "} my Blog
                                </h1>
                                <div className="action text-right">
                                    <Link to="/blog" className="details-link">
                                        <Button variant="outline-success btn-sm">All Blog</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </Row>
                {/* blog 01 */}
                <div className="blogs my-5">
                    <Row xs={1} md={3} className="g-4">
                        <Fade up>
                            <Col>
                                <Card className="card-bg">
                                    <a className="blog-link" href="https://medium.com/@mahmud886/simple-introduction-to-react-js-e6af8079bf63" target="_blank" rel="noopener noreferrer">
                                        <article>
                                            <img className="card-img-top" src="https://miro.medium.com/max/1280/1*aLg1-G2UAlaKpBopRnmCRg.png" alt="Simple Introduction to React.js" />
                                            <div className="card-body">
                                                <div className="card-title h5">
                                                    Simple Introduction to React.js
                                                </div>
                                                <p className="small card-text">
                                                    React is a library that used to create awesome user interface … hence it is a library it need some other…
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="d-flex justify-content-between">
                                                    <div className="technology">
                                                        <span>React.js</span>
                                                    </div>
                                                    <p>Nov 29 2021</p>
                                                </div>
                                            </div>
                                        </article>
                                    </a>
                                </Card>
                            </Col>
                        </Fade>
                        <Fade down>
                            <Col>
                                <Card className="card-bg">
                                    <a className="blog-link" href="https://medium.com/@mahmud886/simple-introduction-to-react-js-e6af8079bf63" target="_blank" rel="noopener noreferrer">
                                        <article>
                                            <img className="card-img-top" src="https://miro.medium.com/max/1280/1*aLg1-G2UAlaKpBopRnmCRg.png" alt="Simple Introduction to React.js" />
                                            <div className="card-body">
                                                <div className="card-title h5">
                                                    Simple Introduction to React.js
                                                </div>
                                                <p className="small card-text">
                                                    React is a library that used to create awesome user interface … hence it is a library it need some other…
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="d-flex justify-content-between">
                                                    <div className="technology">
                                                        <span>React.js</span>
                                                    </div>
                                                    <p>Nov 29 2021</p>
                                                </div>
                                            </div>
                                        </article>
                                    </a>
                                </Card>
                            </Col>
                        </Fade>
                        <Fade up>
                            <Col>
                                <Card className="card-bg">
                                    <a className="blog-link" href="https://medium.com/@mahmud886/simple-introduction-to-react-js-e6af8079bf63" target="_blank" rel="noopener noreferrer">
                                        <article>
                                            <img className="card-img-top" src="https://miro.medium.com/max/1280/1*aLg1-G2UAlaKpBopRnmCRg.png" alt="Simple Introduction to React.js" />
                                            <div className="card-body">
                                                <div className="card-title h5">
                                                    Simple Introduction to React.js
                                                </div>
                                                <p className="small card-text">
                                                    React is a library that used to create awesome user interface … hence it is a library it need some other…
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="d-flex justify-content-between">
                                                    <div className="technology">
                                                        <span>React.js</span>
                                                    </div>
                                                    <p>Nov 29 2021</p>
                                                </div>
                                            </div>
                                        </article>
                                    </a>
                                </Card>
                            </Col>
                        </Fade>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default BestBlog;