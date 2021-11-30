import React, { useEffect } from 'react';
import { Col, Container, Form, Button } from 'react-bootstrap';
import Social from '../Home/Social/Social';
import './Contact.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import ScrollToTop from '../Shared/Scroll/Scroll';

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact : Monir Hossain - Personal Porfolio Website'
    }, []);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_cna2bpq', 'template_qrjfgpa', e.target, 'user_YfVX34eTDjmUl4i1AFILE')
            .then((result) => {
                Swal.fire('Message Send SuccessFully! I Will Contact As Soon..')
            }, (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            });
        e.target.reset();
    };
    return (
        <main>
            <ScrollToTop />
            <Social />
            <Container>
                <div className="my-5">
                    <Col md={6} className="mx-auto rounded my-3  p-3 px-4 contact-bg">
                        <h2 className="text-center mb-4 abril-font">
                            Get In Touch
                        </h2>
                        <Form onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control required type="text" placeholder="Your Name" name="fullname" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Control type="email" placeholder="Your email" required name="email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={5} placeholder="Type your message" required name="message" />
                            </Form.Group>
                            <div className="d-grid mb-3">
                                <Button variant="success" size="lg" type="submit">
                                    Send
                                </Button>
                            </div>
                            <p className="abril-font text-center ">Sending to
                                <u>
                                    <a className="text-decoration-none text-green" href="mailto:monirhossain6163@gmail.com">{" "}monirhossain6163@gmail.com</a>
                                </u>
                            </p>
                        </Form>
                    </Col>
                </div>
            </Container>
        </main>
    );
};

export default Contact;