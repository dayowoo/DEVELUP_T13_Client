import styled from "styled-components";

export const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 10;
`;

export const WhiteBackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem;
`;

export const Spacer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;
