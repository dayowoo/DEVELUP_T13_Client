import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 3%;
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
`;

export const CardWrapper = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  display: flex;
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0 14px;
  align-items: center;

  span {
    margin-top: auto;
    font-size: 0.8rem;
    margin-left: 5px;
  }
`;
