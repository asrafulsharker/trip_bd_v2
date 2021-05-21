// import { useState } from 'react';
// import './Testimonials.scss';
// import { DataTestimonials } from './DataTestimonials';

// export default function Testimonials() {
//     const [currentSlide, stateCurrentSlide] = useState(0);

//     const handleClick =(way) =>{
//         way == "left"
//         ? stateCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
//         : stateCurrentSlide(currentSlide < DataTestimonials.length -1 ? currentSlide + 1 : 0);
        
//     }
//     return (
//         <div className="testimonials container" id="testimonials">
//             <h1 className="testimonialsH1">Testimonials</h1>
//             <div
//                 className="sliderT"
//                 style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
//             >
//                 {DataTestimonials.map((d) => (
//                 <div className="containerT">
//                     <div className="itemT">
//                     <div className="leftT">
//                         <div className="leftContainerT">
//                         <div className="imgContainerT">
//                         </div>
//                         <p>{d.description}</p>
//                         <h2>{d.name}</h2>
//                         <p>{d.position}</p>
//                         </div>
//                     </div>
//                     <div className="rightT">
//                         <img 
//                         src={d.image}
//                         alt=""
//                         />
//                         <div className="arrowDivT">
//                             <i onClick={() => handleClick("left")}  class="fas fa-chevron-left arrowT leftT"></i>
//                             <i class="fas fa-chevron-right arrowT rightT" onClick={() => handleClick()}></i>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 ))}
//             </div>
               
//         </div>
//     )
// }



import "./Testimonials.scss";
export default function Testimonials() {
    const data = [
      {
        id: 1,
        name: "Tom Durden",
        title: "Senior Developer",
        img:
          "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        icon: "assets/twitter.png",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
      },
      {
        id: 2,
        name: "Alex Kalinski",
        title: "Co-Founder of DELKA",
        img:
          "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        icon: "assets/youtube.png",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
        featured: true,
      },
      {
        id: 3,
        name: "Martin Harold",
        title: "CEO of ALBI",
        img:
          "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        icon: "assets/linkedin.png",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
      },
      
    ];
    return (
      <div className="testimonials" id="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
          {data.map((d) => (
            <div className={d.featured ? "card featured" : "card"}>
              <div className="top">
                <img src="assets/right-arrow.png" className="left" alt="" />
                <img
                  className="user"
                  src={d.img}
                  alt=""
                />
                <img className="right" src={d.icon} alt="" />
              </div>
              <div className="center">
                {d.desc}
              </div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }