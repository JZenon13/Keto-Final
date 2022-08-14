import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

class LandingPage extends Component {
  state = {
    items: [
      {
        id: 1,
        url: "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/04/Ketogenic-Diet_725641921-1200x800.jpg",
      },
      {
        id: 2,
        url: "https://totalhealthmagazine.com/images/2018/april/ketogenic-diet-food-pyramid-dallas-clouatre.jpg",
      },
      {
        id: 3,
        url: "https://www.frontiersin.org/files/Articles/792846/fmed-08-792846-HTML/image_m/fmed-08-792846-g001.jpg",
      },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <Carousel>
          {items.map((item) => (
            <>
              <img
                key={item.id}
                src={item.url}
                className="carousel-item "
              ></img>

              <h1>{item.text}</h1>
            </>
          ))}
        </Carousel>
        <h1>Ket0 K0unter</h1>
        <p>
          Honestly, every diet is BS. But if you're interested enough to
          experiment here's how to do it
        </p>
      </>
    );
  }
}

export default LandingPage;
