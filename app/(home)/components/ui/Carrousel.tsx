"use client";
import React from "react";

const Carrousel: React.FC = () => {
  const imagesLeft = [
    "/assets/company/company-01.png",
    "/assets/company/company-02.png",
    "/assets/company/company-03.png",
    "/assets/company/company-04.png",
    "/assets/company/company-05.png",
  ];
  const imagesRight = [
    "/assets/company/company-06.png",
    "/assets/company/company-07.png",
    "/assets/company/company-08.png",
    "/assets/company/company-09.png",
    "/assets/company/company-10.png",
  ];

  return (
    <div>
      {/* <div className="text-center text-lg font-medium text-gray-500 dark:text-gray-400">
        +16 PROJETOS DESENVOLVIDOS
      </div> */}
      <div className="wrapper">
        {imagesLeft.map((src, index) => (
          <div key={index} className={`itemLeft item${index + 1}`}>
            <img src={src} alt={`Image ${index + 1}`} className="image" />
          </div>
        ))}
      </div>
      <div className="wrapper">
        {imagesRight.map((src, index) => (
          <div key={index} className={`itemRight item${index + 1}`}>
            <img src={src} alt={`Image ${index + 9}`} className="image" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .wrapper {
          margin-top: 2rem;
          width: 90%;
          max-width: 1536px;
          margin-inline: auto;
          height: 100px;
          position: relative;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 70%,
            rgba(0, 0, 0, 1) 30%,
            rgba(0, 0, 0, 0)
          );
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
        }

        .itemLeft,
        .itemRight {
          width: 180px;
          height: 100px;
          position: absolute;
          animation-timing-function: linear;
          animation-duration: 30s;
          animation-iteration-count: infinite;
        }

        .itemLeft {
          left: max(calc(200px * 6), 100%);
          animation-name: scrollLeft;
        }

        .itemRight {
          right: max(calc(200px * 6), calc(100% + 200px));
          animation-name: scrollRight;
        }

        @keyframes scrollLeft {
          to {
            left: -200px;
          }
        }

        @keyframes scrollRight {
          to {
            right: -200px;
          }
        }

        .item1 {
          animation-delay: calc(30s / 5 * (5 - 1) * -1);
        }

        .item2 {
          animation-delay: calc(30s / 5 * (5 - 2) * -1);
        }

        .item3 {
          animation-delay: calc(30s / 5 * (5 - 3) * -1);
        }

        .item4 {
          animation-delay: calc(30s / 5 * (5 - 4) * -1);
        }

        .item5 {
          animation-delay: calc(30s / 5 * (5 - 5) * -1);
        }

        .item6 {
          animation-delay: calc(30s / 5 * (5 - 6) * -1);
        }

        .item7 {
          animation-delay: calc(30s / 5 * (5 - 7) * -1);
        }

        .item8 {
          animation-delay: calc(30s / 5 * (5 - 8) * -1);
        }
      `}</style>
    </div>
  );
};

export default Carrousel;
