import React from 'react';
import "./Slider.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../images/ball taka2.jpg';
import img2 from '../../images/stamp.jpg';
import img3 from '../../images/cricket-sponsors-money-1200x900.jpg';


const Slider = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                dots: false,

            },
            400: {
                items: 1,
                dots: false,
            },
            600: {
                items: 2,
                dots: true,
            },
            700: {
                items: 2,
                dots: true,
            },
            1000: {
                items: 3,
                dots: true,

            }
        },
    };
    return (
        <div className='owl-slider'>
            <div className='slidr-dev'>
                <OwlCarousel className='owl-theme'

                    margin={10}
                    {...options}
                >
                    <div class='item'>
                        <img src={img1} alt="" />
                        <p className='mt-2'>Money Supp<span>ort</span></p>
                        <h4>Find Biman Bangladesh Airlines Ticket and Schedule on ShareTrip.</h4>
                        <button>Bet now</button>
                    </div>
                    <div class='item'>
                        <img src={img2} alt="" />
                        <p className='mt-2'>Money Supp<span>ort</span></p>
                        <h4>Find your game and Schedule on ShareTrip</h4>
                        <button>Bet now</button>
                    </div>
                    <div class='item'>
                        <img src={img3} alt="" />
                        <p className='mt-2'>Money Supp<span>ort</span></p>
                        <h4>Find your game and Schedule on ShareTrip</h4>
                        <button>Bet now</button>
                    </div>

                    <div class='item'>
                        <img src={img1} alt="" />
                        <p className='mt-2'>Money Supp<span>ort</span></p>
                        <h4>Find your game and Schedule on ShareTrip</h4>
                        <button>Bet now</button>
                    </div>
                    <div class='item'>
                        <img src={img2} alt="" />
                        <p className='mt-2'>Money Supp<span>ort</span></p>
                        <h4>Find your game and Schedule on ShareTrip</h4>
                        <button>Bet now</button>
                    </div>
                    <div class='item'>
                        <img src={img3} alt="" />
                        <p className='mt-2'>Money Supp<span>ort</span></p>
                        <h4>Find your game and Schedule on ShareTrip</h4>
                        <button>Bet now</button>
                    </div>
                    <div class='item'>
                        <img src={img1} alt="" />
                        <p className='mt-2'>Money Supp<span>ort</span></p>
                        <h4>Find your game and Schedule on ShareTrip</h4>
                        <button>Bet now</button>
                    </div>

                    <div class='item'>
                        <img src={img2} alt="" />
                        <p className='mt-2'>Money Supp<span>ort</span></p>
                        <h4>Find your game and Schedule on ShareTrip</h4>
                        <button>Bet now</button>
                    </div>
                    <div class='item'>
                        <img src={img3} alt="" />
                        <p className='mt-2'>Money Supp<span>ort</span></p>
                        <h4>Find your game and Schedule on ShareTrip</h4>
                        <button>Bet now</button>
                    </div>
                    <div class='item'>
                        <img src={img1} alt="" />
                        <p className='mt-2'>Money Supp<span>ort</span></p>
                        <h4>Find your game and Schedule on ShareTrip</h4>
                        <button>Bet now</button>
                    </div>
                    <div class='item'>
                        <img src={img2} alt="" />
                        <p className='mt-2'>Money Supp<span>ort</span></p>
                        <h4>Find your game and Schedule on ShareTrip</h4>
                        <button>Bet now</button>
                    </div>

                    <div class='item'>
                        <img src={img3} alt="" />
                        <p className='mt-2'>Money Supp<span>ort</span></p>
                        <h4>Find your game and Schedule on ShareTrip</h4>
                        <button>Bet now</button>
                    </div>

                </OwlCarousel>
            </div>
        </div>
    );
};

export default Slider;