import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #2304a3;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoaderText = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #333;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderContainer>
        <Spinner />
        <LoaderText>Loading articles...</LoaderText>
      </LoaderContainer>
    </LoaderWrapper>
  );
};

export default Loader;
