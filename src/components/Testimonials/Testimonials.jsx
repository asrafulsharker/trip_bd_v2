import { useState } from 'react';
import './Testimonials.scss';
import { DataTestimonials } from './DataTestimonials';

export default function Testimonials() {
    const [currentSlide, stateCurrentSlide] = useState(0);

    const handleClick =(way) =>{
        way == "left"
        ? stateCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : stateCurrentSlide(currentSlide < DataTestimonials.length -1 ? currentSlide + 1 : 0);
        
    }
    return (
        <div className="testimonials container" id="testimonials">
            <h1 className="testimonialsH1">Testimonials</h1>
            <div
                className="sliderT"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {DataTestimonials.map((d) => (
                <div className="containerT">
                    <div className="itemT">
                    <div className="leftT">
                        <div className="leftContainerT">
                        <div className="imgContainerT">
                        </div>
                        <p>{d.description}</p>
                        <h2>{d.name}</h2>
                        <p>{d.position}</p>
                        </div>
                    </div>
                    <div className="rightT">
                        <img 
                        src={d.image}
                        alt=""
                        />
                        <div className="arrowDivT">
                            <i onClick={() => handleClick("left")}  class="fas fa-chevron-left arrow left"></i>
                            <i class="fas fa-chevron-right arrow right" onClick={() => handleClick()}></i>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
               
        </div>
    )
}
