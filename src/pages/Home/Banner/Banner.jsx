import bannnerPic1 from "../../../assets/banner1.jpg";
import bannnerPic2 from "../../../assets/banner2.jpg";
import bannnerPic3 from "../../../assets/banner4.jpg";
import bannnerPic4 from "../../../assets/banner3.jpg";
import sb1 from "../../../assets/sb1.jpg"
import sb2 from "../../../assets/sb2.jpeg"
import sb3 from "../../../assets/sb3.jpg"
const Banner = () => {
  return (
    <div className="w-full h-[70vh] md:flex gap-4 ">
      <div className="carousel h-full md:w-3/4 rounded-md shadow-lg shadow-sky-300">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={bannnerPic1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bannnerPic2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={bannnerPic3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={bannnerPic4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:grid md:w-1/4 rounded-md shadow-lg shadow-sky-300">
        <div className="md:h-[70vh] carousel carousel-vertical">
          <div className="carousel-item h-full">
            <img src={sb1} />
          </div>
          <div className="carousel-item h-full">
            <img src={sb2} />
          </div>
          <div className="carousel-item h-full">
            <img src={sb3} />
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Banner;
