import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../images/Home1.jpeg";
import img2 from "../../images/paint.jpeg";
import img3 from "../../images/salon.jpeg";
function CarouselFadeExample() {
  return (
    <div  className='carousel'>
    <Carousel fade  >
      <Carousel.Item>
        <img  width={900} height={500} 

          className="w-100 p-3  d-block  "
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>On Door Services</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img   width={900} height={500} 
          className="w-100 p-3  d-block  "
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>On Door Service</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img   width={900} height={500} 
         className="w-100 p-3  d-block  "
          src={img3}
          alt="Third slide"
          style={{width: 100 , backgroundColor: "rgba(0, 0, 255, 0.1)"}}
        />

        <Carousel.Caption>
          <h3>On Door Service</h3>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;