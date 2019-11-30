import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 315px;
  width: 242px;
  align-items: center;
  margin-left: 20px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0,0,0,0.2);
  img {
    width: 240px;
    height: 180px;
    border-radius: 5px;
  }

  div {
    margin-left: 15px;
    h1 {
      font-size: 1rem;
      font-weight: 500;
    }

    span {
        font-size: 0.8rem;
        color: rgb(60, 55, 55);
    }

    h2 {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 90%;
        border: 1px solid gray;
    }

    p {
        font-size: 1rem;
    }
  }
`;
