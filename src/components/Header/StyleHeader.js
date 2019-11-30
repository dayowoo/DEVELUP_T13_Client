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
  background: #fff;
  display: flex;
  justify-content: center;
  height: auto;
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 5%;
  justify-content: center;
`;

export const Item = styled.span`
    margin-left: 1%;
    margin-right: 1%;
    color: black;
    font-weight: bold;
`

export const Spacer = styled.div`
    flex: 1;
`

export const Logo = styled.img`

`
