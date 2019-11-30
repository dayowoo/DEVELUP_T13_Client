import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  background-color: #e3e3e3;
  justify-content: center;
  position: relative;

  img {
    padding-top: 50px;
  }

  div{
    color: white;
    position: absolute;
    top: 80%;
    left: 15%;
    h2 {
      margin-top: 0px;
    }
  }
`;
