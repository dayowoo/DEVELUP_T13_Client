import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
  height: 800px;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f1f9ff;
`;

export const HeaderWrapper = styled.div`
    width: 100%;
    margin: 0 20%;

    rp {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        border-bottom: 1px solid black;
    }

    p {
        margin: 5px;
    }
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    margin: 0 20%;
    display: flex;
    flex-direction: column;
    rp {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        border-bottom: 1px solid black;
    }

    p {
        margin: 30px;
    }

    button {
        margin-left: auto;
        height: 40px;
        width: 120px;
        font-size: 15px;
        color: black;
        border: 1px solid gray;
        border-radius: 5px;
        background-color: white;
        outline: none;
        
        &:hover {
            background-color: #f1f9ff;
            color: black;
        }
    }
`