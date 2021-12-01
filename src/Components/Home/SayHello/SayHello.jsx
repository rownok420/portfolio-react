import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SayHello.css';
import Fade from 'react-reveal/Fade';

const SayHello = () => {
    return (
        <section className="py-5 my-5">
            <Fade up>
                <div className="text-center">
                    <p className="text-green">What's Next?</p>
                    <h1 className="abril-font">Get In Touch !</h1>
                    <div className="col-md-8 mx-auto">
                        <p className="px-3">
                            I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop  a message. I'll try my best to get back to you!
                        </p>
                    </div>
                    <Link to="/contact" className="d-inline-block my-5">
                        <Button variant="outline-success btn-lg outline-none">SayHello</Button>
                    </Link>
                </div>
            </Fade>
        </section >
    );
};

export default SayHello;