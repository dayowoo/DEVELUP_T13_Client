import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 180px;
  padding: 1.7rem 0 2.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 54%;
  align-items: center;

  h1 {
    font-size: 19.6px;
    font-weight: 700;
    margin-bottom: 15px;
    margin-right: auto;
  }

  div {
    display: flex;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 500px;
  height: 122px;
  background-color: #fff;
  border: 1px solid rgb(239, 239, 239);
  margin-left: 2%;
  margin-right: 2%;
`;
