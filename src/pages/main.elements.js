import styled from "styled-components";

export const Present = styled.div`
  position: relative;
  margin-top: 6rem;
`;

export const BackgroundImg = styled.div`
  position: absolute;
  width: 100%;
  height: 40rem;
  background: ${(props) => `url(${props.image}) 100% 60%`};
  background-color: black;
  background-size: cover;
  filter: brightness(70%) blur(0.15rem);
  z-index: -1;
`;

export const TourCity = styled.h3`
  position: absolute;
  background-color: var(--my-blue2);
  padding: 0 1.8rem;
  color: white;
  border-radius: 5%;
  top: -1.5rem;
  font-weight: 500;
  font-size: 1.8rem;
  box-shadow: 0 1px 5px gray;
`;

export const TourTitle = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 2rem;
  height: 6rem;
  padding: 0 1rem;
`;

export const TourCost = styled.p`
  position: relative;
  background: var(--my-yellow);
  color: white;
  margin-top: 1rem;
  padding: 0 1.4rem;
  font-size: 1.8rem;
  border-radius: 5%;

  :before {
    content: "";
    position: absolute;
    background: white;
    left: -0.7rem;
    top: 0.7rem;
    width: 1.5rem;
    height: 1.3rem;
    border-radius: 50%;
  }
`;
