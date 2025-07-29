import React from "react";
import Slider from "react-slick";
import { Slide } from "react-awesome-reveal";
import "./FeaturedWorks.css";

// Import slick-carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedWorks = () => {
  // Data for your portfolio works
  const works = [
    {
      img: "https://i.imgur.com/uC0Ttry.png",
      caption: "Sell Sheet | Alimentiv",
      url: "/documents/your-sell-sheet.pdf"
    },
    {
      img: "https://i.imgur.com/b58a1rS.png",
      caption: "Brochure | Alimentiv",
      url: "/documents/your-brochure.pdf"
    },
    {
      img: "https://i.imgur.com/v11mBEe.png",
      caption: "Article | External Site",
      url: "https://www.your-article-link.com"
    },
    {
      img: "https://i.imgur.com/2s4q03g.png",
      caption: "Interview | Blog Post",
      url: "https://www.your-interview-link.com"
    },
    {
      img: "https://i.imgur.com/uC0Ttry.png",
      caption: "Case Study | Alimentiv",
      url: "/documents/your-case-study.pdf"
    }
  ];

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // CHANGED: from 4 to 3
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="portfolio" className="featured-works">
      <Slide direction="up" triggerOnce>
        <h2>Featured Works</h2>
      </Slide>

      <Slider {...settings}>
        {works.map((work, index) => (
          <a
            href={work.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="work-item-link"
          >
            <div className="work-item-card">
              <div className="work-image-container">
                <img src={work.img} alt={work.caption} className="work-image" />
              </div>
              <p className="work-caption">{work.caption}</p>
            </div>
          </a>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedWorks;