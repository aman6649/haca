import meter1 from "../assets/img/first.png";
import meter2 from "../assets/img/second.png";
import meter3 from "../assets/img/third.png";
import meter5 from "../assets/img/track.png";
import meter4 from "../assets/img/goodie.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="prizes">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Prizes</h2>
              <p>
                Get ready to win big with exciting cash prizes and amazing
                goodies up for grabs! Don't miss out on this opportunity to win
                and be rewarded!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>₹ 15,000</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>₹ 10,000</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>₹ 7000</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>Track Prizes</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>Other Prizes</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
