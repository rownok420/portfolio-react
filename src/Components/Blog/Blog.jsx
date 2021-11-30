import React, { useEffect } from 'react';
import Social from '../Home/Social/Social';
import ScrollToTop from '../Shared/Scroll/Scroll';
import './Blog.css';

const Blog = () => {
    useEffect(() => {
        document.title = 'Blog : Monir Hossain - Personal Porfolio Website'
    }, []);
    return (
        <main>
            <ScrollToTop />
            <Social />
            <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                <h2>Blog Data Comming Soon...</h2>
            </div>
        </main>
    );
};

export default Blog;