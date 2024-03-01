import styled from "styled-components";
import Search from "../shared/Search";
import Table from "../Table";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import DatePickerComponent from "../shared/DataPicker";

const MainSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dataPickerValue, setDataPickerValue] = useState<string>("");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Wrapper>
        <HeadingText>Drives</HeadingText>
        <FilteringArea>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <DatePickerComponent
            dataPickerValue={dataPickerValue}
            setDataPickerValue={setDataPickerValue}
          />
        </FilteringArea>
        <Table
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          dataPickerValue={dataPickerValue}
        />
      </Wrapper>
    </LocalizationProvider>
  );
};
export default MainSection;

const Wrapper = styled.div`
  margin: 40px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 16px;
  width: 75%;
  @media (max-width: 1100px) {
    width: 65%;
  }
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
  gap: 20px;
`;

const TableWrapper = styled.div`
  width: 100%;
  height: 80%;
  overflow: auto;
`;
