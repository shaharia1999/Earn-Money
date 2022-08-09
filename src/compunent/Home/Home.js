import React from 'react';
import Slider from '../Slider/Slider';
import Banner from './Banner';
import Contract from './Contract';
// import Navbar from '../Navber/Navber';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Slider></Slider>
           <Contract></Contract>
        </div>
    );
};

export default Home;