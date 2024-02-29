import styled from "styled-components";
import Search from "../shared/Search";
import MyDataPicker from "../shared/DataPicker";
import Table from "../Table";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

const MainSection = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Wrapper>
        <HeadingText>Drives</HeadingText>
        <FilteringArea>
          <Search />
          <MyDataPicker />
        </FilteringArea>

        <TableWrapper>
          <Table />
        </TableWrapper>
      </Wrapper>
    </LocalizationProvider>
  );
};
export default MainSection;

const Wrapper = styled.div`
  margin: 40px;
  padding: 24px;
  background-color: #ffffff;
  width: 100%;
  border-radius: 16px;
`;

const HeadingText = styled.div`
  font-size: 28px;
  border-bottom: 1px solid #e3e8e5;
  padding-bottom: 16px;
`;

const FilteringArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0px;
  height: 48px;
`;

const TableWrapper = styled.div`
  width: 100%;
  height: 80%;
  overflow: auto;
`;
