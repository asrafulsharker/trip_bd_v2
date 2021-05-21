import { useEffect,useRef } from 'react';
import {init} from 'ityped';

import Explore from '../Explore/Explore';
import Featured from '../Featured/featured';
import Testimonials from '../Testimonials/Testimonials';
import Trending from '../Trending/Trending';
import Guides from '../Guides/Guides';
import Contact from '../Contact/Contact';

import './Home.scss';
import HomeImg from '../../images/hero1.png'
function Home() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Travel','Book Hotel', 'Enjoy Vacation'],
        });

    },[])
    return (
        <>
        <div className="Home container">
            <form>
                <input type="text" placeholder="Where to go?"/>
            </form>

            <div className="row">
            <div className="leftH col-md-6">
                <h1>Keep Planning</h1>
                <p>Explore and <span ref={textRef}></span></p>
            </div>
            <div className="rightH col-md-6">
                <img src={HomeImg} alt="hero"/>
            </div>
            </div>
        </div>
        <Explore/>
        <Featured/>
        <Guides/>
        <Testimonials/>
        <Trending/>
        <Contact/>
        </>
    )
}

export default Home
