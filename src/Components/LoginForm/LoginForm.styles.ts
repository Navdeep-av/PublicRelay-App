import styled from "styled-components";

export const Page = styled.div`
  height: 100vh;
  background-color: #000;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginDiv = styled.div`
  text-align: center;
  color: #000;
  background-color: #fff;
  padding: 50px;
  width: 400px;
  border-radius: 10px;
`;

export const Label = styled.label`
  color: #2304a3;
  text-align: left;
  font-weight: 500;
`;

export const FieldWrapper = styled.div`
  width: 290px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  height: 25px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-weight: 500;
  font-family: inherit;
  font-size: 1rem;
  margin-top: 6px;

  &:disabled {
    background-color: #808080;
    color: #2304a3;
  }

  &:not(:disabled) {
    background-color: #5b52ff;
    color: #fff;
  }
`;

export const Logo = styled.img`
  width: 180px;
`;
