import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;
export const TableContainer = styled.div`
  width: 90%;
  max-width: 1600px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden; /* so rounded corners apply */
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  height: 40px;

  &:nth-child(odd) {
    background-color: #f0eff6;
  }
`;

export const TableHeadingRow = styled.tr`
  height: 40px;
  background-color: #fff;
`;

export const TableHeadCell = styled.th`
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #ccc;
  color: #333;
  cursor: pointer;
`;

export const ImpressionsHeadCell = styled.th`
  text-align: right;
  padding: 12px;
  border-bottom: 1px solid #ccc;
  color: #333;
  cursor: pointer;
`;

export const TableCell = styled.td`
  border-bottom: 1px solid #ccc;
  padding: 12px;
  color: #2304a3;

  a {
    text-decoration: none;
    color: #5b52ff;
  }
`;

export const RightAlignedCell = styled(TableCell)`
  text-align: right !important;
`;
