import { useEffect,useRef } from 'react';
import {init} from 'ityped';
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
    )
}

export default Home
