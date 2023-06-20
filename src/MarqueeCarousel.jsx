import React, { useState, useEffect, useRef } from "react";

import Card from "./Components/Card";
import styled, { css } from "styled-components";

let boolean = false;

const Main = styled.main`
  overflow: hidden;
`;

const Header = styled.header`
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.$width > 768 ? "5.75rem" : "3.75rem")};
  line-height: 100%;
  margin-bottom: ${(props) => (props.$width > 768 ? "3rem" : "2.5rem")};
  /* or 92px */

  text-align: center;
  letter-spacing: ${(props) => (props.$width > 768 ? "-0.05rem" : "-0.04rem")};
  /* Grayscale/Black */

  color: #0a0e12;
`;

const CarouselContainer = styled.article`
  position: relative;
  overflow: hidden;
  margin-bottom: ${(props) => (props.$width > 768 ? "5rem" : "3rem")};
`;

const CardContainer = styled.section`
  display: flex;
  transition: transform 1s ease-in-out;
  gap: 1rem;
  margin-top: ${(props) => (props.$width > 768 ? "5.5rem" : "3rem")};
  ${(props) =>
    props.device === "desktop" &&
    css`
      @media (min-width: 1024px) {
        margin-left: 10rem;
      }
    `}
`;

const CarouselDotContainer = styled.article`
  text-align: center;
  margin-top: ${(props) => (props.$width > 768 ? "4rem" : "1.25rem")};
`;

const CarouselDot = styled.section`
  display: inline-block;
  width: 1.5rem;
  height: 0.25rem;
  background-color: #dfe4ea;
  border-radius: 1px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 1s ease-in-out;
  background-color: ${(props) =>
    props.$index === props.$currentImage ? "#0a0e12" : ""};
`;

const Button = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.$width > 768 ? "2rem" : "1rem")};
  text-align: center;
`;

function MarqueeCarousel({
  mockData,
  currentImage,
  setCurrentImage,
  width,
  children
}) {
  if (!boolean) {
    mockData.push(mockData[0]);
    boolean = true;
  }

  useEffect(() => {
    // Check if currentImage is the last image index
    if (currentImage === mockData.length - 2) {
      setTimeout(() => {
        setCurrentImage(0);
      }, 3000);
    }
  }, [currentImage]);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <Main>
      <Header $width={width}>
        Vimeo <br /> customer stories
      </Header>

      {/* button comes here */}

      <Button>button comes here...</Button>

      <CarouselContainer $width={width}>
        <CardContainer
          device="desktop"
          $width={width}
          style={{ transform: `translateX(-${currentImage * 94}%)` }}
        >
          {children}
        </CardContainer>
        <CarouselDotContainer $width={width}>
          {mockData.slice(0, -1).map((image, index) => (
            <CarouselDot
              key={index}
              $index={index}
              $currentImage={currentImage}
              onClick={() => handleDotClick(index)}
            ></CarouselDot>
          ))}
        </CarouselDotContainer>
      </CarouselContainer>
    </Main>
  );
}

export default MarqueeCarousel;
