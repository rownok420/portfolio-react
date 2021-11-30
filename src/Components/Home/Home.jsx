import React, { useEffect } from 'react';
import BestBlog from './BestBlog/BestBlog';
import BestWork from './BestWork/BestWork';
import Hero from './Hero/Hero';
import './Home.css'
import SayHello from './SayHello/SayHello';
import Social from './Social/Social';

const Home = () => {
    useEffect(() => {
        document.title = 'Monir Hossain - Personal Porfolio Website'
    }, []);
    return (
        <main>
            <Social />
            <Hero />
            <BestWork />
            <BestBlog />
            <SayHello />
        </main>
    );
};

export default Home;