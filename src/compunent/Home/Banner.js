import React from 'react';
// import { useTypewriter } from 'react-simple-typewriter';
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import './Banner.css'

const Banner = () => {

    
    const text = useTypewriter({
        words: ['Cricket', 'Football', 'Lodo', 'Sports'],
        loop: Infinity,
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
      })

    return (
        <div className='banner'>
            <div className='main-div-banner'>
                <div>
                    <h1>Earn Money  <br />  From
                        <span class='typewriter'> {text}</span>
                    </h1>
                    <p>Safe, secure, reliable Earning.Your Game to live entertainment!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;