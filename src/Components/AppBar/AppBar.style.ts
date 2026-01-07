import styled from "styled-components";

export const AppBarWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ccc;
`;

export const AppBarContent = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  margin: 0 auto;
  padding: 15px;
`;

export const AccountSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const AccountName = styled.span`
  color: #2304a3;
  font-weight: 500;
`;
