import React, { useState } from 'react';
import { Card, Button, Modal, Col } from 'react-bootstrap';

const SingleWork = (props) => {
    const { title, about, technology, fetaures, img, git } = props.work;
    console.log(props.work)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Col>
                <Card className="work-card-bg h-100">
                    <article>
                        <div className="screen">
                            <img className="card-img-top img-fluid" src={img} alt={title} />
                        </div>
                        <div className="card-body overflow-hidden">
                            <div className="card-title h5">
                                {title}
                            </div>
                            <p className="small card-text">
                                {about.slice(0, 140)}
                            </p>
                            <div className="d-flex justify-content-between">
                                <div className="technology">
                                    {technology.map((tech, i) =>
                                        <span key={i}>{tech.use}</span>
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-center d-flex justify-content-between">
                            <ul className="preview list-inline m-0 p-0">
                                <li className="list-inline-item">
                                    {
                                        git?.map((links, i) =>
                                            <a key={i} href={links.link} target="_blank" rel="noopener noreferrer">
                                                <i className={links.icon} style={{ fontSize: '22px' }}></i>
                                            </a>
                                        )
                                    }
                                </li>
                            </ul>
                            <div>
                                <Button variant="outline-success" onClick={handleShow}>
                                    See Details
                                </Button>
                            </div>
                        </div>
                    </article>
                </Card>
            </Col>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="screen">
                        <img className="card-img-top img-fluid" src={img} alt={title} />
                    </div>
                    <div>
                        <h2 className="page-title abril-font pt-2">
                            About :
                        </h2>
                        <p className="small card-text">
                            {about}
                        </p>
                    </div>
                    <div>
                        <h2 className="page-title">
                            Fetaures :
                        </h2>
                        <ul>
                            {
                                fetaures.map((tech, i) =>
                                    <small key={i}>
                                        <li>{tech.power}</li>
                                    </small>)
                            }
                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer className="work-details-link">
                    <Button variant="outline-success" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SingleWork;