import styled from "styled-components";

export const Signin = styled.div`
  width: 100%;
  height: 600px;
  padding: 100px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 30%;
  height: 80%;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 50px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    color: #79818f;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input {
      padding: 0 16px;
      width: 70%;
      height: 48px;
      border: 1px solid #c9ccd2;
      border-radius: 3pxrgb (69, 105, 179);
      background-color: #f7f8f9;
      font-size: 16px;
      line-height: normal;
      color: #18191c;
      box-shadow: none;
      -webkit-appearance: none;
      margin-top: 20px;
      border-radius: 4px;
      outline: none;
    }

    button {
      padding: 0.875em 1em;
      width: 76%;
      margin-top: 8px;
      height: 48px;
      font-size: 16px;
      font-weight: 700;
      background-color: #1772f8;
      color: white;
      border-radius: 4px;
      outline: none;
      margin-top: 20px;
    }
  }
`;
export const Desc = styled.div`
  height: 48px;
  width: 75%;
  display: flex;
  align-items: center;
`;

export const FindPw = styled.span`
  margin-left: auto;
`;

export const Register = styled.span`
  margin-left: 24px;
  font-weight: 700;

  text-decoration: none;
  color: #1772f8;
`;
