import React from "react";
import styled, { css } from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 4.5rem;
  gap: 4rem;
  isolation: isolate;
  width: auto;
  height: 100%;
  background: #f1f5f9;
  border-radius: 3rem;
  flex: 0 0 92%;

  ${(props) =>
    props.device === "mobile" &&
    css`
      @media (min-width: 769px) {
        flex-direction: row-reverse;
        gap: 0;
        padding: 0;
      }
    `}
`;

const ImageWrapper = styled.div`
  height: ${(props) => (props.$width > 768 ? "30rem" : "13rem")};
  width: 100%;
  border-radius: ${(props) => (props.$width > 768 ? "3rem" : "2rem")};
  background-size: cover;
  background-repeat: no-repeat;
`;

const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding: 0 3.5rem;
  width: 85%;
`;

const TitleMain = styled.section`
  display: "flex";
  gap: "1rem";
`;

const Title = styled.title`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background-color: #fafcfd;
`;

const Paragraph = styled.p`
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 110%;
  letter-spacing: -0.04rem;
  color: #0a0e12;
  margin-top: 1.5rem;
  ${(props) =>
    props.device === "mobile" &&
    css`
      @media (min-width: 769px) {
        font-size: 2rem;
      }
    `}
`;

const ButtonContainer = styled.button`
  width: 5rem;
  height: 2.813rem;
  background: #0a0e12;
  border-radius: 0.75rem;
  margin-top: 5rem;
  border: none;
  cursor: pointer;

  &:hover {
    background: #17d5ff;
    color: white;
  }
`;

const Card = ({ data, idx, activeIdx, width }) => {
  return (
    <Main device="mobile">
      {/* <img className="card__image" src={data?.image} alt="img" /> */}
      <ImageWrapper
        $width={width}
        style={{ backgroundImage: `url(${data.image})` }}
      >
        {/* <video src={data.image} controls muted /> */}
      </ImageWrapper>
      <TitleContainer>
        {/* <div className="card__title">{data?.title}</div> */}
        {width > 768 ? (
          <TitleMain>
            <Title>{data?.title}</Title>
            <Title>{data?.title}</Title>
          </TitleMain>
        ) : (
          <Title>{data?.title}</Title>
        )}
        <Paragraph className="card__paragraph">{data?.paragraph}</Paragraph>
        <ButtonContainer>
          <img src="" alt="" />
        </ButtonContainer>
      </TitleContainer>
    </Main>
  );
};

export default Card;
