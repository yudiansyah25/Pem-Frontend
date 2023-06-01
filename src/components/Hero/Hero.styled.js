import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem auto;
  padding: 1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
  }
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

export const hero_left = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

export const hero_right = styled.div`
  @media (min-width: 992px) {
    flex-basis: 60%;
  }
`;

export const hero_title = styled.h2`
  color: #780116;
  margin-bottom: 1rem;
  font-size: 2.44rem;
`;

export const hero_gendre = styled.p`
  color: burlywood;
  font-size: 1.59rem;
`;

export const hero_description = styled.p`
  color: #780116;
  margin-bottom: 1rem;
`;

export const hero_button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #780116;
  color: #fff;
`;

export const hero_img = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
`;